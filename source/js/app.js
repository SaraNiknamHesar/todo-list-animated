let $ = document;
let body = document.body;
body.onload = (event) => {
    event.preventdefault;
};
let addBtn = $.querySelector("#add_btn");
let modal = $.querySelector(".modal");
let todoInput = $.querySelector("#todo_input");
let todoSubmit = $.querySelector("#todo_submit");
let btnCloseModal = $.querySelector(".close-modal");
let btnSmClose = $.querySelector(".close");
let todo = $.querySelector(".todo");
let statusElement = $.querySelectorAll(".status");
let draggedElement = null;
btnCloseModal.addEventListener("click", closeModal);
addBtn.addEventListener("click", showModal);
todoSubmit.addEventListener("click", addNote);
todo.addEventListener("dragstart", (event) => {
    draggedElement = event.target;
    // event.dataTransfer.setData("getClass", event.target.class);


});
Array.from(statusElement).forEach((statusElement) => {
    statusElement.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

});

Array.from(statusElement).forEach((statesElem) => {
    statesElem.addEventListener("drop", (event) => {
        // event.preventDefault();
        if (draggedElement) {
            statesElem.appendChild(draggedElement);
            draggedElement = null;
        }
        let result = event.dataTransfer.getData("getClass");
        event.target.append(result);


    });
});

function showModal() {
    modal.style.top = "50%";
}
function addNote() {
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.setAttribute("draggable", "true");
    newTodo.innerHTML = todoInput.value;
    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";
    newTodo.append(closeBtn);
    statusElement.append(newTodo);
    todoInput.value = "";
    closeBtn.addEventListener("click", () => {
        newTodo.remove();
    });

}
function closeModal() {
    modal.style.top = "-50%";
}
