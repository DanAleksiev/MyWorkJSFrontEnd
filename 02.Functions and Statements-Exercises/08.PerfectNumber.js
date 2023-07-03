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

solve(6)
solve(28)
solve(1236498)