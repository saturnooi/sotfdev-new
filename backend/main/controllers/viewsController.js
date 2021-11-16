const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const User = require('../models/userModel');
const Cleaning = require('../models/jobCategoriesModel/cleaningModel');
const Consultant = require('../models/jobCategoriesModel/consultantModel');
const Handyman = require('../models/jobCategoriesModel/handymanModel');
const Mounting = require('../models/jobCategoriesModel/mountingModel');
const MovingServices = require('../models/jobCategoriesModel/movingServicesModel');
const PersonalAssistant = require('../models/jobCategoriesModel/personalAssistantModel');
const VisualAudio = require('../models/jobCategoriesModel/visualAudioModel');
const Yardwork = require('../models/jobCategoriesModel/yardworkModel');

// exports.aliasTopTasker = (req, res, next) => {
//     req.query.limit = '1';
//     req.query.sort = '-reviewScore';
//     req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
//     next();
// };

exports.getindex = catchAsync(async (req, res, next) => {
    req.query.limit = '1';
    req.query.sort = '-ratingsAverage';
    req.query.fields = 'id,firstname,lastname,ratingsAverage,description,locations,subCategories,price';

    const cleaning = new APIFeatures(Cleaning.find(), req.query).filter().sort().limitFields().paginate();
    const consultant = new APIFeatures(Consultant.find(), req.query).filter().sort().limitFields().paginate();
    const handyman = new APIFeatures(Handyman.find(), req.query).filter().sort().limitFields().paginate();
    const mounting = new APIFeatures(Mounting.find(), req.query).filter().sort().limitFields().paginate();
    const movingServices = new APIFeatures(MovingServices.find(), req.query).filter().sort().limitFields().paginate();
    const personalAssistant = new APIFeatures(PersonalAssistant.find(), req.query).filter().sort().limitFields().paginate();
    const visualAudio = new APIFeatures(VisualAudio.find(), req.query).filter().sort().limitFields().paginate();
    const yardwork = new APIFeatures(Yardwork.find(), req.query).filter().sort().limitFields().paginate();

    // SEND RESPONSE
    const topCleaning = await cleaning.query;
    const topConsultant = await consultant.query;
    const topHandyman = await handyman.query;
    const topMounting = await mounting.query;
    const topMovingServices = await movingServices.query;
    const topPersonalAssistant = await personalAssistant.query;
    const topVisualAudio = await visualAudio.query;
    const topYardwork = await yardwork.query;

    taskers = []
    taskers.push(topCleaning[0], topConsultant[0], topHandyman[0], topMounting[0], topMovingServices[0], topPersonalAssistant[0], topVisualAudio[0], topYardwork[0]);

    const categories = ["Cleaning", "Consultant", "Handyman", "Mounting", "MovingServices", "PersonalAssistant", "VisualAudio", "Yardwork"];
    res.status(200).json({
        title: 'Index',
        categories,
        taskers
    });
    // res.status(200).json({
    //     status: 'success',
    //     topCleaning,
    //     topConsultant
    // });
});

exports.getSignUpForm = (req, res) => {
    res.status(200).render('signup', {
        title: 'Sign Up'
    });
};

exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
        title: 'Log into your account'
    });
};

exports.getAccount = (req, res) => {
    res.status(200).render('account', {
        title: 'Account'
    });
};

exports.getChat = (req, res) => {
    res.status(200).render('chat', {
        title: 'Chat'
    });
};

