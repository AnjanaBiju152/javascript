// checking whether a key present in obj
// ----------------------------------------------


const student = {
    name:"Ann Mariya",
    age : 23,
    email:"annmariyashaju51@gmail.com",
    batch :"MCA"
    
}
console.log("batch" in student);
if("email" in student){
    console.log(student.email);
    
}
else{
    console.log("email is present");
    
}


// to access all the key individually in an obj
// --------------------------------------------------------
for(let item in student){
    console.log(item);
    
}

console.log("-----------------------------------");

for(let key in student){
    console.log(key + ':' + student[key]);
    
}

