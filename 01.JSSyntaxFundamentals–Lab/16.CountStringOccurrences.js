function count(text, word){
    const countWords = text.split(" ");
    let count = 0;
    for (let i = 0; i < countWords.length; i++) {
        if(countWords[i] === word){
            count++;
        }      
    }
    console.log(count);
}



count('softuni is great place for learning new programming languages','softuni' )