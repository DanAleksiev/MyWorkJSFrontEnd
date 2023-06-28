function solve(numbers, rotations){
    for (let i = 0; i < rotations; i++) {
        let temNum = numbers[0];
        numbers.shift(temNum);
        numbers.push(temNum);

    }

    console.log(numbers.join(" "));

}

solve([51, 47, 32, 61, 21], 2)