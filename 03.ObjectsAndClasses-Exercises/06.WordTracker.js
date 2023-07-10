function salve(input){
    class TargetWords {
        constructor(word, count){
            this.word = word;
            this.count = count;
        }

        print (){
            console.log(`${this.word} - ${this.count}`);
        }
    }

    const words = input[0].split(" ");

    let wordsAndCount = [];
    words.forEach(element => {
        const currentWord = element;
        let count = 0;
        for (let i = 1; i < input.length; i++) {
            if(currentWord === input[i]){count++}
            
        }
        const word = new TargetWords(currentWord, count);
        wordsAndCount.push(word);
    });


    // .sort return is b first then a 
    wordsAndCount
    .sort((a,b)=> {return b.count - a.count})
    .forEach(element =>{element.print();
    });
}

salve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
    ]);

// salve([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task'
//     ]);