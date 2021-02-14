const form2 = document.querySelector(".js_name_form"),
    input2 = document.querySelector(".name_input"),
    names = document.querySelector(".js_name");

const SHOW_CLM = "show",
    USER_NAME = "currentName";

function nameSaves(text){
    localStorage.setItem(USER_NAME, text);
}

function submitEvent(event){
    event.preventDefault();
    const nameText = input2.value;
    printName(nameText);
    nameSaves(nameText);
}

function askName(){
    form2.classList.add(SHOW_CLM);
    form2.addEventListener("submit", submitEvent);
}

function printName(text){
    form2.classList.remove(SHOW_CLM);
    names.classList.add(SHOW_CLM);
    names.innerText = `To do list # ${text}`;
}

function viewName(){
    const currentName = localStorage.getItem(USER_NAME);
    if(currentName === null){
        askName();
    }else{
        printName(currentName);
    }
}

function init33(){
    viewName();
}

init33();