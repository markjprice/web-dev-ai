const btnClearDone = document.querySelector("#btnClearDone");

function updateCount() {
  const items = todoList.querySelectorAll("li");
  todoCount.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
}

function syncDoneStyles(li) {
  const done = li.dataset.done === "true";
  li.classList.toggle("success", done);
  li.style.opacity = done ? "0.75" : "1";
}

todoList.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLInputElement && target.type === "checkbox") {
    const li = target.closest("li");
    if (!li) return;

    li.dataset.done = String(target.checked);
    syncDoneStyles(li);
    return;
  }

  if (target instanceof HTMLButtonElement && target.dataset.action === "remove") {
    const li = target.closest("li");
    if (!li) return;

    li.remove();
    updateCount();
  }
});

btnClearDone.addEventListener("click", () => {
  const doneItems = todoList.querySelectorAll('li[data-done="true"]');
  for (const li of doneItems) {
    li.remove();
  }
  updateCount();
});

// Initialize styles for the starter item (if any)
for (const li of todoList.querySelectorAll("li")) {
  syncDoneStyles(li);
}
updateCount();
