const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`Connected to db ${connection.connection.host}`.blue.underline);
  } catch (err) {
    console.log(`Failed to Connect Reason: ${err.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
