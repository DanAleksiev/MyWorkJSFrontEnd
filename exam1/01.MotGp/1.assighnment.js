function solve(input) {
    const numRiders = input.shift()
    const riders = {}
    for (let i = 0; i < Number(numRiders); i++) {
        const [name, fuelCapacity, position] = input[i].split("|")
        const currentRider = {
            name,
            fuelCapacity,
            position
        }

        riders[name] = currentRider
    }


    const actions = input.slice(numRiders,input.length)
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i].split(" - ")
        if (action === "Finish"){
            break;
        }   

        if (action[0] === "Overtaking"){
            const rider1 = action[1]
            const rider2 = action[2]

            const target1 = riders[rider1]
            const target2 = riders[rider2]

            if(target1.position < target2.position){
                const currentPositionR1 = target1.position
                const currentPositionR2 = target2.position

                target1.position = currentPositionR2
                target2.position = currentPositionR1

                console.log(`${rider1} overtook ${rider2}!`);
            }

        }
        else if (action[0] === "EngineFail"){
            const rider = action[1]
            const lapsLeft = action[2]

            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            delete riders[rider]
        }
        else if (action[0] === "StopForFuel"){
            const rider = action[1]
            const minimumFuel = action[2]
            const toPositions = action[3]

            const targetedRider = riders[rider]
            // console.log(minimumFuel);
            // console.log();
            if (Number(targetedRider.fuelCapacity) < minimumFuel){
                console.log(`${rider} stopped to refuel but lost his position, now he is ${toPositions}.`);
                targetedRider.position = toPositions
            }
            else{
                console.log(`${rider} does not need to stop for fuel!`);
            }
            

        }
        
    }
    Object.values(riders).forEach(element => {
        console.log(element.name);
        console.log(`  Final position: ${element.position}`);
    });
}

// solve(["3",
// "Valentino Rossi|100|1",
// "Marc Marquez|90|2",
// "Jorge Lorenzo|80|3",
// "StopForFuel - Valentino Rossi - 50 - 1",
// "Overtaking - Marc Marquez - Jorge Lorenzo",
// "EngineFail - Marc Marquez - 10",
// "Finish"]);

solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);