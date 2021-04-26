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
  //Create Todo Div Element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI Element
  const newTodo = document.createElement("li");
  newTodo.innerText = "おはようございます";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); //we are actually sticking it inside this Div we just created.
  // Create check Mark Button Element
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>'; //we are basically adding to this button an <i> tag inside
  completedButton.classList.add("complete-btn"); // adding class to the button we just created in variable completedButton
  todoDiv.appendChild(completedButton); //again we are actually sticking it inside this Div we just created.
  // Create Trash Button Element
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'; //we are basically adding to this trashButton an <i> tag inside it.
  trashButton.classList.add("trash-btn"); // adding class to the trashButton we just created in variable trashButton
  todoDiv.appendChild(trashButton); //again we are actually sticking it inside this Div we just created.
  // (APPEND TO LIST) taking this Big Div(todoDiv) which has (1li&2btns) and attach/append it to the actual <ul class="todo-list">  in html, because what we have right now is a Div just floating around and we have to append it to the ul todo-list
  todoList.appendChild(todoDiv);
}
