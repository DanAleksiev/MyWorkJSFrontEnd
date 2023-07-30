
const article = createElement(`article`, null, ["task-card"], task.id )
createElement(
    `article`,
    null,
    ["task-card"],
    task.id,
    article
)

createElement(
    `h3`,
    task.title,
    [`task-card-title`],
    null,
    article
)


//....




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
