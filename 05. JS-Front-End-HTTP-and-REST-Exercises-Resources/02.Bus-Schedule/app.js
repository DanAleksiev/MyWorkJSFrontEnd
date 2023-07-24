function solve() {
    const infoTable = document.getElementById("info")

    let currentStop = ""
    let nextStop = ""
    
    
    function depart() {
        if(nextStop){
            currentStop = nextStop
        }
        else{
            currentStop = "depot"
        }
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop}`)
        .then((res) => res.json())
        .then((body) => {

        infoTable.textContent = `Next stop ${body.name}`;
        nextStop = body.next;
        document.getElementById("depart").disabled = true
        document.getElementById("arrive").disabled = false
    })
    .catch (()  =>{
        document.getElementById("depart").disabled = false
        document.getElementById("arrive").disabled = false
         infoTable.textContent = "Error";
    })
             
    }

    async function arrive() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop}`)
        .then((res) => res.json())
        .then((body) => {
        infoTable.textContent = `Arriving at ${body.name}`;})

        document.getElementById("depart").disabled = false
        document.getElementById("arrive").disabled = true
    }

    

    return {
        depart,
        arrive
    };
}

let result = solve();