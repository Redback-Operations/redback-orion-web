import mongoose from 'mongoose';

const CrowdDataSchema = new mongoose.Schema({
    peopleCount: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('CrowdData', CrowdDataSchema);
