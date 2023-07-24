function attachEvents() {
  const textArea = document.querySelector("#messages");
  const currentMessages = [];

  const button = document.getElementById("submit");
  button.addEventListener("click", (e) => {
    fetch(`http://localhost:3030/jsonstore/messenger`)
      .then((res) => res.json())
      .then((body) => {
        const nameField = document.querySelector('input[name="author"]').value;
        const messageField = document.querySelector(
          'input[name="content"]'
        ).value;
        for (const m of Object.keys(body)) {
            console.log(m);
          currentMessages.push(`${body[m].author}: ${body[m].content}`);
        }

        currentMessages.push(`${nameField}: ${messageField}`);
      });
  });

  const display = document.getElementById("refresh");
  display.addEventListener("click", (e) => {
    textArea.textContent = currentMessages.join(`\n`)
  })
}

attachEvents();
