function extractText() {
    const list = Array.from(document.querySelectorAll(`li`)) //gets "array" of data and parse it to array

    const output = list.map((item)=> item.textContent).join(`\n`)
    document.getElementById(`result`).value = output;
}