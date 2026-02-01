const nameInput = document.querySelector("#nameInput");
const helloBtn = document.querySelector("#helloBtn");

statusElement.textContent = "Status: Demonstrating conditionals.";

helloBtn.addEventListener("click", () => {
  const typedName = nameInput.value; // string (possibly empty)

  if (typedName.trim() === "") {
    messageElement.textContent = "Message: Please type your name first.";
  } else {
    messageElement.textContent = `Message: Hello, ${typedName}!`;
  }
});
