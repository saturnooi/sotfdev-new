const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const User = require('../models/userModel');
const Transaction = require('../models/transactionModel');

exports.createTransaction = catchAsync(async (req, res, next) => {

    //retype password before finishing transaction
    const user = await User.findById(req.user.id);
    let transaction
    // if (!user.checkPassword(req.body.password)) {
    //     return next(new AppError('Incorrect password', 401));
    // }

    //check amount >0
    if (req.body.amount <= 0) {
        return next(new AppError('Amount must be greater than 0', 400));
    }
    //check transaction type
    if (req.body.type === 'deposit') {
        user.wallet += req.body.amount
        await User.findByIdAndUpdate(req.user.id, { wallet: user.wallet }, { new: true });
        transaction = await Transaction.create({
            user: req.user.id,
            amount: req.body.amount,
            type: req.body.type
        });
    }
    else if (req.body.type === 'withdraw') {
        if (user.wallet < req.body.amount) {
            return next(new AppError('Insufficient balance', 400));
        }
        user.wallet -= req.body.amount
        await User.findByIdAndUpdate(req.user.id, { wallet: user.wallet }, { new: true });
        transaction = await Transaction.create({
            user: req.user.id,
            amount: req.body.amount * -1,
            type: req.body.type
        });
    }
    else {
        return next(new AppError('Invalid transaction type', 400));
    }


    res.status(201).json({
        status: 'success',
        transaction
    });
});

exports.getAllTransactionHistory = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const transaction = await Transaction.find({ $or: [{ user: req.user.id }, { tasker: req.user.id }] });
    // const transaction = await Transaction.find({ user: req.user.id });

    res.status(201).json({
        status: 'success',
        transaction,
        balance: user.wallet
    });
});

// exports.checkBalance = catchAsync(async (req, res, next) => {
//     const user = await User.findById(req.user.id);

//     res.status(201).json({
//         status: 'success',
//         data: {
//             balance: user.wallet
//         }
//     });
// });
