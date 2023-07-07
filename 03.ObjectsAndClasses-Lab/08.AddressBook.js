function salve(arr){
    const list = {};
    for (const line of arr) {
        const [person, address] = line.split(":");
        list[person] = address;
    }
    
    const keys = Object.keys(list).sort();
    keys.forEach(key =>{
        console.log(`${key} -> ${list[key]}`);
    });

}

salve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);