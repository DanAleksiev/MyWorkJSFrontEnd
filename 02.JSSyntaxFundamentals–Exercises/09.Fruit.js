function solve(fruit, weightGrams, pricePerKilogram){
    let kg = weightGrams/1000;
    let total = kg * pricePerKilogram;

    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`); 
}

solve('apple', 1563, 2.35 )