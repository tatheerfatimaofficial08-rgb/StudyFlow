const taskInput = document.getElementById("taskInput");
const subjectInput = document.getElementById("subjectInput");
const dateInput = document.getElementById("dateInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("studyFlowTasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML =
            '<p class="empty-message">No tasks added yet.</p>';
        return;
    }

    tasks.forEach(function (task, index) {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        taskCard.innerHTML = `
            <div>
                <h3>${task.name}</h3>
                <p>${task.subject} | Due: ${task.date}</p>
            </div>

            <button class="delete-button" onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(taskCard);
    });
}

function saveTasks() {
    localStorage.setItem("studyFlowTasks", JSON.stringify(tasks));
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

addTaskButton.addEventListener("click", function () {
    const taskName = taskInput.value.trim();
    const subjectName = subjectInput.value;
    const dueDate = dateInput.value;

    if (taskName === "" || subjectName === "" || dueDate === "") {
        alert("Please fill all fields.");
        return;
    }

    const newTask = {
        name: taskName,
        subject: subjectName,
        date: dueDate
    };

    tasks.push(newTask);

    saveTasks();
    displayTasks();

    taskInput.value = "";
    subjectInput.value = "";
    dateInput.value = "";
});

displayTasks();