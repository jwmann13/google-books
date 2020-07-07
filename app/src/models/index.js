const mongoose = require("mongoose");
const Book = require("./Book");
const User = require("./User");

mongoose.Promise = global.Promise;

MONGO_URI = process.env.MONGO_URI || "mongodb://db/googleBooks";

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

module.exports = {
  dbConnection: mongoose.connection,
  Book,
  User
};
