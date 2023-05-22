/*
todo = {
  title: "grocery shopping"
  isComplete: false
  description: "buy milk, eggs, bread"
  createdAt: date
}
*/
const mongoose = require("mongoose");
const todo = new mongoose.Schema(
  {
    title: String,
    isComplete: Boolean,
    description: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("todo", todo);
