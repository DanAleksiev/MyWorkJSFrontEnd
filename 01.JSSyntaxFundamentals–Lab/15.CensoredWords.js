function censorTheWord(text, word){
    // const censoredSentance = text.replace(word,'*'.repeat(word.length))
    // console.log(censoredSentance);

    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            let replace = `*`.repeat(word.length)
            words[i] = replace;
        }
        
    }

    console.log(words.join(" ").trim())
}

//length doesn't always show but is used when compiling

censorTheWord("A small sentence with some words", "is")