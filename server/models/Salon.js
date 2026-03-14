const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, // duration in minutes
    description: { type: String },
});

const salonSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    city: { type: String, required: true },
    location: {
        lat: { type: Number },
        lng: { type: Number },
    },
    images: [{ type: String }],
    services: [serviceSchema],
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    openingHours: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "21:00" }
    },
    isApproved: { type: Boolean, default: false } // Admin approval
}, { timestamps: true });

module.exports = mongoose.model('Salon', salonSchema);
