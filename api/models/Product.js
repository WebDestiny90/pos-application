const mongoose = require("mongoose");
const ProductScheme = mongoose.Schema(
  {
    title: { type: String, require: true },
    img: { type: String, requier: true },
    price: { type: Number, requier: true },
    category: { type: String, require: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", ProductScheme);
module.exports = Product;