function solve(num){
    let toStringArr = String(num).split("");

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < toStringArr.length; i++) {
        if(toStringArr[i] % 2 ===0){
            sumEven += Number(toStringArr[i]);
        }
        else{
            sumOdd += Number(toStringArr[i]);
        }    
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

solve(1000435)
solve(3495892137259234)