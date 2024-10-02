const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


//! routes
const categoryRoute = require("./routes/categories.js")
const productRoute = require("./routes/products.js")
const billRoute = require("./routes/bills.js")
const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/users.js")

dotenv.config();

const app = express();

const PORT = 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Successfully connected");

  }
  catch (error) {
    throw error
  }
}

app.use(express.json());
app.use(cors());
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// app.get("/", (req, res) => res.send("Test"));

app.listen(PORT, () => {
  connect();
  console.log(`Example app listening on port ${PORT}`);

})