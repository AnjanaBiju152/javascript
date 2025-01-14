const student = {
    name: "anjana",
    age: "23",
    email: "anjana@gmail.com",
    branch: "cse"
}
console.log(student);

// 1) checking whether a  particular key present in the object
console.log("age" in student);
//********************************************* */
if ("email" in student) {
    console.log(student.email);

} else {
    console.log("email not present");

}
//************************************************************** */
//2) to accessing all the keys individually in an object
// access only key
console.log("print all the keys");
for (let key in student) {
    console.log(key);

}
//*************************************** */ 
// access key value pairs 

for (let key in student) {
    console.log(key + ":" + student[key]);

}
//****************************************** */

