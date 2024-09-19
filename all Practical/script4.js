// Get references to the DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener for the form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = ''; // Clear the input field
});

// Function to create a new task element
function addTask(taskText) {
    const li = document.createElement('li');
    li.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const text = document.createElement('span');
    text.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove(); // Remove the task from the list
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    // Add the new task to the task list
    taskList.appendChild(li);

    // Add event listener to mark task as complete
    checkbox.addEventListener('change', function() {
        text.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
}
