const express = require('express');
const productRoutes = require('./infrastructure/routes/productRoutes');
const categoryRoutes = require('./infrastructure/routes/categoryRoutes');
const userRoutes = require('./infrastructure/routes/userRoutes');
const cors = require('cors'); 

require('dotenv').config();

const app = express();

app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
