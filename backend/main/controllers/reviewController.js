const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Contract = require('../models/contractModel');

const Cleaning = require('../models/jobCategoriesModel/cleaningModel');
const Consultant = require('../models/jobCategoriesModel/consultantModel');
const Handyman = require('../models/jobCategoriesModel/handymanModel');
const Mounting = require('../models/jobCategoriesModel/mountingModel');
const MovingServices = require('../models/jobCategoriesModel/movingServicesModel');
const PersonalAssistant = require('../models/jobCategoriesModel/personalAssistantModel');
const VisualAudio = require('../models/jobCategoriesModel/visualAudioModel');
const Yardwork = require('../models/jobCategoriesModel/yardworkModel');

exports.createReviewCleaning = catchAsync(async (req, res, next) => {

    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));


    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await Cleaning.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await Cleaning.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });

    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewConsultant = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await Consultant.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await Consultant.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });

    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewHandyman = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await Handyman.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await Handyman.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });
    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewMounting = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await Mounting.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await Mounting.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });
    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewMovingServices = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await MovingServices.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await MovingServices.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });

    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewPersonalAssistant = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await PersonalAssistant.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await PersonalAssistant.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });

    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewVisualAudio = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await VisualAudio.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await VisualAudio.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });

    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});

exports.createReviewYardwork = catchAsync(async (req, res, next) => {
    // check contract exist
    const contract = await Contract.findById(req.params.id);

    // check status of contract should be finish
    if (contract.status !== 'finish') return next(new AppError('Contract is not finish yet', 400));

    if (!contract || contract.is_review != false) return next(new AppError('contract not found', 404));

    // check user in contract is the same as user in request
    if (contract.tasker._id != req.user.id) return next(new AppError('user and tasker are the same person', 400));

    const tasker = await Yardwork.findOne({ user: contract.tasker._id });
    const newQuantity = tasker.ratingsQuantity + 1;
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (newQuantity);
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await Yardwork.findOneAndUpdate(
        { user: contract.tasker._id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview, history: req.params.id }, }, { new: true })


    await Contract.findByIdAndUpdate(req.params.id, { is_review: true }, { new: true });

    res.status(201).json({
        status: 'success',
        data: {
            review
        }
    });
});