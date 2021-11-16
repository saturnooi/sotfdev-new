const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const Handyman = require('../../models/jobCategoriesModel/handymanModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '7';
    req.query.sort = '-reviewtScore';
    req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
    next();
};

exports.getAllHandymanUser = catchAsync(async (req, res, next) => {
    subCategories = ['Home Repairs', 'Furniture Assembly', 'Plumbing', 'Mounting', 'Electrical Help', 'Heavy Lifting'];
    const features = new APIFeatures(Handyman.find(), req.query)
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
            subCategories,
            users
        }
    });
});

exports.getHandymanUser = catchAsync(async (req, res, next) => {

    const user = await Handyman.find({ id: req.params.id });

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

exports.getHandymanSubCategories = catchAsync(async (req, res, next) => {

    const user = await Handyman.find({ subCategories: req.params.subCategories });

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

exports.createHandymanUser = catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const duplicate = await Handyman.find({ user: req.user.id })
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const newHandymanUser = await Handyman.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newHandymanUser
        }
    });
});