function salve(num){
    let message = num < 2 || num >6 ? `error`:
    num < 3 ? `Fail (2)` :
    num < 3.50 ? `Poor (${num.toFixed(2)})` :
    num < 4.50 ? `Good (${num.toFixed(2)})` :
    num < 5.50 ? `Very good (${num.toFixed(2)})` : 
    `Excellent (${num.toFixed(2)})`;
    
    console.log(message);
}

salve(3)
salve(1)
salve(7)
salve(4.50)
salve(5.55)
