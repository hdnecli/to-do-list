const addButton = document.querySelector('button');
const taskInput = document.querySelector('input');
const taskList = document.querySelector('ul');

addButton.addEventListener('click', addTask);

function addTask(){
    const taskText = taskInput.value.trim();

    if (taskText === ''){
        alert('Please enter a task');
        return;
    }

    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', function(){
        if (checkbox.checked){
            newTask.classList.add('completed');
        } else {
            newTask.classList.remove('completed');
        }
    });
    
    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('id', 'delete-button');
    
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
    taskInput.value = '';
}