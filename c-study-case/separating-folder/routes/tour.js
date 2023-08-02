const express = require('express');
const tourController = require('./../controllers/tourController')
// const { getAllTours, createTour, getTour, updateTour, deleteTour } = require('./../controllers/tourController')
const router = express.Router();

// Param Middleware Function
router.param('id', tourController.checkID);

// Buatkan checkBody middleware
// Check jika body contains nama dan harga properti
// jika tidak, maka kasi status code 400
// tambah pada post handler

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

    module.exports = router;