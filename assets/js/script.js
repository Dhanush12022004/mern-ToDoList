const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoBtn = document.getElementById('add-todo-btn');

addTodoBtn.addEventListener('click', function () {
    const newTodoText = newTodoInput.value.trim();
  
    if (newTodoText) {
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = newTodoText;
  
      // Add functionality to mark as complete
      newTodoItem.addEventListener('click', function () {
        newTodoItem.classList.toggle('completed');
      });
  
      todoList.appendChild(newTodoItem);
      newTodoInput.value = '';
    }
  });