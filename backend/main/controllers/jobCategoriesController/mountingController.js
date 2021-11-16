const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const Mounting = require('../../models/jobCategoriesModel/mountingModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '10';
    req.query.sort = '-reviewtScore';
    req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
    req.query.paginate = 5
    next();
};

exports.getAllMountingUser = catchAsync(async (req, res, next) => {
    subCategories = ['TV Mounting', 'Hanging Curtains & Installing Blinds', 'Mounting solar', 'Door & Window Installation', 'Light Installation'];
    const features = new APIFeatures(Mounting.find(), req.query)
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

exports.getMountingUser = catchAsync(async (req, res, next) => {

    const user = await Mounting.find({ id: req.params.id });

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

exports.getMountingSubCategories = catchAsync(async (req, res, next) => {

    const user = await Mounting.find({ subCategories: req.params.subCategories });

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

exports.createMountingUser = catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const duplicate = await Mounting.find({ user: req.user.id })
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const newMountingUser = await Mounting.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newMountingUser
        }
    });
});