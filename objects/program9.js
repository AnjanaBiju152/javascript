// Array of objs
// -------------------------
const students=[
    {name:'Ann',email:'ann@gmail.com',batch:'MCA',age:23},
    {name:'Anjana',email:'anjana@gmail.com',batch:'cs',age:22},
    {name:'Malavika',email:'malavika@gmail.com',batch:'cs',age:26}
]
console.log(students[0]);
console.log(students[1].name);

console.log("------------------------------");
students.forEach((student)=>{
    console.log(student.name);
    
})
console.log("------------------------------");
for(let i=0; i<students.length;i++){
    console.log(students[i].name);
    
}
// adding new object to the array
students.push({name:"Sharon",email:"sharon@gmail.com",batch:"ECE",age:25})

// update value inside any particular object
students[2].name="dummy"
console.log(students);

// filter out the object with age > 24
console.log("--------------------------------------------------------");
const result1= students.filter((ele)=>{
    return ele.age>24
})
console.log(result1);

