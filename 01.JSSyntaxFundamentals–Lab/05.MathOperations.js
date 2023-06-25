function calculate(num1,num2,operator){
    
let result;

switch(operator){
    case '+':result = num1+num2;break;
    case '-':result = num1-num2;break;
    case '/':result = num1/num2;break;
    case '*':result = num1*num2;break;
    case '%':result = num1%num2;break;
    case '**':result = num1**num2;break;
}

console.log(result);
}



let num1 = 10;
let num2 = 23;
let operator = '%';
calculate(num1,num2,operator)