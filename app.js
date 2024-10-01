// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");
const filterOption = document.querySelectorAll('.filter-todo').forEach(button => {
    button.addEventListener('click', filterTodo);
});
//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event) {
    //Prevent form from subumitting and refreshing the page
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; //sets the new li text to be the value of the todoInput
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    //Clears todoInput value
    todoInput.value = "";
}

//allows us to delete li using the trash button
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
       const todo = item.parentElement;
        //Animation fall
       todo.classList.add("fall");
       //Adds a event listener that waits for animation to finsh then runs function
       todo.addEventListener("transitionend", function(){
            todo.remove()
       });
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}


// function saveLocalTodos(todo){
//     //check -- do i already have a thing in there?
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }