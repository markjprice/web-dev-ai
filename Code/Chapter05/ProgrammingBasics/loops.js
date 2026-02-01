statusElement.textContent = "Status: Demonstrating loops.";

// A simple for loop counts from 1 to 5.
let output = "Counting: ";
for (let i = 1; i <= 5; i += 1) {
  output += i + " ";
  console.log("i is", i);
}
messageElement.textContent = "Message: " + output.trim();

// Looping through an array (list)
const languages = ["HTML", "CSS", "JavaScript", "Python"];
for (let i = 0; i < languages.length; i += 1) {
  console.log(`Language ${i}:`, languages[i]);
}
