const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Each email must be unique
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String, // Storing as string as the form sends it this way
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
