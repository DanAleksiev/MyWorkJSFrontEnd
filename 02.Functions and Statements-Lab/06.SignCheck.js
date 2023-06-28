function salve(numOne, numTwo, numTree){
    const arr = [numOne,numTwo,numTree]
    let countOfPositives  = 0;
    for (const index of arr) {
        if(index >= 0){
            countOfPositives++;
        }
    }
    const result = countOfPositives === 1  || countOfPositives === 3 ? `Positive`: `Negative`;

    console.log(result);
}


// salve(5,12,-15)
salve(-6,-12,14)
// salve(-1,-2,-3)
// salve(-5,1,1)