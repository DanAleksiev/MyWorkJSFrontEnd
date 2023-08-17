const URL_IN = "http://localhost:3030/jsonstore/tasks/";

const selectors = {
  loadHistory: document.querySelector("#load-history"),
  list: document.querySelector("#list"),
  editWeather: document.querySelector("#edit-weather"),
  addWeather: document.querySelector("#add-weather"),
};

const objectSelectors = {
  location: document.querySelector("#location"),
  temperature: document.querySelector("#temperature"),
  date: document.querySelector("#date"),
};

let targetID = "";

selectors.loadHistory.addEventListener("click", loadWeather);
selectors.addWeather.addEventListener("click", addNewWeather);
selectors.editWeather.addEventListener("click", editWeather);

async function editWeather() {
  const location = objectSelectors.location.value;
  const temperature = objectSelectors.temperature.value;
  const date = objectSelectors.date.value;

    const newElement = {
      location,
      temperature,
      date,
      _id: targetID,
    };

    await fetch(`${URL_IN}${targetID}`, {
      method: "PUT",
      body: JSON.stringify(newElement),
  });
  loadWeather();
}

async function loadWeather() {
  selectors.addWeather.disabled = false;
  selectors.editWeather.disabled = true;
  selectors.list.innerHTML = "";

  const weather = await (await fetch(URL_IN)).json();
  Object.values(weather).forEach((e) => generateElements(e));
}

async function addNewWeather() {
  const location = objectSelectors.location.value;
  const temperature = objectSelectors.temperature.value;
  const date = objectSelectors.date.value;

  if (Object.values(objectSelectors).some((e) => e.value === "")) {
    return;
  }

  Object.values(objectSelectors).forEach((e) => (e.value = ""));
  const newElement = {
    location,
    temperature,
    date,
  };

  await fetch(URL_IN, {
    method: "POST",
    body: JSON.stringify(newElement),
  });

  loadWeather();
}

function generateElements(e) {
  const ul = selectors.list;

  const container = createElement("div", null, ["container"], null, ul);
  createElement("h2", e.location, null, null, container);
  createElement("h3", e.date, null, null, container);
  createElement("h3", e.temperature, null, "celsius", container);
  const div = createElement(
    "div",
    null,
    ["buttons-container"],
    null,
    container
  );
  const change = createElement("button", "Change", ["change-btn"], null, div);
  const deleteBtn = createElement(
    "button",
    "Delete",
    ["delete-btn"],
    null,
    div
  );

  targetID = e._id;
  change.addEventListener("click", () => {
    objectSelectors.location.value = e.location;
    objectSelectors.temperature.value = e.temperature;
    objectSelectors.date.value = e.date;
    selectors.editWeather.disabled = false;
    selectors.addWeather.disabled = true;
    container.remove();
  });

  deleteBtn.addEventListener("click", e => deleteElement(e));
}

async function deleteElement(e) {
    await fetch(`${URL_IN}${targetID}`, {
      method: "DELETE",
      body: undefined,
    });

  loadWeather();
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
