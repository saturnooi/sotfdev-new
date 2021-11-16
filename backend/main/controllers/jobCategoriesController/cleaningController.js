const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const Cleaning = require('../../models/jobCategoriesModel/cleaningModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '10';
    req.query.sort = '-ratingsAverage';
    req.query.fields = 'id,firstname,lastname,ratingsAverage,description,locations,subCategories';
    next();
};

exports.getAllCleaningUser = catchAsync(async (req, res, next) => {
    subCategories = ['House Cleaning Services', 'Disinfecting Services', 'Laundry Help', 'Air Conditioning Cleaning Service'];
    const features = new APIFeatures(Cleaning.find(), req.query)
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

exports.getCleaningUser = catchAsync(async (req, res, next) => {

    const user = await Cleaning.find({ id: req.params.id });

    if (!user) {
        return next(new AppError('No user found with thai ID', 404))
    }

    res.status(200).json({
        status: 'success',
        user
    });
});

exports.getCleaningSubCategories = catchAsync(async (req, res, next) => {

    const user = await Cleaning.find({ subCategories: req.params.subCategories });

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

exports.createCleaningUser = catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const duplicate = await Cleaning.find({ user: req.user.id });
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const newCleaningUser = await Cleaning.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newCleaningUser
        }
    });
});