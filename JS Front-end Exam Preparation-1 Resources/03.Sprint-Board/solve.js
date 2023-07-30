function attachEvents() {
  const URL_IN = "http://localhost:3030/jsonstore/tasks/";

  const selectors = {
    loadBoard: document.querySelector("#load-board-btn"),
    addTaskButton: document.querySelector("#create-task-btn"),
    moveElementButton: document.querySelector(".move-button"),
  };

  const taskSelection = {
    ToDo: document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    Done: document.querySelector("#done-section .task-list"),
  };
  const repo ={};
  attachElements();

  function attachElements() {
    const loadButton = selectors.loadBoard;
    loadButton.addEventListener("click", loadBoard);

    const addTaskButton = selectors.addTaskButton;
    addTaskButton.addEventListener("click", addTask);

   
  }

  async function addTask() {
    
    const inputs = {
      title: document.querySelector("#title"),
      description: document.querySelector("#description"),
    };
    
    if (Object.values(inputs).some((selector) => selector.value === "")) {
      return;
    }

    const newElement = {
      title: inputs.title.value,
      description: inputs.description.value,
      status: "ToDo",
    };

    await fetch(URL_IN, {
      method: "POST",
      body: JSON.stringify(newElement),
    });

    loadBoard();
    // generateElement(newElement);

    Object.values(inputs).forEach((element) => (element.value = ""));
  }

  function generateElement(obj) {
    let currentStatus = obj.status;
    const status ={
        "ToDo": "Move to In Progress",
        "In Progress": "Move to Code",
        "Code Review": "Move to Done",
        "Done": "Close"
    }

    const li = createElement(
      "li",
      null,
      ["task"],
      null,
      taskSelection[currentStatus]
    );
    repo[obj._id] = obj
    createElement("h3", obj.title, null, null, li);
    createElement("p", obj.description, null, null, li);
    const moveElementButton = createElement("button", status[currentStatus], null, obj._id, li);
    moveElementButton.addEventListener("click", moveElement);
  }

  async function loadBoard() {
    Object.values(taskSelection).forEach((element) => (element.innerHTML = ""));
    const load = await (await fetch(URL_IN)).json();

    Object.values(load).forEach((element) => {
      generateElement(element);
    });
  }

  async function moveElement(e) {
    const status ={
      "ToDo": "In Progress",
      "In Progress": "Code Review",
      "Code Review": "Done",
      "Done": "Deleted"
  }
    const id = e.currentTarget.getAttribute("id")
    const currentTarget = repo[id]
    let method = "PATCH";
    let body = JSON.stringify({
      ...currentTarget,
      status: status[currentTarget.status]
    })

    if(currentTarget.status === "Done"){
      method = "DELETE"
      body = undefined;
    }

    await fetch(`${URL_IN}/${currentTarget._id}`, {
      method,
      body,
    });

    loadBoard();
  }

  ////
  function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type);

    if (textContent) {
      element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }

    if (id) {
      element.setAttribute("id", id);
    }

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  }
}

attachEvents();
