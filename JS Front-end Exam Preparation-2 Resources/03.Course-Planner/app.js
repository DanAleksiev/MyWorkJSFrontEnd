const URL_IN = "http://localhost:3030/jsonstore/tasks/";

const courses = {};

const selectors = {
  loadButton: document.querySelector("#load-course"),
  addCourseButton: document.querySelector("#add-course"),
};

const listSelectors = {
    listParent: document.querySelector("#list"),

}

const fields = {
    title: document.querySelector("#course-name"),
    type: document.querySelector("#course-type"),
    description: document.querySelector("#description"),
    teacher: document.querySelector("#teacher-name"),
}

selectors.loadButton.addEventListener("click", loadCourses);
selectors.addCourseButton.addEventListener("click", addButton)


async function loadCourses(e) {
    // Object.values(listSelectors).forEach((element) => (element.innerHTML = ""));
  const load = await (await fetch(URL_IN)).json();

  Object.values(load).forEach((course) => {
    generateCourses(course)
    
  });

    console.log(load);
}

async function addButton(){
    const currentCourse = {
        title: fields.title.value,
        type: fields.type.value,
        description: fields.description.value,
        teacher: fields.teacher.value,
    }
    if(currentCourse.type === "Long" ||currentCourse.type === "Medium" || currentCourse.type === "Short"){
        await fetch(URL_IN, {
            method: "POST",
            body: JSON.stringify(currentCourse),
          });
        
        loadCourses()
    }

    // Object.values(fields).forEach((e) => e.value = "")
}

function generateCourses(course) {
    courses[course._id] = course;

    const div = createElement("div", null, ["container"], null, listSelectors.listParent);
    createElement("h2", course.title, null, null, div);
    createElement("h3", course.teacher, null, null, div);
    createElement("h3", course.type, null, null, div);
    createElement("h4", course.description, null, null, div);
    createElement("button", "Edit Course", ["edit-btn"], null, div);
    createElement("button", "Finish Course", ["finish-btn"], null, div);
}

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
