function salve(cityData){
    Object.entries(cityData).forEach(function ([key,value]) {
        console.log(`${key} -> ${value}`);
    })

    // Object.entries(cityData).forEach(function (pair) {
    //     const key = pair[0];
    //     const value = pair[1];
    //     console.log(`${key} -> ${value}`);
    // })

    // Object.entries(cityData).forEach(([key,value]) => {
    //     console.log(`${key} -> ${value}`);
    // })

    // Object.entries(cityData).forEach(function ([key]) {
    //     console.log(`${key} -> ${cityData[key]}`);
    // })

    // for (const key in cityData) {
    //     console.log(`${key} -> ${cityData[key]}`);
    // }

}

const city = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    }

salve(city)