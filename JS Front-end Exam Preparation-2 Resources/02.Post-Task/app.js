window.addEventListener("load", solve);

function solve() {
  const data = {
    title: document.querySelector("#task-title"),
    category: document.querySelector("#task-category"),
    content: document.querySelector("#task-content"),
  };

  const documents = [];

  const publishButton = document.querySelector("#publish-btn");
  publishButton.addEventListener("click", publishPost);

  function publishPost() {
    if (!data.title.value || !data.category.value || !data.content.value) {
      return;
    }

    const ul = document.getElementById("review-list");
    const li = createElement("li", null, ["rpost"], null, ul);
    const article = createElement("article", null, null, null, li);
    createElement("h4", data.title.value, null, null, article);
    createElement("p", `Category: ${data.category.value}`, null, null, article);
    createElement("p", `Content: ${data.content.value}`, null, null, article);
    const editButton = createElement(
      "button",
      `Edit`,
      ["action-btn", ["edit"]],
      null,
      article
    );
    const postButton = createElement(
      "button",
      `Post`,
      ["action-btn", ["post"]],
      null,
      article
    );

    const currentD = {
      title: data.title.value,
      category: data.category.value,
      content: data.content.value,
    };

    documents.push(currentD);

    editButton.addEventListener("click", (e) => {
      data.title.value = currentD.title;
      data.category.value = currentD.category;
      data.content.value = currentD.content;

      li.remove();
    });

    postButton.addEventListener("click", (e) => {
      const currUl = document.getElementById("published-list");
      li.remove();
      editButton.remove();
      postButton.remove();
      currUl.appendChild(li);
    });

    Object.values(data).forEach((e) => (e.value = ""));

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
}
