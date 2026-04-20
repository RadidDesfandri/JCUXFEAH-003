function addTask() {
  const newItem = document.createElement("li");

  const inputText = document.getElementById("inputText");

  newItem.textContent = inputText.value;

  newItem.classList.add("task-item");
  const list = document.getElementById("taskList");

  list.appendChild(newItem);

  console.log("Task added!");
}

function removeLastTask() {
  const list = document.getElementById("taskList");
  const lastElemnt = list.lastElementChild;

  if (lastElemnt) {
    lastElemnt.remove();
    console.log("Last task removed!");
  } else {
    console.log("No task to remove!");
  }
}
