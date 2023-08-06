window.addEventListener("load", solve);

function solve() {
  const objectSelectors = {
    name: document.querySelector("#student"),
    uni: document.querySelector("#university"),
    score: document.querySelector("#score"),
  };

  const selectors = {
    nextButton: document.querySelector("#next-btn"),
    previewList: document.querySelector("#preview-list"),
    applyPreview: document.querySelector("#candidates-list")
  };

  selectors.nextButton.addEventListener("click", nextAction);

  function nextAction() {
    if (Object.values(objectSelectors).some((e) => e.value === "")) {
      return;
    }

    const name = objectSelectors.name.value;
    const uni = objectSelectors.uni.value;
    const score = objectSelectors.score.value;

    Object.values(objectSelectors).forEach((e) => (e.value = ""));
    selectors.nextButton.disabled = true;

    const ul = selectors.previewList;
    const li = createElement("li", null, ["application"], null, ul);
    const article = createElement("article", null, null, null, li);
    createElement("h4", name, null, null, article);
    createElement("p", `University: ${uni}`, null, null, article);
    createElement("p", `Score: ${score}`, null, null, article);
    const editBtn = createElement(
      "button",
      "edit",
      ["action-btn"],
      ["edit"],
      li
    );
    const applyBtn = createElement(
      "button",
      "apply",
      ["action-btn"],
      ["apply"],
      li
    );

    editBtn.addEventListener("click", (e) => {
      objectSelectors.name.value = name;
      objectSelectors.uni.value = uni;
      objectSelectors.score.value = score;

      ul.innerHTML = "";
      selectors.nextButton.disabled = false;
    });
    applyBtn.addEventListener("click", (e) => {
      ul.innerHTML = "";
      selectors.nextButton.disabled = false;

      applyBtn.remove();
      editBtn.remove();
      
      const candidatesList = selectors.applyPreview
      candidatesList.appendChild(li)
    });
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
}
