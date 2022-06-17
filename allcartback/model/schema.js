const mongoose = require("mongoose");

const newFood = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique:true
  },
  description: {
    type: String,
    required: true,
  },
});

const Food = new mongoose.model("food", newFood);
module.exports = Food;
