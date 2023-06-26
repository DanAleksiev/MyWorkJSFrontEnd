function solve(numbers){
    const sortedArray = numbers.sort((a,b) => a-b);
    //sort num by ascendin

    const output = [];

    let counter = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (i % 2 === 0){
            output.push(sortedArray[counter])
        }
        else{
            const length = sortedArray.length-1
            output.push(sortedArray[length-counter])
            counter++;
        }
    }

    return(output)
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])