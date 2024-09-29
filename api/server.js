const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Succesfully connected");

  }
  catch (error) {
    throw error
  }
}

app.get("/", (req, res) => res.send("Test"));

app.listen(PORT, () => {
  connect();
  console.log(`Example app listening on port ${PORT}`);

})