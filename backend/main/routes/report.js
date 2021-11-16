const express = require('express')
const router = express.Router()

const reportController = require('../controllers/reportController')

router
    .route('/')
    .get(reportController.getAllReport)

router
    .route('/:contractId')
    .get(reportController.getReport)
    .post(reportController.createReport);


module.exports = router