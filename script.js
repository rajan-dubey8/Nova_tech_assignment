const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const statusSpan = document.createElement("span");
  statusSpan.textContent = "Pending";
  statusSpan.className = "status";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  completeBtn.addEventListener("click", function () {
    taskSpan.classList.add("completed");
    statusSpan.textContent = "Completed";
    completeBtn.disabled = true;
  });

  li.appendChild(taskSpan);
  li.appendChild(statusSpan);
  li.appendChild(completeBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
