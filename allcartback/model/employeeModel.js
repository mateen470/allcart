const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  pass: {
    type: String,
    required: true,
  }
});

const employee = new mongoose.model("user", newUser);
module.exports = employee;
