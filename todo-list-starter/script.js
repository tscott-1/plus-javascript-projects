let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoImportantTask = [true,false];

const todoList = document.getElementById("todo-list");




const addTask = () => {
  const newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTasks.push(newTask.value);
    todoTasksStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
};

const updateTodoList = () => {
  todoList.innerHTML = "";
  for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  }
};

const createNewTodoItemElement = (task, index) => {
// Create a <p> element to store the task description
const newTodoTaskTextElement = document.createElement("p");
newTodoTaskTextElement.innerText = task;

// Apply a CSS class to the completed items
if (todoTasksStatus[index] == true) {
  newTodoTaskTextElement.classList.add("complete");
}  

// Create a <li> element to contain the paragraph
const newTodoTaskElement = document.createElement("li");
newTodoTaskElement.appendChild(newTodoTaskTextElement);

// Adding a button to mark each item as complete
const completeButtonElement = document.createElement("input");
completeButtonElement.type = "button";
completeButtonElement.value = "Completed";
completeButtonElement.onclick = function () {
toggleComplete(index);
};
// Adding a button to mark important items
const completeButtonElement = document.createElement("input");
completeButtonElement.type = "button";
completeButtonElement.value = "!";
completeButtonElement.onclick = function () {
toggleComplete(index);
};
newTodoTaskElement.appendChild(completeButtonElement);
return newTodoTaskElement;
};

const toggleComplete = (index) => {
// If it is complete, set it to incomplete. 
// If it is incomplete, set it to complete.
if (todoTasksStatus[index] == false) {
  todoTasksStatus[index] = true;
} else {
  todoTasksStatus[index] = false;
}
updateTodoList();
    
};


const clearList = () => {
  todoList.innerHTML = "";
};



updateTodoList();
