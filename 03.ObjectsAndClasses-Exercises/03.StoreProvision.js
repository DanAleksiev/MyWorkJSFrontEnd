function salve(store, order){
    const all = [...store, ...order];
    let output = [];
    const stack = all.reduce((acc, curr, i) => {
        if(i%2!==0){
            return acc;
        }
        if (!acc.hasOwnProperty(curr)){
            acc[curr] = 0;
        }
        acc[curr] += Number(all[i+1])
        return acc;
    }, {});

    Object.keys(stack).forEach ((key)  => {
        console.log(`${key} -> ${stack[key]}`);
    })
}

salve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);