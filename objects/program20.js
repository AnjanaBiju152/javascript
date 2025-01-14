class Employee{
    empName;
    empId;
    constructor(name,id){
        this.empName=name;
        this.empId=id;

    }
    displayEmpdetails(){
        console.log(`Employee name is ${this.empName} and Id is ${this.empId}`);
        
    }
}
const emp1= new Employee("ann",10);
emp1.displayEmpdetails()