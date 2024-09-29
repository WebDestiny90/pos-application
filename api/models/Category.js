const mongoose = require("mongoose");
const CategoryScheme = mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  {
    timestamps: true
  }
)

const Category = mongoose.model("categories", CategoryScheme);
module.exports = Category;