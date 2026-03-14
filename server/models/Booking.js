const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true },
    services: [{
        name: { type: String },
        price: { type: Number }
    }],
    totalAmount: { type: Number, required: true },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true }, // e.g., "14:30"
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
    paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
