function solve(number, op1, op2, op3, op4, op5){
    let list = [op1, op2, op3, op4, op5]
    let num = Number(number);

    for (let i = 0; i < 5; i++) {
        switch (list[i]) {
            case "chop": num = num /2; break;
            case "dice": num = Math.sqrt(num);break;
            case "spice": num++; break;
            case "bake": num = num * 3; break;
            case "fillet": num = num - num*0.2; break;
        
            default: break;
        }
        
        console.log(num);
    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet' )