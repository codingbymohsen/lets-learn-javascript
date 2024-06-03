//referenced variable
const person = { name: "amir", lastName: "farahani", age: undefined };
//object=> memory address: jiwefoijqwe
//person *=> memory address:jiwefoijqwe person |=> object
console.log(person);
person.name = "ali";
console.log(person);

const color = "blue"; //string => memory address:cx3636jsiwl
const person1 = person;
console.log(person1);
person1.age = 30;
console.log(person1);
console.log(person);

person.nationalId = 123321;

// person => memory address=x
// person1=> memory address=x

//[-------------------------------------------]
const name = "asdfjaslfkjaslfdkjasfdl;kj";
console.log(name[5]);

// static typing => java, golang, c#, typescript
// String a= "mohsen"
// int age=12
// a=22
// b:number=33

// dynamic typing javascript, php, python
let fullName = "ali alipoor";
console.log(typeof fullName);
fullName = false;
console.log(typeof fullName);
console.log(person);

person.lastName = "sdfsdf";
person["nationalId"] = 20;
person.nationalId = 30;
console.log(person);

delete person.name;
console.log(person);
person.name = "ali";

person.fullName = function () {
  return person.name + " " + person.lastName;
};

console.log(person);
