const mongoose = require("mongoose");
const BillScheme = mongoose.Schema(
  {
    customerName: { type: String, require: true },
    customerPhoneNumber: { type: String, require: true },
    paymentMode: { type: String, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalAmount: { type: Number, require: true },
    cartItems: { type: Array, require: true },
  },
  {
    timestamps: true
  }
)

const Bill = mongoose.model("bills", BillScheme);
module.exports = Bill;