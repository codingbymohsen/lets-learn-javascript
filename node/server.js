const express = require("express");
const app = express();
const joi = require("joi");
const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const books = [];
const createBookSchema = joi.object({
  title: joi.string().min(5).max(40).required(),
  author: joi.string().required(),
  price: joi.number().required(),
});
const updateBookSchema = joi.object({
  id: joi.number().min(1).required(),
  title: joi.string().min(5).max(40).optional(),
  author: joi.string().optional(),
  price: joi.number().optional(),
});
const idSchema = joi.number().required();
// Create a book
app.post("/books", (req, res) => {
  const { error, value } = createBookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  console.log(value, req.body);
  const { title, author, price } = value;

  const newBook = { id: books.length + 1, title, author, price };
  books.push(newBook);
  return res.status(201).send(newBook);
});
// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});
// Get a Single book
app.get("/books/:singleId", (req, res) => {
  const singleBook = books.find((b) => b.id === parseInt(req.params.singleId));
  if (!singleBook) {
    return res.status(404).send("Book not found!");
  }
  res.json(singleBook);
});
// Update a book
// Prefer to use pach method
app.patch("/books/:id", (req, res) => {
  const beforeUpdate = { ...req.body, ...req.params };
  console.log(beforeUpdate);
  const { error, value } = updateBookSchema.validate(beforeUpdate);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  console.log(value);

  const selectedBook = books.find((b) => b.id === parseInt(req.params.id));
  if (!selectedBook) {
    return res.status(404).send("Book not found!");
  }
  const { title, author, price } = req.body;
  selectedBook.title = title || selectedBook.title;
  selectedBook.author = author || selectedBook.author;
  selectedBook.price = price || selectedBook.price;

  res.send(selectedBook);
});
// Delete a book
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).send("Book not found!");
  }
  books.splice(bookIndex, 1);
  // res.status(204)
  res.status(200).send(books);
});
