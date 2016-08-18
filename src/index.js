class MyClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getString() { return String(this.a + this.b); }
}

const myObj = new MyClass(10, 5);

console.log("Hi!", myObj.getString());
