window.addEventListener("load", solve);

function solve() {
  const objectSelectors = {
    name: document.querySelector("#student"),
    uni: document.querySelector("#university"),
    score: document.querySelector("#score"),
  };

  const selectors = {
    nextButton: document.querySelector("#next-btn"),
    previewList: document.querySelector("#preview-list")
  };

  selectors.nextButton.addEventListener("click", nextAction);

  function nextAction() {
    if(Object.values(objectSelectors).some((e) => e.value === "")){
      return;
    }

    const name = objectSelectors.name.value;
    const uni = objectSelectors.uni.value;
    const score = objectSelectors.score.value;

    const ul = selectors.previewList

    createElement()

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
