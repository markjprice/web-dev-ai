const counterElement = document.querySelector("#counterValue");
const incrementBtn = document.querySelector("#incrementBtn");
const resetBtn = document.querySelector("#resetBtn");

statusElement.textContent = "Status: Putting it together with events.";

let counter = 0;

function renderCounter() {
  counterElement.textContent = String(counter);
  messageElement.textContent = `Message: Counter is now ${counter}.`;
}

incrementBtn.addEventListener("click", () => {
  counter = counter + 1;
  renderCounter();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  renderCounter();
});

// Initial render so the UI matches the variable.
renderCounter();
