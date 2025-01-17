require("dotenv").config();
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://faizans:fixamongodb@cluster0.r946wrk.mongodb.net/habit-tracker?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
