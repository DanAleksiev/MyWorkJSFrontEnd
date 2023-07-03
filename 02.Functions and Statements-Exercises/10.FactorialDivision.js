function solve(num1,num2){
        function factorialCalc(n){
            let factorial = 1;
            for (let i = n; i > 0 ;i--) {
                factorial *=i;
            }
            return factorial;
        }

        n1Factorial = factorialCalc(num1);
        n2Factorial = factorialCalc(num2);

        const output = n1Factorial/n2Factorial
        console.log(output.toFixed(2));
    }
    
    solve(5,2)
    solve(6,2)