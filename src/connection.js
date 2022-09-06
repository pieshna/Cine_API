const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bdund.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

module.exports = connection;
