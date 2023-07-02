function solve(num1,num2,num3){
    function sum (num1,num2){
        return num1+num2;
    }

    function subtract(sumOfNum , num3){
        return sumOfNum-num3;
    }

    return subtract(sum(num1,num2),num3);
}

solve(23,6,10)
// solve(600,342,123)