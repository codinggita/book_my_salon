const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings, cancelBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');

router.route('/')
    .post(protect, createBooking);

router.route('/user')
    .get(protect, getUserBookings);

router.route('/:id')
    .delete(protect, cancelBooking);

module.exports = router;
