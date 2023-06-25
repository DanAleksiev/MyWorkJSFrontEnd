function decriptWord(word, startIndex , numOfElements){
    let result =word.substr(startIndex,numOfElements);

    // for (let i = startIndex; i <= numOfElements; i++) {
    //     result += word[i];
        
    // }
    console.log(result);
}


decriptWord('SkipWord', 4, 7)