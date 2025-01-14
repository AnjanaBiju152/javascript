//Object.seal() and Object.freeze()

// Object.seal()

let person = {
    name: "sean",
    age: 28
}
person.location = "kochi";
Object.seal(person);
person.email = "anjana@gmail.com";
delete person.name;

person.age = 40;  //only allows modification of existing value
console.log(person);


//Object.freeze()

Object.freeze(person);
person.age = 60;
console.log(person);
