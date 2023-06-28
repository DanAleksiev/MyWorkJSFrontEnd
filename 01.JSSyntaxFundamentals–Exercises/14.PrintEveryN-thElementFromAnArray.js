function solve(numbers, rotations){
    let output =[];
for (let i = 0; i < numbers.length; i++) {
    if(i % rotations === 0){
        output.push(numbers[i])
    }
}

return output;
}

solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1','2','3','4','5'],6);