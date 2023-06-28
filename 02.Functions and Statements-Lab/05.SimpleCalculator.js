function salve(numOne, numTwo, operator){
    let result = 0;

    switch(operator){
        case 'add': result = numOne + numTwo; break;
        case 'subtract': result = numOne - numTwo; break;
        case 'multiply': result = numOne * numTwo; break;
        case 'divide': result = numOne / numTwo; break;
    }
    console.log(result);
}


salve(5,5,'multiply')
salve(40,8,'divide')
salve(12,19,'add')
salve(50,13,'subtract')
