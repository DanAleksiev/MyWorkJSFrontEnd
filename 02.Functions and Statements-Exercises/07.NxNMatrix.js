function solve(num){
    let arr = Array.from({
        length: num
    },() => new Array(num).fill(num));

    console.log(arr
        .map(e =>e.join(" ")) //gets rid of the commas in between the individual chars.
        .join("\n"));         //print on new line


}

solve(3)
solve(7)
solve(2)