function getInfo() {
    const bus = document.getElementById("stopId").value;
    const timeTable = document.getElementById("buses");
    timeTable.innerHTML = "";
    const stopName = document.getElementById("stopName")

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${bus}`)
    .then((res) => res.json())
    .then((body) => {
        stopName.textContent = body.name
        const buses = Object.entries(body.buses).map(([busNumber, time])=>{
            const li = document.createElement("li");
            li.textContent = `Bus ${busNumber} arrives in ${time} minutes`
            
            timeTable.appendChild(li)
        });       
    })
    .catch (()  =>{
        stopName.textContent = "Error"  
    })
}