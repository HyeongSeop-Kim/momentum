const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;    
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function loadedUserInfo() {
    for (let i=0; i<userInfo.length; i++) {
        if (document.querySelector(".login-input").value === userInfo[i].username) {
            console.log(JSON.parse(userInfo[i].todos));
            localStorage.setItem(TODOS_KEY,userInfo[i].todos);
            userInfo = userInfo.filter((userInfo) => userInfo.username !== document.querySelector(".login-input").value);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            paintSavedToDos();
            
            break;
        }
    }
}

function paintSavedToDos() {
    const savedToDos = localStorage.getItem(TODOS_KEY);

    if(savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }
}


function init() {
    toDoForm.addEventListener("submit", handleToDoSubmit);
    paintSavedToDos();
    loginForm.addEventListener("submit", loadedUserInfo);
}

init();