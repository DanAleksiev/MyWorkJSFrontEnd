function salve(input){
    class TargetWords {
        constructor(word, count){
            this.word = word;
            this.count = count;
        }
    }


    //ToDo : learn how exactly that func works 
    function uniq(arrayOfWords) {
        var seen = {};
        return arrayOfWords.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }


    let sentence = input.split(" ");
    let wordsAndCount = [];
    sentence.forEach(element => {
        const target = element.toLowerCase();
        let count = 0;
        for (let i = 0; i < sentence.length; i++) {
            const currentWord = sentence[i].toLowerCase();
            if(target === currentWord){count++}
            
        }
        const word = new TargetWords(target, count);
        if(!wordsAndCount.includes(word)){
            wordsAndCount.push(word);
        }
        
    });

    const output = [];
    wordsAndCount
    .forEach(element =>{
        if(element.count % 2 !=0){
            output.push(element.word)
        }
    });

    console.log(uniq(output).join(" "));
}

salve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// salve('Cake IS SWEET is Soft CAKE sweet Food');