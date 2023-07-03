function solve(num){
    let sum = 0;
for (let i = 1; i < num; i++) {
    if (num% i ===0){
        sum +=i
    }    
}
const output = num === sum ? `We have a perfect number!` : `It's not so perfect.`;
console.log(output);
}

solve(30)
solve(50)
solve(100)