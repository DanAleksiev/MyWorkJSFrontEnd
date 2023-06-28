function solve(sentance){
    const regex =  /#+[a-zA-Z]{2,}/ig
    const arr = sentance.match(regex)
    for (const targetWord of arr) {
        
            let result = targetWord.substring(1);
            console.log(result);
            }

    
    // let arrSentance = sentance.split(" ");
    // for (const targetWord of arrSentance) {
    //     if ( targetWord.startsWith("#") && targetWord.length > 1 && wordCheck(targetWord.substring(1))){
    //         let result = targetWord.substring(1);
    //         console.log(result);
    //     }
    // }

    // function wordCheck(word){
    //     return word.split("").every(char => isLetter(char));
    // }

    // function isLetter(c){
    //     return c.toLowerCase() != c.toUpperCase();
    // }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')