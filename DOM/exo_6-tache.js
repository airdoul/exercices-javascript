// titre 
const title = document.createElement("h1");
title.textContent = "Liste de tâche";

// nouvelle tâche
const input = document.createElement("input");
input.id = "userInput";
input.placeholder = "Ajouter une tâche...";
input.style.width = "35vw";
input.style.borderRadius = "5px";
input.style.margin = "5px";
input.style.padding = "15px";
input.style.border = "1px solid #ccc";
input.style.fontSize = "20px";

// bouton Ajouter
const button = document.createElement("button");
button.textContent = "Ajouter";
button.style.backgroundColor = "#2972fc";
button.style.color = "white";
button.style.border = "none";
button.style.padding = "15px";
button.style.fontSize = "20px";
button.style.borderRadius = "12px";
button.style.marginLeft = "40px";
button.style.cursor = "pointer";

// message d'erreur
const errorMessage = document.createElement("p");
errorMessage.style.color = "red";
errorMessage.style.fontSize = "16px";

// sections "en cours" et "complétées"
const inProgress = document.createElement("h2");
inProgress.textContent = "Tâches en cours";
const inProgressList = document.createElement("ul");
inProgressList.id = "inProgressList";
inProgressList.style.listStyle = "none";

const done = document.createElement("h2");
done.textContent = "Tâches complétées";
const doneList = document.createElement("ul");
doneList.id = "doneList";
doneList.style.listStyle = "none";

//! Fonctions localStorage
// Sauvegarde les tâche dans localStorage
function saveTasksToLocalStorage() {
    const tasks = [];
    const extractTasks = (list, done) => {
        Array.from(list.children).forEach(li => {
            const span = li.querySelector("span");
            if (span) {
                tasks.push({ name: span.textContent.trim(), done });
            }
        });
    };
    extractTasks(inProgressList, false);
    extractTasks(doneList, true);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Charge les tâches depuis localStorage
function loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(task => createTask(task.name, task.done));
}

//! apparence input 
input.addEventListener("focus", function () {
    input.style.border = "5px solid rgba(41, 139, 252, 0.25)";
    input.style.outline = "none";
});

input.addEventListener("blur", function () {
    input.style.border = "1px solid #ccc";
});

input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
        input.style.backgroundColor = "lightblue";
        input.style.color = "white";
    } else {
        input.style.backgroundColor = "white";
        input.style.color = "black";
    }
});

//!  tâches
function createTask(taskName, isDone = false) {
    // élément tâche 
    const newTask = document.createElement("li");
    newTask.style.fontSize = "20px";
    newTask.style.marginBottom = "20px";

    // Container tâche
    const taskContainer = document.createElement("div");
    taskContainer.style.display = "flex";
    taskContainer.style.alignItems = "center";
    taskContainer.style.justifyContent = "space-between";
    taskContainer.style.flexWrap = "wrap";
    taskContainer.style.gap = "10px";
    taskContainer.style.padding = "10px";
    taskContainer.style.border = "1px solid #ddd";
    taskContainer.style.borderRadius = "10px";
    taskContainer.style.backgroundColor = "#f9f9f9";

    // Texte tâche
    const taskText = document.createElement("span");
    taskText.textContent = taskName;
    taskText.style.fontSize = "20px";
    taskText.style.flex = "1";

    // Bouton modifier
    const modifButton = document.createElement("button");
    modifButton.textContent = "Modifier";
    modifButton.style = buttonStyle("blue");

    // Bouton terminé, en cours
    const completeButton = document.createElement("button");
    completeButton.textContent = isDone ? "En cours" : "Terminé";
    completeButton.style = buttonStyle(isDone ? "orange" : "green");

    // Bouton supprimer
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.style = buttonStyle("red");

    //? Actions boutons
    deleteButton.addEventListener("click", () => {
        newTask.remove();
        saveTasksToLocalStorage();
    });

    completeButton.addEventListener("click", () => {
        if (isDone) {
            inProgressList.appendChild(newTask);
            completeButton.textContent = "Terminé";
            completeButton.style.backgroundColor = "green";
            isDone = false;
        } else {
            doneList.appendChild(newTask);
            completeButton.textContent = "En cours";
            completeButton.style.backgroundColor = "orange";
            isDone = true;
        }
        saveTasksToLocalStorage();
    });

    modifButton.addEventListener("click", () => {
        const currentText = taskText.textContent;
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = currentText;
        editInput.style.fontSize = "20px";

        const validateButton = document.createElement("button");
        validateButton.textContent = "Valider";
        validateButton.style = buttonStyle("purple");

        taskText.style.display = "none";
        modifButton.style.display = "none";
        taskContainer.insertBefore(editInput, taskText);
        taskContainer.insertBefore(validateButton, deleteButton);

        validateButton.addEventListener("click", () => {
            const newText = editInput.value.trim();
            if (!newText) {
                errorMessage.textContent = "Le nom de la tâche est vide";
                return;
            }
            taskText.textContent = newText;
            taskText.style.display = "";
            modifButton.style.display = "";
            editInput.remove();
            validateButton.remove();
            saveTasksToLocalStorage();
        });
    });

    // Ajout éléments
    taskContainer.append(taskText, modifButton, deleteButton, completeButton);
    newTask.appendChild(taskContainer);
    (isDone ? doneList : inProgressList).appendChild(newTask);
}

//todo Style  boutons
function buttonStyle(color) {
    return `
        background-color: ${color};
        color: white;
        border: none;
        padding: 5px;
        border-radius: 5px;
        margin-left: 10px;
        font-size: 20px;
        cursor: pointer;
    `;
}

//! listener bouton "Ajouter"
button.addEventListener("click", () => {
    const taskName = input.value.trim();

    const getTaskNames = list =>
        Array.from(list.children).map(task => task.querySelector("span")?.textContent.trim());

    const tasksInProgress = getTaskNames(inProgressList);
    const tasksDone = getTaskNames(doneList);

    if (!taskName) {
        errorMessage.textContent = "Le nom de la tâche est vide";
        return;
    }

    if (tasksInProgress.includes(taskName) || tasksDone.includes(taskName)) {
        errorMessage.textContent = "Une tâche avec ce nom existe déjà";
        return;
    }

    errorMessage.textContent = "";
    createTask(taskName);
    input.value = "";
    input.style.backgroundColor = "white";
    input.style.color = "black";
    saveTasksToLocalStorage();
});

//! éléments dans body
// ordre 
document.body.append(title, input, button, errorMessage, inProgress, inProgressList, done, doneList);

//! Chargement tâches 
loadTasksFromLocalStorage();
