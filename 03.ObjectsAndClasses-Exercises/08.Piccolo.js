function salve(input){
let carsLeft = {};
for (let i = 0; i < input.length; i++) {
    let [action, numberplate] = input[i].split(", ");

    carsLeft[numberplate] = action;
}

for (const car in carsLeft) {
    if (carsLeft[car] === `OUT`){
        delete carsLeft[car];       
    }
}
let keys = Object.keys(carsLeft).sort((a,b)=> {return a.localeCompare(b)});
if(keys.length>0){
    keys.forEach(key => {
        console.log(key)});
}
else{
    console.log("Parking Lot is Empty");
}
}

salve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

// salve(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']);