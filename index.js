const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const port = 3000;
const app = express();
app.use(express.json());

connectDB();


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('' ,  authRoutes)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});