const Booking = require('../models/Booking');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res) => {
    try {
        const { salon, services, totalAmount, date, timeSlot } = req.body;

        if (!services || services.length === 0) {
            return res.status(400).json({ message: 'No services selected' });
        }

        const booking = new Booking({
            user: req.user.id,
            salon,
            services,
            totalAmount,
            date,
            timeSlot
        });

        const createdBooking = await booking.save();
        res.status(201).json(createdBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get logged in user bookings
// @route   GET /api/bookings/user
// @access  Private
exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate('salon', 'name address images location');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Cancel a booking
// @route   DELETE /api/bookings/:id
// @access  Private
exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (booking) {
            // Allow only the user who created it or an admin to cancel
            if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized to cancel this booking' });
            }

            booking.status = 'cancelled';
            await booking.save();
            res.json({ message: 'Booking cancelled' });
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
