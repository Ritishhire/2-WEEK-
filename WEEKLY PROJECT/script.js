// Select elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

// Load tasks from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save to localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Render tasks
const renderTasks = () => {
  taskList.innerHTML = ""; // clear old list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    input.value = task;
    input.disabled = true;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => {
      if (input.disabled) {
        input.disabled = false;
        input.focus();
        editBtn.textContent = "Save";
      } else {
        input.disabled = true;
        tasks[index] = input.value.trim();
        saveTasks();
        renderTasks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(input);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
};

// Add task
const addTask = () => {
  const newTask = taskInput.value.trim();
  if (newTask === "") return;

  tasks.push(newTask);
  taskInput.value = "";
  saveTasks();
  renderTasks();
};

// Event listener for Add button
addBtn.addEventListener("click", addTask);

// Render tasks on page load
renderTasks();
