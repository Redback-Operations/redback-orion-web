import express from 'express';
import Heatmap from '../models/heatmap.js'; // Note the .js extension

const router = express.Router();

router.post('/', async (req, res) => {
	const { date, location, density } = req.body;

	const newHeatmap = new Heatmap({ date, location, density });

	try {
		const savedHeatmap = await newHeatmap.save();
		res.status(201).json(savedHeatmap);
	}
	catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const heatmaps = await Heatmap.find();
		res.status(200).json(heatmaps);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});

export default router;
