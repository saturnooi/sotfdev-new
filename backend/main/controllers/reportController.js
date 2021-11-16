const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Contract = require('../models/contractModel');
const Report = require('../models/reportModel');

exports.createReport = catchAsync(async (req, res, next) => {
    //check if contract exists
    const contract = await Contract.findById(req.params.contractId);
    if (!contract)
        return next(new AppError('No contract found with that ID', 404));

    // check user in report is same in user in contract
    else if (contract.user.toString() !== req.user.id)
        return next(new AppError('You are not authorized to create a report for this contract', 401));

    req.body.contract = req.params.contractId;
    const report = await Report.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            report
        }
    });
});

exports.getAllReport = catchAsync(async (req, res, next) => {
    const report = await Report.find();
    res.status(200).json({
        status: 'success',
        data: {
            report
        }
    });
});

exports.getReport = catchAsync(async (req, res, next) => {
    const report = await Report.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            report
        }
    });
});