// Inheritance
// ----------------------------------

class Animal{
  eat(){
    console.log("Inside Eat");
    
  }
}
class Dog extends Animal{
    name;
    constructor(name){
        super();
        this.name=name;
    }
    bark(){
        console.log("my dogs name is:",this.name);
        console.log("Inside bark!!!");
        
        
        
    }

}
const mydog=new Dog("Luna")
mydog.bark()
mydog.eat()

