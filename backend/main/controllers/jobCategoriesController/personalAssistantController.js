const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const PersonalAssistant = require('../../models/jobCategoriesModel/personalAssistantModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '7';
    req.query.sort = '-reviewtScore';
    req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
    next();
};

exports.getAllPersonalAssistantUser = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(PersonalAssistant.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();    //page='int'&limit='int'

    // SEND RESPONSE
    const users = await features.query;
    res.status(200).json({
        status: 'success',
        result: users.length,
        data: {
            //subCategories,
            users
        }
    });
});

exports.getPersonalAssistantUser = catchAsync(async (req, res, next) => {

    const user = await PersonalAssistant.find({ id: req.params.id });

    if (!user) {
        return next(new AppError('No user found with thai ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});

exports.getPersonalAssistantSubCategories = catchAsync(async (req, res, next) => {

    const user = await PersonalAssistant.find({ subCategories: req.params.subCategories });

    if (!user) {
        return next(new AppError('No user found with thai ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});

exports.createPersonalAssistantUser = catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const duplicate = await PersonalAssistant.find({ user: req.user.id })
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const newPersonalAssistantUser = await PersonalAssistant.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newPersonalAssistantUser
        }
    });
});