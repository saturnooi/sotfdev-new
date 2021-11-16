const express = require('express')
const router = express.Router()

const authController = require('./../controllers/authController');
const userController = require('../controllers/userController');
const cleaningController = require('./../controllers/jobCategoriesController/cleaningController');
const consultantController = require('./../controllers/jobCategoriesController/consultantController');
const handymanController = require('./../controllers/jobCategoriesController/handymanController');
const mountingController = require('./../controllers/jobCategoriesController/mountingController');
const movingServicesController = require('./../controllers/jobCategoriesController/movingServicesController');
const personalAssistantController = require('./../controllers/jobCategoriesController/personalAssistantController');
const visualAudioController = require('./../controllers/jobCategoriesController/visualAudioController');
const yardworkController = require('./../controllers/jobCategoriesController/yardworkController');

router.use(authController.protect);

// Cleaning
router
    .route('/cleanings')
    .get(cleaningController.aliasTopTasker, cleaningController.getAllCleaningUser)
    .post(userController.getMe, cleaningController.createCleaningUser);
router
    .route('/cleanings/:id')
    .get(cleaningController.getCleaningUser);
router
    .route('/cleanings/sub/:subCategories')
    .get(cleaningController.getCleaningSubCategories);

// router.route('/cleaning/Me').get(cleaningController.getUserID, cleaningController.getCleaningUser);

// Consultant
router
    .route('/consultants')
    .get(consultantController.getAllConsultantUser)
    .post(userController.getMe, consultantController.createConsultantUser);
router
    .route('/consultants/:id')
    .get(consultantController.getConsultantUser);
router
    .route('/consultants/sub/:subCategories')
    .get(consultantController.getConsultantSubCategories);

// Handyman
router
    .route('/handymen')
    .get(handymanController.getAllHandymanUser)
    .post(userController.getMe, handymanController.createHandymanUser);
router
    .route('/handymen/:id')
    .get(handymanController.getHandymanUser);
router
    .route('/handymen/sub/:subCategories')
    .get(handymanController.getHandymanSubCategories);

// Mounting
router
    .route('/mountings')
    .get(mountingController.getAllMountingUser)
    .post(userController.getMe, mountingController.createMountingUser);
router
    .route('/mountings/:id')
    .get(mountingController.getMountingUser);
router
    .route('/mountings/sub/:subCategories')
    .get(mountingController.getMountingSubCategories);

// MovingServices
router
    .route('/movingServices')
    .get(movingServicesController.getAllMovingServicesUser)
    .post(userController.getMe, movingServicesController.createMovingServicesUser);
router
    .route('/movingServices/:id')
    .get(movingServicesController.getMovingServicesUser);
router
    .route('/movingServices/sub/:subCategories')
    .get(movingServicesController.getMovingServicesSubCategories);


// PersonalAssistant
router
    .route('/personalAssistants')
    .get(personalAssistantController.getAllPersonalAssistantUser)
    .post(userController.getMe, personalAssistantController.createPersonalAssistantUser);
router
    .route('/personalAssistants/:id')
    .get(personalAssistantController.getPersonalAssistantUser);
router
    .route('/personalAssistants/sub/:subCategories')
    .get(personalAssistantController.getPersonalAssistantSubCategories);


// VisualAudio
router
    .route('/visualAudios')
    .get(visualAudioController.getAllVisualAudioUser)
    .post(userController.getMe, visualAudioController.createVisualAudioUser);
router
    .route('/visualAudios/:id')
    .get(visualAudioController.getVisualAudioUser);
router
    .route('/visualAudios/sub/:subCategories')
    .get(visualAudioController.getVisualAudioSubCategories);


// VisualAudio
router
    .route('/yardworks')
    .get(yardworkController.getAllYardworkUser)
    .post(userController.getMe, yardworkController.createYardworkUser);
router
    .route('/yardworks/:id')
    .get(yardworkController.getYardworkUser);
router
    .route('/yardworks/sub/:subCategories')
    .get(yardworkController.getYardworkSubCategories);



module.exports = router

