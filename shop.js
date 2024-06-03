//user register
//user create product
//user see all products
//user see its products
const person = require("./person");
const product = require("./product");
// persons = [];
function registerNewUser(firstName, lastName) {
  const id = Math.random() * 10;
  person.persons.push({ id, firstName, lastName });
  return id;
}
function createNewProduct(title, description, price, userId) {
  product.addNewProduct(title, description, price, userId);
}
function showOneProduct(title) {
  const p = product.findOne(title);
  console.log(p);
  return p;
}
function showMyProducts(firstName) {}
function showAllUsers() {}

const userId = registerNewUser("ali", "alipoor");
registerNewUser("ahmad", "ahmad zade");
createNewProduct("iphone 15", "description", 40000, userId);
// showOneProduct("iphone 15");

// console.log(persons);
console.log(person);
console.log(product);

// separation of concerns
// varibable naming and definition
// code review
