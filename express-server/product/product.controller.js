const express = require("express");
const router = express.Router();

router.post("/products", (req, res) => {
  //connect to db
  //insert into db
  //send result
  res.send({ productId: 1 });
});

module.exports = router;
