let person = {
	gender : "male"
}

var person1 = Object.create(person);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {

	console.log(key);
}		


// output :-
// name
// age
// nationality
// gender