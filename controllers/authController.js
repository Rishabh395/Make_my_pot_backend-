const Signin = require('../models/Signin')
const bcrypt = require('bcryptjs');

// Register a new user
const registerUser = async (req, res) => {
  const { FullName, Email, Password } = req.body;

  try {

    let user = await Signin.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new Signin({
      FullName,
      Email,
      Password
    });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(Password, salt);

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err.message , 'Rishabh');
    res.status(500).send('Server error');
  }
};

module.exports = { registerUser };
