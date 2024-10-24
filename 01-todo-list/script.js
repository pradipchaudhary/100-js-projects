// Select elements
const todoForm = document.querySelector("#todo-form");
const taskList = document.querySelector("#task-list");
const newTaskInput = document.querySelector("#new-task");

// Handle form submit event
todoForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get the task text from input
    const taskText = newTaskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") return;

    // Create new task list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button to the task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(deleteBtn);

    // Append to task list
    taskList.appendChild(li);

    // Clear the input field
    newTaskInput.value = "";

    // Delete task functionality
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
});
