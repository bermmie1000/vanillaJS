const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

function handleInput(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  return inputValue;
}

function saveTodo(inputValue) {
  localStorage.setItem("test", JSON.stringify(inputValue));
}

function init() {
  handleInput();
  saveTodo();
}

init();