function salve(input){
    const obj = JSON.parse(input)

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

salve('{"name": "George", "age": 40, "town": "Sofia"}')