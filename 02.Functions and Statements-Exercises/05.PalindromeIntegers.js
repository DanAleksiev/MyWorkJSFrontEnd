function solve(num){
    for (let i = 0; i < num.length; i++) {
        let currentNum = String(num[i]);
        let numberInReverse = "";
        
        for (let n = currentNum.length-1; n >= 0 ; n--) {
            numberInReverse += currentNum[n];            
        }

        if(currentNum === numberInReverse){
            console.log(`true`);
        }
        else{
            console.log(`false`);
        }
        // console.log(`${currentNum} - ${numberInReverse}`);
    }
}

solve([123,323,421,121])
solve([32,2,232,1010])