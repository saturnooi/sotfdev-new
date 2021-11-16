const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const VisualAudio = require('../../models/jobCategoriesModel/visualAudioModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '7';
    req.query.sort = '-reviewtScore';
    req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
    next();
};

exports.getAllVisualAudioUser = catchAsync(async (req, res, next) => {
    subCategories = ['Photography', 'Videography', 'Voice-over', 'Singer-band', 'Animations', 'Podcast', 'Subtitle', 'Sound Engineering', 'Makeup'];
    const features = new APIFeatures(VisualAudio.find(), req.query)
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

exports.getVisualAudioUser = catchAsync(async (req, res, next) => {

    const user = await VisualAudio.find({ id: req.params.id });

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

exports.getVisualAudioSubCategories = catchAsync(async (req, res, next) => {

    const user = await VisualAudio.find({ subCategories: req.params.subCategories });

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

exports.createVisualAudioUser = catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const duplicate = await VisualAudio.find({ user: req.user.id })
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const newVisualAudioUser = await VisualAudio.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newVisualAudioUser
        }
    });
});