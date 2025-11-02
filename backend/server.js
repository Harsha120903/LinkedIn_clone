
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://linkedin-clone-frontend-otwq.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ 
    message: 'LinkedIn Clone API is running',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔗 API available at http://localhost:${PORT}/api`);
});