document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const clearAllButton = document.getElementById('clearAllButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToList(task));
    }

    // Save tasks to local storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#taskList li').forEach(item => {
            tasks.push(item.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to list
    function addTaskToList(task) {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });
        taskList.appendChild(li);
    }

    // Add task event
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTaskToList(task);
            taskInput.value = '';
            saveTasks();
        }
    });

    // Clear all tasks event
    clearAllButton.addEventListener('click', () => {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    });

    // Initial load of tasks
    loadTasks();
});
