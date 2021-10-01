const express = require("express");
const router = express.Router();
const Doctor = require("../models/product.models");

router.get("", async (req, res) => {
  try {
    const product = await Doctor.find().lean().exec();
    return res.render("allproducts", {
      product: product,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
