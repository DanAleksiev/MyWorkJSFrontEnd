function solve(num){
const tempNumb = num/10;
let output = `${num}% [${`%`.repeat(tempNumb)}${`.`.repeat(10-tempNumb)}]`

if(num===100){
    console.log(`100% Complete!`);
}
else{
    console.log(output);
    console.log(`Still loading...`);
}
}

solve(30)
solve(50)
solve(100)