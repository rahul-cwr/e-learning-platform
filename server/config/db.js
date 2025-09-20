const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected  ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
