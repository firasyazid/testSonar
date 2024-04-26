const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
require('dotenv/config');

app.get('/', (req, res) => {
  res.send('Hello, gitlab! This is a Node.js application.');
});
// Database connection
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Health_App',
  })
  .then(() => {
    console.log('Database Connection is ready...');
  })
  .catch((err) => {
    console.log(err);
  });
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
