// oops
// ------------------------
class Employee{
    // properties
    employeeName;
    employeeId;
    // constructor
    constructor(name,id){
       this.employeeName = name;
       this.employeeId = id
    }
    // method
    printName(){
        console.log("Employee Name:",this.employeeName);
        
    }
    printAge(age){
        console.log(age);
        
    }
}
// create an obj of the class
const employee1 = new Employee('John','SR123')
employee1.printName()
employee1.printAge(23)