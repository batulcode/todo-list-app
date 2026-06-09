function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") {
    return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
