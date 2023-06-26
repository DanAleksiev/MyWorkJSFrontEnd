function solve(words, sentance){
    let arrWords = words.split(", ");
    let arrSentance = sentance.split(" ");

    for (let i = 0; i < arrWords.length; i++) {
        for (let y = 0; y < arrSentance.length; y++) {
            let targetWord = `*`.repeat(arrSentance[y].length)

            if(arrSentance[y].length === arrWords[i].length && arrSentance[y] === targetWord){
                 arrSentance[y] = arrWords[i];
                break;
            }
            
        }
        
    }
    console.log(`${arrSentance.join(" ")}`);
}

solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')