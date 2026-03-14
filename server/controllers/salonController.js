const Salon = require('../models/Salon');

// @desc    Get all salons
// @route   GET /api/salons
// @access  Public
exports.getSalons = async (req, res) => {
    try {
        const salons = await Salon.find({});
        res.json(salons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single salon by ID
// @route   GET /api/salons/:id
// @access  Public
exports.getSalonById = async (req, res) => {
    try {
        const salon = await Salon.findById(req.params.id);

        if (salon) {
            res.json(salon);
        } else {
            res.status(404).json({ message: 'Salon not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new salon
// @route   POST /api/salons
// @access  Private/SalonOwner
exports.createSalon = async (req, res) => {
    try {
        const { name, address, city, description, openingHours, location } = req.body;

        const salon = new Salon({
            owner: req.user.id,
            name,
            address,
            city,
            description,
            openingHours,
            location,
            images: [],
            services: []
        });

        const createdSalon = await salon.save();
        res.status(201).json(createdSalon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
