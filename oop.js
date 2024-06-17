class A {
  #name;
  #fullName;
  #firstName;
  #lastName;

  constructor(data) {
    // this.name = data.name;
    // this.lastName = data.lastName;
    Object.assign(this, data);
  }

  setName(data) {
    this.name = data.name;
  }

  getName() {
    return this.name;
  }

  log() {
    console.log(this);
  }
}
const o = { name: "ssss", lastName: "wwwww", location: "22334" };
const myClass = new A(o);
// myClass.setName("ali");
// console.log(myClass.getName());
myClass.log();
