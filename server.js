const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception. Shutting down application');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.MONGO_ATLAS_DATABASE_PASSWORD);

mongoose.connect(DB).then(() => console.log('DB Connection Success'));

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection. Shutting down application.');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
