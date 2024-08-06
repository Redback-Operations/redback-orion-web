import mongoose from 'mongoose';

const heatmapSchema = new mongoose.Schema({
	date: { type: Date, required: true },
	location: { type: String, required: true },
	density: { type: Number, required: true }
});

const Heatmap = mongoose.model('Heatmap', heatmapSchema);

export default Heatmap;
