require('dotenv').config();

const dbConnect = require('./src/config/dbConnect');
const app = require('./src/server');
const { PORT } = process.env;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
});