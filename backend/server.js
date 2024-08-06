import express from 'express';
import mongoose from 'mongoose';
import heatmapRoutes from './routes/heatmap.js';

const app = express();
const PORT = 5000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://s221360124:7BtCASY1iZhO5sN3@cm01.e4bgd74.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Use heatmap routes
app.use('/heatmap', heatmapRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Heatmap API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
