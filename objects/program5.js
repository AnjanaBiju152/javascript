// obj.seal()
// -----------------------------------

let person={
    name:"Ann",
    age:23
}
person.location="kochi"
Object.seal(person);
person.email="ann@gmail.com"
delete person.name;
console.log(person);

// obj.freeze()
// ----------------------------
Object.freeze(person)
    person.age=30;
console.log(person);
