const User = require('../models/User');
const Booking = require('../models/Booking');
const Salon = require('../models/Salon');

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({}).populate('user', 'id name email').populate('salon', 'id name');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
