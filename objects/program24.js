// Method Overriding
// ---------------------------
class A {
    printName() {
        console.log("My name is sean");

    }
    printLocation() {
        console.log("kochi");

    }
}
class B extends A {
    printName() {
        console.log("My name is todd");

    }
}
const obj = new B()
obj.printLocation()
obj.printName()  //it execute method inside child class B