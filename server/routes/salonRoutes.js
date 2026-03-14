const express = require('express');
const router = express.Router();
const { getSalons, getSalonById, createSalon } = require('../controllers/salonController');
const { protect, salonOwner } = require('../middleware/auth');

router.route('/')
    .get(getSalons)
    .post(protect, salonOwner, createSalon);

router.route('/:id')
    .get(getSalonById);

module.exports = router;
