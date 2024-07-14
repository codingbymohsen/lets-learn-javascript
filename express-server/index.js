const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
router.post("/products", (req, res, next) => {
  console.log("products endpoint called");
  next();
});
app.use(router);

//request -> server -> endpoint
// client -> request -> localhost: 4030 -> middleware ->/products -> response -> middleware ->client
// middleware -> validation, maniuplate, log

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = 1;
  next();
});
app.use(require("./product/product.controller"));

app.listen(4030);
