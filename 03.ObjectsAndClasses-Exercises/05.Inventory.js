function salve(input){
    class Hero {
        constructor(name,lvl){
            this.name = name;
            this.lvl = lvl;
            this.items = [];
        }

        print() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.lvl}`);
            console.log(`items => ${this.items.join(", ")}`);
        }
    }

    let party = [];

    input.forEach(element => {
        const [name, lvl, items] = element.split(` / `);
        const hero = new Hero(name,lvl);
        if (items){
            const inventory = [];
            items.split(", ").forEach((element) => {
            inventory.push(element);
            });
            hero.items = inventory
        }

        party.push(hero);

    });


    party
    .sort(function(a,b){return b.lvl-a.lvl})
    .reverse()
    .forEach((member)=> member.print());
}

// salve([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
//     ]);

    salve([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
        ]);