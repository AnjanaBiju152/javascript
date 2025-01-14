// Method Overloading
// ------------------------------------
class A{
    methodA(){
        console.log("Inside Methods:");
        
    }
    methodA(name){
        console.log("inside method:",name);
        
    }
    methodA(age,location){
      console.log("Details:",age,location);
      
    }
}
const obj = new A()
obj.methodA()
obj.methodA("Ann")
obj.methodA(23,"kannur")