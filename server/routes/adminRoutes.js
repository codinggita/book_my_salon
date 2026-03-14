const express = require('express');
const router = express.Router();
const { getUsers, getBookings } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth');

router.route('/users')
    .get(protect, admin, getUsers);

router.route('/bookings')
    .get(protect, admin, getBookings);

module.exports = router;
