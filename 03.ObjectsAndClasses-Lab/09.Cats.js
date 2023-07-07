function salve(arr){
    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    let cats = [];
    arr.forEach((line) => {
        const [name, age] = line.split(" ");
        const cat = new Cat(name,age);
        cats.push(cat)
    });

    for (const cat of cats) {
        cat.meow();
    }
}

salve(['Mellow 2', 'Tom 5']);