statusElement.textContent = "Status: Demonstrating data types.";

const age = 54;                       // number
const firstName = "Mark";             // string
const isMember = true;                // boolean

messageElement.textContent = `Message: ${firstName} is ${age} years old. Member: ${isMember}.`;

console.log(typeof age, age);
console.log(typeof firstName, firstName);
console.log(typeof isMember, isMember);

// Two types you’ll use constantly:
const favoriteShows = ["Andor", "Heated Rivalry"]; // array (list)
const user = { name: "Mark", age: 54 };           // object (grouped properties)

console.log("Array example:", favoriteShows);
console.log("Object example:", user);
