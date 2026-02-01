const statusText = document.querySelector("#statusText");
const btnSetStatus = document.querySelector("#btnSetStatus");
const btnClearStatus = document.querySelector("#btnClearStatus");

btnSetStatus.addEventListener("click", () => {
  const now = new Date();
  statusText.textContent = `Status: Updated at ${now.toLocaleTimeString("en-GB")}`;
});

btnClearStatus.addEventListener("click", () => {
  statusText.textContent = "Status: Waiting…";
});
