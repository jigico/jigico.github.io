const toDoForm = document.querySelector(".js-form"),
    toDoInput = toDoForm.querySelector(".todo_input"),
    toDoList = document.querySelector(".js-todo");

const TODO_LS = "inValue";

let itemId = 1;
let toDo = [];

function deleteItem(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDo.filter(function(toDoo){
        return toDoo.id != parseInt(li.id);
    });
    toDo = cleanToDos;
    saveList();
}

function saveList(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function handleSm(event){
    event.preventDefault(); //기본행동 제거
    const toDoItem = toDoInput.value;
    viewToDo(toDoItem);
    toDoInput.value = "";
}

function viewToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const checkBox = document.createElement("input");
    const newId = itemId;
    checkBox.type="checkbox";
    checkBox.classList.add("check");
    span.innerText = text;
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    delBtn.innerHTML = "-";
    delBtn.addEventListener("click", deleteItem);
    toDoList.appendChild(li);
    const todoObj = {
        text : text,
        id : newId
    }
    itemId = itemId + 1;
    toDo.push(todoObj);
    saveList();
}

function loadList(){
    const inValue = localStorage.getItem(TODO_LS); 
    if(inValue !== null){
        const parsedToDos = JSON.parse(inValue);
        parsedToDos.forEach(function(toDoo){
            viewToDo(toDoo.text);
        });
    }
}

function init(){
    loadList();
    toDoForm.addEventListener("submit", handleSm);
}

init();