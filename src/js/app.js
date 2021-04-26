console.log("Hi There Amigos");

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners

todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event) {
  // to prevent form from submitting.
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "おはようございます";
  newTodo.classList.add("todo-item");
}