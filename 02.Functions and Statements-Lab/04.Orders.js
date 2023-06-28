function salve(word,num){
    let price = word === `coffee` ? 1.50 * num :
    word === `water` ? 1.00 * num :
    word === `coke` ? 1.40 * num :
    word === `snacks` ? 2.0 * num :
    `Error`;
    
    console.log(price.toFixed(2));
}

salve("water",5)
salve("coffee", 2)
