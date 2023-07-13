function deleteByEmail() {
    const text = document.getElementsByName(`email`)[0].value;

    const emailsList = document.querySelectorAll("#customers tr td:nth-child(2)");

    for (let e of emailsList) {       
        if(e.textContent === text){
            const row = e.parentNode;
            row.parentNode.removeChild(row)
            document.getElementById(`result`).textContent ="Deleted."
            return;
        }
        
        document.getElementById(`result`).textContent = `Not found.`
    }
}