// Adding new operator  to obj
// 1.dot operator
// --------------------------

const person={
    name : 'john'
}
person.age=30;
console.log(person);

// 2.breacket notation
// -------------------------------
person['pincode'] = 670511
console.log(person);

// deleting a key from the obj
// ------------------------------
delete person.name;
console.log(person);
