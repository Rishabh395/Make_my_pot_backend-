const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,  // Ensuring the email is unique
    match: [/.+@.+\..+/, 'Please enter a valid email address'] // Basic email validation
  },
  Password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt timestamps
});

const Signin = mongoose.model('Signin', signinSchema);

module.exports = Signin;
