function solve(start, finish){

    let sum = 0;
    let num = [];
    for (let i = start; i <= finish; i++) {
        num.push(i)
        sum +=i
    }
    console.log(num.join(" "));
    console.log(`Sum: ${sum}`);
}

solve(5, 10)
solve(0,26)
solve(50,60)