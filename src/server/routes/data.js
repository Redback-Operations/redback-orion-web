import express from 'express';
import CrowdData from '../models/CrowdData.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await CrowdData.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const data = new CrowdData({
        peopleCount: req.body.peopleCount,
        timestamp: req.body.timestamp,
    });

    try {
        const newData = await data.save();
        res.status(201).json(newData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
