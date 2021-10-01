//--------------- product Schema--------------------------//
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productpic: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Doctor = mongoose.model("product", productSchema);
module.exports = Doctor;
