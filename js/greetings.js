const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-input");
const logoutForm = document.querySelector(".logout-form");
const greeting = document.querySelector(".greeting");

let userInfo = [];

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    toDoForm.querySelector("input").classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit() {
    savedUserInfo();
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    toDoForm.querySelector("input").classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
}

function savedUserInfo() {
    const userInfoObj = {
        username: localStorage.username,
        todos: localStorage.todos
    }
    userInfo.push(userInfoObj);
    localStorage.setItem("userInfo",JSON.stringify(userInfo));
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요! ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    userInfo = JSON.parse(localStorage.userInfo);
} else {
    paintGreetings(savedUsername);
}

logoutForm.addEventListener("submit", onLogoutSubmit);