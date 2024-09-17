let tasks = [];
let taskId = 0;

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    } else {
        tasks.push({ id: taskId, text: taskText });
        input.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li>No tasks available</li>';
    } else {
        tasks.forEach(task => {
            const li = document.createElement('li');
            // document.getElementById("li  ").style.textDecoration = "underline overline";
            li.innerHTML = `
                <span>${task.text}</span>
                <div class="button-group">
                    <button class="update-btn" onclick="updateTask(${task.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }
}

function updateTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newTaskText = prompt('Update task:', task.text);
        if (newTaskText !== null) {
            if (newTaskText.trim() === '') {
                alert('Task cannot be empty!');
            } else {
                task.text = newTaskText;
                renderTasks();
            }
        }
    } else {
        alert('Task not found!');
    }
}

function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            renderTasks();
        } else {
            alert('Task not found!');
        }
    }
}

