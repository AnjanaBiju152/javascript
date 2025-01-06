// javascript Object


const student = new Object();  //using object class
{
    student.name = "anjana",
        student.age = 24
}
console.log(student);  
 //accesing object values
console.log(student.name); // 1)using dot operator
//********************************************* */
console.log(student['age']); //2) using bracket notation
//*************************************************** */

// adding new property to object
student.location ="kochi"; //1) using dot operator
console.log(student);
//*********************************************************** */
student['place'] = "alappuzha"; //2) using bracket notation
console.log(student);
//******************************************************* */
//delete a key from object
delete student.age;
console.log(student);
