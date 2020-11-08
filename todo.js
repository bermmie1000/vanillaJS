const todoItem = document.getElementById("todoItem");
todoItem.addEventListener("submit", addTodoItem(todoItem));

let todoItemList = [];

function addTodoItem(text) {
  todoItemList.push(text);
}

function saveLocalStorage(list){
    console.
}


function init() {
  addTodoItem(todoItem);
  console.log(todoItemList);
}

init();
