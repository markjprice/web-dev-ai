from __future__ import annotations

import json
from pathlib import Path

DATA_FILE = Path("tasks.json")

def load_tasks() -> list[dict]:
    """Load tasks from disk. If the file doesn't exist yet, return an empty list."""
    if not DATA_FILE.exists():
        return []

    try:
        text = DATA_FILE.read_text(encoding="utf-8")
        data = json.loads(text)

        # Defensive check: ensure it's a list of dicts.
        if not isinstance(data, list):
            return []
        cleaned: list[dict] = []
        for item in data:
            if isinstance(item, dict) and "title" in item and "done" in item:
                cleaned.append({"title": str(item["title"]), "done": bool(item["done"])})
        return cleaned
    except (OSError, json.JSONDecodeError):
        # File can't be read or contains invalid JSON.
        return []

def save_tasks(tasks: list[dict]) -> None:
    """Save tasks to disk as JSON."""
    try:
        text = json.dumps(tasks, indent=2)
        DATA_FILE.write_text(text, encoding="utf-8")
    except OSError:
        print("Warning: could not save tasks to disk.")

def add_task(tasks: list[dict]) -> None:
    title = input("Task title: ").strip()
    if not title:
        print("Task title cannot be empty.")
        return

    tasks.append({"title": title, "done": False})
    save_tasks(tasks)
    print(f'Added: "{title}"')

def list_tasks(tasks: list[dict]) -> None:
    if not tasks:
        print("No tasks yet. Add one with: add")
        return

    for i, task in enumerate(tasks, start=1):
        status = "✓" if task["done"] else " "
        print(f"{i:>2}. [{status}] {task['title']}")

def mark_done(tasks: list[dict]) -> None:
    if not tasks:
        print("No tasks to mark as done.")
        return

    raw = input("Task number to mark done: ").strip()
    try:
        index = int(raw) - 1
    except ValueError:
        print("Please enter a valid number.")
        return

    if index < 0 or index >= len(tasks):
        print("That task number is out of range.")
        return

    tasks[index]["done"] = True
    save_tasks(tasks)
    print(f'Marked done: "{tasks[index]["title"]}"')

def delete_task(tasks: list[dict]) -> None:
    if not tasks:
        print("No tasks to delete.")
        return

    raw = input("Task number to delete: ").strip()
    try:
        index = int(raw) - 1
    except ValueError:
        print("Please enter a valid number.")
        return

    if index < 0 or index >= len(tasks):
        print("That task number is out of range.")
        return

    removed = tasks.pop(index)
    save_tasks(tasks)
    print(f'Deleted: "{removed["title"]}"')

def print_help() -> None:
    print("Commands:")
    print("  add     Add a new task")
    print("  list    List all tasks")
    print("  done    Mark a task as done")
    print("  delete  Delete a task")
    print("  help    Show this help")
    print("  quit    Exit the program")

def main() -> None:
    tasks = load_tasks()
    print("Task Tracker")
    print_help()

    while True:
        command = input("\n> ").strip().lower()

        if command == "add":
            add_task(tasks)
        elif command == "list":
            list_tasks(tasks)
        elif command == "done":
            mark_done(tasks)
        elif command == "delete":
            delete_task(tasks)
        elif command == "help":
            print_help()
        elif command in {"quit", "exit"}:
            print("Goodbye.")
            break
        elif command == "":
            continue
        else:
            print("Unknown command. Type: help")

if __name__ == "__main__":
    main()
