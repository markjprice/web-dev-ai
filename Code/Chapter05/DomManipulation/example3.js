const todoInput = document.querySelector("#todoInput");
const btnAddTodo = document.querySelector("#btnAddTodo");
const todoList = document.querySelector("#todoList");
const todoCount = document.querySelector("#todoCount");

function updateCount() {
  const items = todoList.querySelectorAll("li");
  todoCount.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
}

function makeTodoItem(text) {
  const li = document.createElement("li");
  li.className = "pill";
  li.dataset.done = "false";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", "Mark done");

  const span = document.createElement("span");
  span.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.dataset.action = "remove";

  li.append(checkbox, span, removeBtn);
  return li;
}

btnAddTodo.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  todoList.append(makeTodoItem(text));
  todoInput.value = "";
  todoInput.focus();
  updateCount();
});

updateCount();
