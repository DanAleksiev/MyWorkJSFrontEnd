function solve(word , sentance){
    sentance = sentance.toLowerCase().split(" ");

    if(sentance.includes(word.toLowerCase())){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
    
    // for (let i = 0; i < sentance.length; i++) {
    //     if (sentance[i] === word) {
    //         console.log(word);
    //         return;
    //     }      
    // }

    // console.log(`${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')