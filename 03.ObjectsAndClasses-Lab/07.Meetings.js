function salve(arr){
    const list = {};
    for (const line of arr) {
        const [day, employee] = line.split(" ");
        const keys = Object.keys(list);
        if (keys.includes(day)){
            console.log(`Conflict on ${day}!`);
        }
        else{
            list[day] = employee;
            console.log(`Scheduled for ${day}`);
        }
        
          
    }

    for (const key in list) {
        console.log(`${key} -> ${list[key]}`);
    }

}

salve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);