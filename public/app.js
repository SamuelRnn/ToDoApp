const input = document.getElementById('toDoInput');
const addBtn = document.getElementById('add');
let taskId = 0;
let taskList;

function createTask(val){
    const taskDiv = document.createElement('div');
    const taskDesc = document.createElement('p')

    taskDiv.appendChild(taskDesc);
    taskDiv.className = 'task-div';
    taskDesc.className = 'task-description';
    taskDiv.id = ++taskId;
    taskDesc.innerHTML = val.value;
    taskDiv.onclick = function(){taskDiv.remove()}
    return taskDiv;
}

const tasksContainer = document.querySelector('.tasks-container');

function addTask(){
    if(!input.value) return;
    tasksContainer.appendChild(createTask(input));
    input.value = '';
}
input.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){addTask()}
});

addBtn.onclick = addTask;
