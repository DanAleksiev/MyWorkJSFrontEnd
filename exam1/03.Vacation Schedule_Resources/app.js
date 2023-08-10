const URL_IN = "http://localhost:3030/jsonstore/tasks/";

const selectors = {
  addVacation: document.querySelector("#add-vacation"),
  editVacation: document.querySelector("#edit-vacation"),
  loadVacations: document.querySelector("#load-vacations"),
  list: document.querySelector("#list"),
};

const objectSelectors = {
  name: document.querySelector("#name"),
  days: document.querySelector("#num-days"),
  date: document.querySelector("#from-date"),
};
const list = {};
let currentID = "";
selectors.loadVacations.addEventListener("click", loadVacations);

selectors.addVacation.addEventListener("click", addVacation);

selectors.editVacation.addEventListener("click", editVacation);

async function addVacation() {
  // console.log("test");
  const name = objectSelectors.name.value;
  const days = objectSelectors.days.value;
  const date = objectSelectors.date.value;

  if (Object.values(objectSelectors).some((e) => e.value === "")) {
    return;
  }

  const newElement = {
    name,
    days,
    date,
  };

  await fetch(URL_IN, {
    method: "POST",
    body: JSON.stringify(newElement),
  });
  loadVacations;
}

async function loadVacations() {
  selectors.list.innerHTML = "";

  const vacations = await (await fetch(URL_IN)).json();
  Object.values(vacations).forEach((e) => generateElements(e));

  selectors.addVacation.disabled = false;
  selectors.editVacation.disabled = true;
  Object.values(objectSelectors).forEach((e) => (e.value = ""));

  console.log(list);
}

function generateElements(e) {
  // console.log(e);
  const ul = selectors.list;
  const div = createElement("div", null, ["container"], `${e._id}`, ul);
  createElement("h2", e.name, null, null, div);
  createElement("h3", e.date, null, null, div);
  createElement("h3", e.days, null, null, div);
  const cButton = createElement("button", "Change", ["change-btn"], null, div);
  const dButton = createElement("button", "Done", ["done-btn"], null, div);

  const curr = {
    name: e.name,
    date: e.date,
    days: e.days,
  };

  list[e._id] = curr;
  currentID = e._id;

  cButton.addEventListener("click", (el) => {
    const currentTarget = list[e._id];
    objectSelectors.name.value = currentTarget.name;
    objectSelectors.days.value = currentTarget.days;
    objectSelectors.date.value = currentTarget.date;

    div.remove();

    selectors.editVacation.disabled = false;
    selectors.addVacation.disabled = true;

    console.log(e._id);
    console.log("cButton");
  });
  dButton.addEventListener("click", doneWithVacation);
}

async function doneWithVacation(e) {
  const id = e.currentTarget.parentElement.getAttribute("id");

  await fetch(`${URL_IN}${id}`, {
    method: "DELETE",
    body: undefined,
  });

  delete list[id];
  loadVacations();
}

async function editVacation() {
  const name = objectSelectors.name.value;
  const days = objectSelectors.days.value;
  const date = objectSelectors.date.value;
  // const e = document.querySelector(`#${currentID}`)

  const newElement = {};
  newElement[currentID] = { name, days, date };

  console.log(newElement);

  await fetch(`${URL_IN}${currentID}`, {
    method: "PUT",
    body: JSON.stringify(newElement[currentID]),
  });

  loadVacations();
}

function createElement(type, textContent, classes, id, parent, useInnerHTML) {
  const element = document.createElement(type);

  if (useInnerHTML && textContent) {
    element.innerHTML = textContent;
  } else if (textContent) {
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
