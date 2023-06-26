function solve(numPeople, type, dayOfTheWeek){

    let prycingMatrix = [
        [8.45 , 9.80 , 10.46], // students
        [10.90 , 15.60 , 16],// business
        [15 , 20 , 22.50]    // regular
    ]
    
    let typeIndex = 0;
    let dayIndex = 0
    
    switch(type){
        case "Students": typeIndex = 0;break;
        case "Business": typeIndex = 1;break;
        case "Regular": typeIndex = 2;break;
        default :
    }

    switch(dayOfTheWeek){
        case "Friday": dayIndex = 0;break;
        case "Saturday": dayIndex = 1;break;
        case "Sunday": dayIndex = 2;break;
    }

    let pricePerTicket =  prycingMatrix[typeIndex][dayIndex]
    let totalPrice = pricePerTicket * numPeople
    

    if (type === "Students" && numPeople >= 30){
        totalPrice = totalPrice - totalPrice * 0.15;
    }

    if (type === "Business" && numPeople >= 100){
        totalPrice = totalPrice - pricePerTicket * 10;
    }

    if (type === "Regular" && numPeople >= 10 && numPeople <= 20){
        totalPrice = totalPrice - pricePerTicket * 0.05;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

// solve(30,"Students","Sunday")
solve(40,"Regular","Saturday")