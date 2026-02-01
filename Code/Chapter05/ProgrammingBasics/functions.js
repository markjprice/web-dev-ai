statusElement.textContent = "Status: Demonstrating functions.";

function makeGreeting(personName) {
  return `Hello, ${personName}!`;
}

function showMessage(text) {
  messageElement.textContent = `Message: ${text}`;
}

const greeting = makeGreeting("Captain Picard");
console.log("Greeting returned from function:", greeting);

showMessage(greeting);
