// Funcionalidades

// 1. Escribir una tarea
// 2. Agregarla a la lista
// 3. Marcarla como completada
// 4. Eliminarla

const taskInput = document.getElementById("taskInput");
const btnAddTask = document.getElementById("btn-add");
const taskList = document.getElementById("taskList");

const addTask = () => {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Por favor, escribí una tarea.");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskValue;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "❌";

  // Marcar como completada
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Eliminar tarea
  btnDelete.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(btnDelete);
  taskList.appendChild(li);

  taskInput.value = "";
};

btnAddTask.addEventListener("click", addTask);
