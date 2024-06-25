const express = require("express");
const app = express();
const products = [1, 2, 3, 4, 5, 6, 7];
const users = [
  { id: 1, name: "mohsen" },
  { id: 2, name: "ali" },
];
// argument
// parameter
// f1->f2->f3->....-> fn
// let i = 0
// f[i] f[1000]
// f[204] f[205] => f[1001]
app["use"]((req, res, next) => {
  console.log(req.query);
  req.query["page"] = parseInt(req.query["page"]);
  console.log(req.query);
  req.user = users[0];
  next();
});
//localhost:4000/
app["get"]("/", (request, response) => {
  response.send("hello" + JSON.stringify(request.user));
});

//localhost:4000/products
app.get("/products", (req, res) => {
  res.send("products");
});

app.get("/products/:id", (req, res) => {
  const id = req.params["id"];
  const query = req.query;
  console.log(id, query);
  res.send({ product: products[id] });
});
// request -> middleware1 ->middleware2->.... -> route handler
// response -> middleware -> client
app.get("/profile", (req, res) => {
  const user = req.user;
  res.send(user);
});

app.listen(4000);
console.log("index");
