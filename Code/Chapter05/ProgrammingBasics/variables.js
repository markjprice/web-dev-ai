statusElement.textContent = "Status: Demonstrating variables.";

let clicks = 0; // This value can change.
const pageTitle = "Playground"; // This value will never change.

messageElement.textContent = `Message: Title is "${pageTitle}", clicks = ${clicks}.`;

clicks = clicks + 1;
console.log("After increment, clicks =", clicks);

messageElement.textContent = `Message: Title is "${pageTitle}", clicks = ${clicks}.`;

// Try uncommenting the next line to see the error.
// pageTitle = "New Title";
