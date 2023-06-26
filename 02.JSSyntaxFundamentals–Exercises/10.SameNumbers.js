function solve(num){
    let sum = 0;
    let input = String(num);
    let same = true;

    for (let index = 0; index < input.length; index++) {
        sum += Number(input[index]);
        if(input[0] !== input[index]){
            same = false; 
        }
    }
    
    console.log(same);
    console.log(sum);
}

solve(1234)