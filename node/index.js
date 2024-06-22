const express = require("express");
const app = express();

//localhost:4000/
app.get("/", (request, response) => {
  response.send("hello");
});

//localhost:4000/products
app.get("/products", (req, res) => {
  res.send("products");
});
app.listen(4000);
console.log("index");
