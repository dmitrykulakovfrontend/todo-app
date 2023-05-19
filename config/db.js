const mongoose = require("mongoose");

const dbURI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {});
    console.log("Mongo is ready!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
