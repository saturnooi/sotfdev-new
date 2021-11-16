const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const Yardwork = require('../../models/jobCategoriesModel/yardworkModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '7';
    req.query.sort = '-reviewtScore';
    req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
    next();
};

exports.getAllYardworkUser = catchAsync(async (req, res, next) => {
    subCategories = ['Tree Trimming Service', 'Hedge Trimming Service', 'Lawn Mowing', 'Gutter Cleaning', 'Patio Cleaning', 'Pool Cleaning Services'];
    const features = new APIFeatures(Yardwork.find(), req.query)
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

exports.getYardworkUser = catchAsync(async (req, res, next) => {

    const user = await Yardwork.find({ id: req.params.id });

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

exports.getYardworkSubCategories = catchAsync(async (req, res, next) => {

    const user = await Yardwork.find({ subCategories: req.params.subCategories });

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

exports.createYardworkUser = catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const duplicate = await Yardwork.find({ user: req.body.user })
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const newYardworkUser = await Yardwork.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newYardworkUser
        }
    });
});