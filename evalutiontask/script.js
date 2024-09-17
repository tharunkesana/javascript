document.addEventListener('DOMContentLoaded', () => {
    const taskboard = document.getElementById('taskboard');
    const newTaskTitleInput = document.getElementById('new-task-title');
    const newTaskDescriptionInput = document.getElementById('new-task-description');
    const addTaskBtn = document.getElementById('add-task-btn');
    const sortTitleBtn = document.getElementById('sort-title');
    const editTaskTitleInput = document.getElementById('edit-task-title');
    const editTaskDescriptionInput = document.getElementById('edit-task-description');
    const saveTaskBtn = document.getElementById('save-task-btn');
    const cancelTaskBtn = document.getElementById('cancel-task-btn');
    const taskEdit = document.getElementById('task-edit');

    let currentTaskId = null;

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(createTaskElement);
    };

    const saveTasks = () => {
        const tasks = Array.from(document.querySelectorAll('.task')).map(task => ({
            id: task.dataset.id,
            title: task.querySelector('.task-title').textContent,
            description: task.querySelector('.task-description').textContent,
            status: task.parentElement.id
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const createTaskElement = (task) => {
        const column = document.getElementById(task.status);
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.dataset.id = task.id;
        taskElement.draggable = true;
        taskElement.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-description">${task.description}</div>
            <button class="edit-task-btn">Edit</button>
            <button class="delete-task-btn">Delete</button>
        `;
        
        taskElement.addEventListener('dragstart', () => {
            taskElement.classList.add('dragging');
        });
        taskElement.addEventListener('dragend', () => {
            taskElement.classList.remove('dragging');
            saveTasks();
        });
        
        column.querySelector('.tasks').appendChild(taskElement);
    };

    addTaskBtn.addEventListener('click', () => {
        const title = newTaskTitleInput.value.trim();
        const description = newTaskDescriptionInput.value.trim();
        if (title) {
            createTaskElement({
                id: Date.now().toString(),
                title,
                description,
                status: 'todo'
            });
            newTaskTitleInput.value = '';
            newTaskDescriptionInput.value = '';
            saveTasks();
        }
    });

    taskboard.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-task-btn')) {
            const task = e.target.closest('.task');
            currentTaskId = task.dataset.id;
            editTaskTitleInput.value = task.querySelector('.task-title').textContent;
            editTaskDescriptionInput.value = task.querySelector('.task-description').textContent;
            taskEdit.style.display = 'block';
        } else if (e.target.classList.contains('delete-task-btn')) {
            if (confirm('Are you sure you want to delete this task?')) {
                e.target.closest('.task').remove();
                saveTasks();
            }
        }
    });

    saveTaskBtn.addEventListener('click', () => {
        const title = editTaskTitleInput.value.trim();
        const description = editTaskDescriptionInput.value.trim();
        if (title && currentTaskId) {
            const task = document.querySelector(`.task[data-id="${currentTaskId}"]` );
            task.querySelector('.task-title').textContent = title;
            task.querySelector('.task-description').textContent = description;
            taskEdit.style.display = 'none';
            saveTasks();
        }
    });

    cancelTaskBtn.addEventListener('click', () => {
        taskEdit.style.display = 'none';
    });

    document.querySelectorAll('.tasks').forEach(taskList => {
        taskList.addEventListener('dragover', (e) => e.preventDefault());
        taskList.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggingTask = document.querySelector('.dragging');
            if (draggingTask) {
                e.target.closest('.tasks').appendChild(draggingTask);
                draggingTask.classList.remove('dragging');
                draggingTask.dataset.status = e.target.closest('.column').id;
                saveTasks();
            }
        });
    });

    sortTitleBtn.addEventListener('click', () => {
        document.querySelectorAll('.column').forEach(column => {
            const tasks = Array.from(column.querySelectorAll('.task'));
            tasks.sort((a, b) => a.querySelector('.task-title').textContent.localeCompare(b.querySelector('.task-title').textContent))
                 .forEach(task => column.querySelector('.tasks').appendChild(task));
        });
    });

    loadTasks();
});
