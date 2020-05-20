const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListener();

function loadEventListener(){

    // DOM LOAD EVENT
    document.addEventListener('DOMContentLoaded',getTasks);

    //add task event

    form.addEventListener('submit',addTask);

    // remove task 

    taskList.addEventListener('click',removeTask);    

    // clear task event
    clearBtn.addEventListener('click',clearTasks);

    // filter task

    filter.addEventListener('keyup',filterTasks);
}

// get tasks from Local storage

function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task=>{
        const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(task));
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fas fa-times"></i>';
            li.appendChild(link);
        
            taskList.appendChild(li);
    });
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    else{  
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(taskInput.value));
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fas fa-times"></i>';
            li.appendChild(link);
        
            taskList.appendChild(li);
        
            //store in local storage
            storeTaskInLocalStorage(taskInput.value);
            taskInput.value = '';

    }
    // Create li element
    e.preventDefault();

}

function storeTaskInLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            // REMOVE TASK FROM LS

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((item,index)=>{
        if(taskItem.textContent === item){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTasks(){

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e){
   const text =  e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task=>{   
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}