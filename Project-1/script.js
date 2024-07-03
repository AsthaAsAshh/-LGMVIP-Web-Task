document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    function addTask(task) {
      if (task.trim() === '') return;
  
      const li = document.createElement('li');
      li.textContent = task;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.classList.add('complete');
      completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
  
      taskList.appendChild(li);
    }
  });
  