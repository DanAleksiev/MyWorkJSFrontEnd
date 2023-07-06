function salve(arr){
    const list = {};
    for (const line of arr) {
        const currentCustomer = line.split(" ");
        const key = currentCustomer[0];
        const number = currentCustomer[1];

        list[key] = number;     
    }

    // arr.forEach(element => {
    //     const currentCustomer = element.split(" ");
    //     const key = currentCustomer[0];
    //     const number = currentCustomer[1];

    //     list[key] = number;
    // });

    for (const key in list) {
        console.log(`${key} -> ${list[key]}`);
    }

}

salve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);