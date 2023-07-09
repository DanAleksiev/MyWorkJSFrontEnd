function salve(input){
    const output = [];
    for (let i = 0; i < input.length; i++) {
        const [city, latitude, longitude] = input[i].split(" | ");
        const obj = {
            town: city,
            latitude: String(Number(latitude).toFixed(2)),
            longitude: String(Number(longitude).toFixed(2))
        };
        output.push(obj);

    }

    output.forEach(element => {
        console.log(element);        
    });
}

salve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);