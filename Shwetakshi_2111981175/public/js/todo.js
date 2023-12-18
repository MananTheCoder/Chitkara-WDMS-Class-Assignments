document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const taskItem = document.createElement('li');
      taskItem.className = 'list-group-item';
      taskItem.innerHTML = `
        ${taskInput.value}
        <button class="delete-btn">&times;</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = '';
  
      // Attach event listener to the delete button
      const deleteButton = taskItem.querySelector('.delete-btn');
      deleteButton.addEventListener('click', function () {
        taskItem.remove();
      });
    }
  });
  