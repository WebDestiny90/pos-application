const mongoose = require("mongoose");
const UserScheme = mongoose.Schema(
  {
    userName: { type: String, require: true },
    userEmail: { type: String, require: true },
    userPassword: { type: String, require: true },
  },
  {
    timestamps: true
  }
)

const User = mongoose.model("users", UserScheme);
module.exports = User;