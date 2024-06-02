// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');
const {loginUser} = require('../controllers/Logincontroller');


router.post('/register', registerUser);
router.post('/login' , loginUser);

module.exports = router;
