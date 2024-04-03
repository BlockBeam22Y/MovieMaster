require('dotenv').config();

const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

async function dbConnect() {
  await mongoose.connect(MONGO_URI);
}

module.exports = dbConnect;