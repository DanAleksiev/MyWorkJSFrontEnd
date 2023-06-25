function calcPrice(dayOfTheWeek,age) {
let result;
if (age <= 0 || age >122) {
    console.log(`Error!`);
    return;
}

if(age <= 18){
    switch(dayOfTheWeek){
        case 'Weekday':result= 12 ;break;
        case 'Weekend':result= 15 ;break;
        case 'Holiday':result= 5 ;break;
        // default:console.log(`Error!`);return;
    }
}
else if(age <= 64){
    switch(dayOfTheWeek){
        case 'Weekday':result= 18 ;break;
        case 'Weekend':result= 20 ;break;
        case 'Holiday':result= 12 ;break;
        // default:console.log(`Error!`);return;
    }
}
else if(age <= 122){
    switch(dayOfTheWeek){
        case 'Weekday':result= 12 ;break;
        case 'Weekend':result= 15 ;break;
        case 'Holiday':result= 10 ;break;
        // default:console.log(`Error!`);return;
    }
}
   console.log(`${result}$`); 
}

//multi dimantional array version
function cost(partOfWeek, age){
    let priceBoard =[
        [12,18,12],//weekday
        [15,20,15],//weekend
        [5,12,10]//holiday
    ]

    let weekIndex;
    let ageIndex;

    switch(partOfWeek){
        case 'Weekday': weekIndex = 0; break;
        case 'Weekend': weekIndex = 1; break;
        case 'Holiday': weekIndex = 2; break;
        default: console.log('Error!'); return;
    }

    if(age >= 0 && age <= 18){
        ageIndex = 0;
    }
    else if(age > 18 && age <= 64){
        ageIndex = 1;
    }
    else if(age > 64 && age <= 122){
        ageIndex = 2;
    }
    else{
        console.log('Error!'); 
        return;
    }

    console.log(`${priceBoard[weekIndex][ageIndex]}$`)
}
let day = 'Holiday';
let age = 5;

calcPrice(day,age)