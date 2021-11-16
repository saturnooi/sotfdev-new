const express = require('express')
const router = express.Router({ mergeParams: true });
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');


router.use(authController.protect, authController.isLoggedIn);

router
    .route('/cleanings/:id')
    .patch(reviewController.createReviewCleaning);

router
    .route('/consultants/:id')
    .patch(reviewController.createReviewConsultant);

router
    .route('/handymen/:id')
    .patch(reviewController.createReviewHandyman);

router
    .route('/mountings/:id')
    .patch(reviewController.createReviewMounting);

router
    .route('/movingServices/:id')
    .patch(reviewController.createReviewMovingServices);

router
    .route('/personalAssistants/:id')
    .patch(reviewController.createReviewPersonalAssistant);

router
    .route('/visualAudios/:id')
    .patch(reviewController.createReviewVisualAudio);

router
    .route('/yardworks/:id')
    .patch(reviewController.createReviewYardwork);

module.exports = router