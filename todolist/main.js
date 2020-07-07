// slectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');  

// event listeneers
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterOut);

// functions
function addToDo(event){
    // stops form tag  submittinng on click
    event.preventDefault();
    // todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check marked btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = `
    <i class="fas fa-check"></i>
    `;
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);
    // trash btn
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `
    <i class="fas fa-trash"></i>
    `;
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);  

    // append to list
    todoList.appendChild(todoDiv);
    // cleear input box after adding
    todoInput.value='';
}

// deletecheck
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        item.parentElement.remove();
    }else if(item.classList[0] === 'complete-btn'){
        item.parentElement.classList.toggle('completed');
    }
}

function filterOut(e){
 const todos = todoList.childNodes;
 todos.forEach(function(todo){
     switch (e.target.value){
         case "all":
             todo.style.display="flex";
            break;
            case "done":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
     }
 })
}