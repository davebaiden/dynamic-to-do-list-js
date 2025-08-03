// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            // Event to remove task
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append button to li, then li to ul
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Add event listener for the button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
