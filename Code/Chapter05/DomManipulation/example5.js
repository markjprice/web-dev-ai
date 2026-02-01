const btnToggleTheme = document.querySelector("#btnToggleTheme");
const btnToggleTodo = document.querySelector("#btnToggleTodo");
const todoCard = document.querySelector("#card-todo").closest(".card");

btnToggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

btnToggleTodo.addEventListener("click", () => {
  if (!todoCard) return;
  todoCard.classList.toggle("hidden");
});
