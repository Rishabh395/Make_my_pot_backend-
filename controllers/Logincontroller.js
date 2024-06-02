// loginController.js

const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const Login = require('../models/Signin')

// Controller function for user login
const loginUser = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        // Check if the user with the provided email exists
        const user = await Login.findOne({ Email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(Password, user.Password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If the email and password are valid, generate a JWT token
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the token in the response
        res.status(200).json({ message:'User Find' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { loginUser };
