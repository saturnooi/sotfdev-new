const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const User = require('../models/userModel');
const Chat = require('../models/chatModel');
const Contract = require('../models/contractModel');
const Transaction = require('../models/transactionModel');

exports.createContract = catchAsync(async (req, res, next) => {

    // the contract must create by the tasker
    const chat = await Chat.findById(req.params.id);
    // if (chat.tasker.toString() !== req.user.id) {
    //     return next(new AppError('You are not authorized to create contract for this chat', 401));
    // }

    req.body.tasker = chat.tasker;
    req.body.user = chat.user;
    const contract = await Contract.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.getMyAllContracts = catchAsync(async (req, res, next) => {
    // const contractActive = await Contract.find({ tasker: req.user.id, user: req.user.id, status: 'active' });
    const contractActive = await Contract.find({ $or: [{ tasker: req.user.id }, { user: req.user.id }], status: 'active' });
    const contractFinish = await Contract.find({ $or: [{ tasker: req.user.id }, { user: req.user.id }], status: 'finish' });
    res.status(200).json({
        status: 'success',
        data: {
            contractActive,
            contractFinish
        }
    });
});

exports.getContract = catchAsync(async (req, res, next) => {
    const contract = await Contract.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.acceptContract = catchAsync(async (req, res, next) => {
    const contract = await Contract.findById(req.params.id);

    // check have contract
    if (!contract) {
        return next(new AppError('Contract not found', 404));
    }

    // if you are the user in contract
    if (contract.user.toString() === req.user.id) {
        const user = await User.findById(req.user.id);
        const systemWallet = await User.findOne({ id: "619139cdbc31fae6c4c9c49a", role: 'system' });
        console.log(systemWallet);
        if (user.wallet >= contract.price) {
            // deduct money from sender's wallet to system's wallet
            user.wallet -= contract.price
            systemWallet.wallet += contract.price

            // create transaction
            const transaction = await Transaction.create({
                sender: req.user.id,
                recepient: contract.tasker,
                amount: contract.price,
                type: 'transfer',
                description: 'Transfer money from user to tasker'
            });

            contract.status = 'active';
            await contract.save();
        }
        else {
            // 
            return next(new AppError('Insufficient balance', 404));
        }
    }

    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.editContract = catchAsync(async (req, res, next) => {
    // const contract = await Contract.findOneAndUpdate({ id: req.params.id, tasker: req.user.id, Active: "active" }, req.body, { new: true, runValidators: true });
    const contract = await Contract.find({ id: req.params.id, tasker: req.user.id, status: 'active' });
    // must be update after 1 day from the created date
    const date = new Date();
    const dateCreate = new Date(contract.createdAt);
    dateCreate.setDate(dateCreate.getDate() + 1);
    if (date > dateCreate) {
        return next(new AppError('You can not edit contract after 1 days', 400));
    }

    const contractEdit = await Contract.findOneAndUpdate({ id: req.params.id, tasker: req.user.id, Active: "active" }, req.body, { new: true, runValidators: true });
    if (!contractEdit) {
        return next(new AppError('You are not authorized to update this contract', 401));
    }
    res.status(200).json({
        status: 'success',
        data: {
            contract: contractEdit
        }
    });
});


exports.contractFinish = catchAsync(async (req, res, next) => {
    // tasker can finish contract
    const contract = await Contract.findOneAndUpdate({ id: req.params.id, tasker: req.user.id, status: 'active' }, { status: 'finish' }, { new: true, runValidators: true });

    //transfer money from system's wallet to tasker's wallet
    const tasker = await User.findById(req.user.id);
    const systemWallet = await User.findOne({ id: "619139cdbc31fae6c4c9c49a", role: 'system' });

    // deduct money from sender's wallet to system's wallet
    tasker.wallet += contract.price
    systemWallet.wallet -= contract.price


    res.status(201).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.contractCancel = catchAsync(async (req, res, next) => {
    const contract = await Contract.findById(req.params.id);

    // check date to cancel after 1 day
    const date = new Date();
    const dateCreate = new Date(contract.createdAt);
    dateCreate.setDate(dateCreate.getDate() + 1);
    const dateWork = new Date(contract.date);
    dateWork.setDate(dateWork.getDate() + 1);
    if (date > dateCreate && date < dateWork) {
        return next(new AppError('You can not cancel contract after 1 days', 400));
    }

    // deduct money from system's wallet to user's wallet
    const user = await User.findById(req.user.id);
    const systemWallet = await User.findOne({ id: "619139cdbc31fae6c4c9c49a", role: 'system' });
    user.wallet += contract.price
    systemWallet.wallet -= contract.price

    // create transaction
    const transaction = await Transaction.create({
        sender: contract.tasker,
        recepient: req.user.id,
        amount: contract.price,
        type: 'transfer',
        description: 'Refund completed'
    });

    const contractCancel = await Contract.findOneAndUpdate({ id: req.params.id, status: 'active' }, { status: 'cancel' }, { new: true, runValidators: true });

    res.status(201).json({
        status: 'success',
        data: {
            contract: contractCancel
        }
    });
});

// Admin
exports.getAllContracts = catchAsync(async (req, res, next) => {
    const contract = await Contract.find();
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});