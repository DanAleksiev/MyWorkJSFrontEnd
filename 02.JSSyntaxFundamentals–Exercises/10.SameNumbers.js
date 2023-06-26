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


    //or 
    // const digits = num.toString().split("").map(Number);
    // const isConsistent = new Set(digits).size === 1;
    // const sum2 = digits.reduce((total, num) => total + num, 0);

    // console.log(isConsistent);
    // console.log(sum2);

}

solve(1234)