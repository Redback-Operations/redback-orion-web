import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';  // Import path module
import dataRoutes from './routes/data.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use the provided MongoDB connection string
const mongoURI = 'mongodb+srv://s221360124:7BtCASY1iZhO5sN3@cm01.e4bgd74.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Serve the frontend static files
app.use(express.static(path.join(path.resolve(), 'dist')));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'dist', 'index.html'));
});

// Use the data routes
app.use('/api/data', dataRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
