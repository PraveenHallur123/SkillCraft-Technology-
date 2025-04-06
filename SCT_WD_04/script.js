const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

function toggleTask(span) {
  span.parentElement.classList.toggle('completed');
}
