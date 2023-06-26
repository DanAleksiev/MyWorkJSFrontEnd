function solve(num){
    let sum = 0;
    let input = String(num);
    for (let index = 0; index < input.length; index++) {
        sum += Number(input[index]);
        
    }

    console.log(sum);

}

solve(97561)