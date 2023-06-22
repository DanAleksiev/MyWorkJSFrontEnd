function calcPrice(dayOfTheWeek,age) {
let result;
if (age <1 || age >122) {
    console.log("Error!");
    return;
}

if(age <= 18){
    switch(dayOfTheWeek){
        case 'Weekday':result= '12$' ;break;
        case 'Weekend':result= '15$' ;break;
        case 'Holiday':result= '5$' ;break;
    }
}
else if(age <= 64){
    switch(dayOfTheWeek){
        case 'Weekday':result= '18$' ;break;
        case 'Weekend':result= '20$' ;break;
        case 'Holiday':result= '12$' ;break;
    }
}
else if(age <= 122){
    switch(dayOfTheWeek){
        case 'Weekday':result= '12$' ;break;
        case 'Weekend':result= '15$' ;break;
        case 'Holiday':result= '10$' ;break;
    }
}
   console.log(result); 
}

let day = 'Holiday';
let age = 5;

calcPrice(day,age)