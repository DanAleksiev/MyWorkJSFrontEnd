window.addEventListener("load", solve);

function solve() {
    const selectors = {
      addBtn: document.querySelector("#add-btn"),
      ul: document.querySelector("#sure-list"),
      newUl: document.querySelector("#scoreboard-list"),
      clear: document.querySelector(".clear")
    }

    const objectSelectors ={
      player: document.querySelector("#player"),
      score: document.querySelector("#score"),
      round: document.querySelector("#round"),
    }

    selectors.addBtn.addEventListener("click", addElement)
    selectors.clear.addEventListener("click", e=> {
      location.reload()
    })

    function addElement() {
      const player = objectSelectors.player.value
      const score = objectSelectors.score.value
      const round = objectSelectors.round.value
      const ul = selectors.ul

      if(Object.values(objectSelectors).some((e) => e.value === "")){
        return;
      }
      Object.values(objectSelectors).forEach((e) => (e.value = ""));
      selectors.addBtn.disabled = true

      const li = createElement("li", null, ["dart-item"],null,ul)
      const article = createElement("article", null, null,null,li)
      createElement("p", player, null,null,article)
      createElement("p", `Score: ${score}`, null,null,article)
      createElement("p", `Round: ${round}`, null,null,article)
      const editBtn = createElement("button", "edit", ["btn","edit"],null,li)
      const okBtn = createElement("button", "ok", ["btn","ok"],null,li)

      editBtn.addEventListener("click", e => {
        selectors.addBtn.disabled = false
        objectSelectors.player.value = player
        objectSelectors.score.value = score
        objectSelectors.round.value = round
        ul.innerHTML = ""   
      })

      okBtn.addEventListener("click", e => {
        ul.innerHTML = ""
        selectors.addBtn.disabled = false

        const newUl = selectors.newUl
        newUl.appendChild(li)
        editBtn.remove()
        okBtn.remove()
      })
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
  