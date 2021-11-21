const express = require("express");
const router = express.Router();

// get homepage
router.get("", async function (req, res) {
  try {
   let a = 1;
    return res.render("homepage.view.ejs", {
        a:a
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});




module.exports = router;