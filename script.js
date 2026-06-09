function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") {
    return;
    }

    let li = document.createElement("li");
    let taskText = document.createElement("span");
taskText.textContent = task;

taskText.onclick = function() {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "gray";
};

li.appendChild(taskText);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
        updateTaskCount();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    updateTaskCount();

    document.getElementById("taskInput").value = "";
}
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
function updateTaskCount() {
    let totalTasks = document.getElementById("taskList").children.length;
    document.getElementById("taskCount").textContent = "Tasks: " + totalTasks;
}
function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
    updateTaskCount();
}
