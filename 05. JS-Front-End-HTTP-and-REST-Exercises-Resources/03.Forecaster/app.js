function attachEvents() {
    const target = document.getElementById("submit")
    const forecaster = document.getElementById("forecast")

    const emoji = {   
        Sunny:  "☀",
        PartlySunny: "⛅",
        Overcast: "☁",
        Rain: "☂",
    }
    // Degrees: `&#176`, // °
    
    target.addEventListener("click", (e)=>{
        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        .then((res) => res.json())
        .then((body) => {
            const input = document.getElementById("location")
            const city = body.find((obj) => obj.name === input.value)
            forecaster.style.display = "block"    

            currentCondition(city);
            treeDaysCondition(city);
                    
        })
        .catch(()=>{

            //TO DO !
            console.log("Error");
        })
        

    })

    function createSpan() {
        const forecastData = document.createElement("span")
        forecastData.setAttribute("class", "forecast-data")

        return forecastData
    }

    function currentCondition(city){
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${city.code}`)
        .then((res) => res.json())
        .then((body) => {
            const currentF = document.getElementById("current")

            const conditionSymbol = document.createElement("span")
            conditionSymbol.setAttribute("class", "condition symbol")
            const symbol = emoji[body.forecast.condition]
            conditionSymbol.textContent = symbol;
            currentF.appendChild(conditionSymbol)

            const condition = document.createElement("span")
            condition.setAttribute("class", "condition")

            const forecastDataName = createSpan()
            forecastDataName.textContent = body.name
            condition.appendChild(forecastDataName)
            
            const forecastDataTemp = createSpan()
            forecastDataTemp.textContent = `${body.forecast.low}°/${body.forecast.high}°`
            condition.appendChild(forecastDataTemp)

            const forecastDataCondition = createSpan()
            forecastDataCondition.textContent = body.forecast.condition
            condition.appendChild(forecastDataCondition)

            currentF.appendChild(condition)
        })
    }

    function treeDaysCondition(city){
        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${city.code}`)
        .then((res) => res.json())
        .then((body) => {
            const currentF = document.getElementById("upcoming")
            const forecastInfo = document.createElement("div")
            forecastInfo.setAttribute("class", "forecast-info")
            
            for (const e of body.forecast) {
                const condition = document.createElement("span")
                condition.setAttribute("class", "upcoming")

                const conditionSymbol = document.createElement("span")
                conditionSymbol.setAttribute("class", "condition symbol")
                const symbol = emoji[e.condition]
                conditionSymbol.textContent = symbol;
                condition.appendChild(conditionSymbol)

                const forecastDataTemp = createSpan()
                forecastDataTemp.textContent = `${e.low}°/${e.high}°`
                condition.appendChild(forecastDataTemp)
                
                const forecastDataCondition = createSpan()
                forecastDataCondition.textContent = e.condition
                condition.appendChild(forecastDataCondition)

                forecastInfo.appendChild(condition)
            }
            currentF.appendChild(forecastInfo)
        })
    }
}

attachEvents();