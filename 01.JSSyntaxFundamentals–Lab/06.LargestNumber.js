function bigestNum(num1,num2,num3) {
    let result;
    if (num1 >= num2 && num1 >= num3){
        result = num1
    }
    else if (num2 >= num1 && num2 >= num3){
        result = num2
    }
    else if (num3 >= num1 && num3 >= num2){
        result = num3
    }

    console.log(`The largest number is ${result}.`);
}


let num1 = 55;
let num2 = 3123;
let num3 = 123;
bigestNum(num1, num2 , num3)