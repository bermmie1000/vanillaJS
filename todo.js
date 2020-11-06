const todoItem = document.getElementById("todoItem");

let todoItemList = [];

function addTodoItem(text) {
  todoItemList.push(text);
}

todoItem.addEventListener("submit", addTodoItem(todoItem));

function init() {
  addTodoItem(todoItem);
  console.log(todoItemList);
}

init();
