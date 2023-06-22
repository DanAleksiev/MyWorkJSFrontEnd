function censorTheWord(text, word){
    const censoredSentance = text.replace(word,'*'.repeat(word.length))
    console.log(censoredSentance);
}

//length doesnt always show but is used when compiling

censorTheWord("A small sentence with some words", "small")