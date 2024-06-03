const product = { title: "", description: "", price: 0 };
const products = [];
function addNewProduct(title, description, price, userId) {
  const id = Math.random() * 10;
  products.push({ id, title, description, price, userId });
}
function findOne(title) {
  return products.filter((p) => p.title == title);
}
function filter(price) {}
function deleteProduct(title) {}

module.exports = { products, addNewProduct, findOne };
