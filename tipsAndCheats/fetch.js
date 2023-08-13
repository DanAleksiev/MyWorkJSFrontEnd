const URL_IN = "http://localhost:3030/jsonstore/tasks/";


const vacations = await (await fetch(URL_IN)).json()
    Object.values(vacations).forEach(e => generateElements(e))

//get and go true

await fetch(URL_IN, {
    method: "POST",
    body: JSON.stringify(newElement),
  });