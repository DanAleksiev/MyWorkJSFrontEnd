function solve(speed, zone){
    let currentLimit = 0;
    
    if(zone === `motorway`){
        currentLimit = 130;
    }
    else if(zone === `interstate`){
        currentLimit = 90;
    }
    else if(zone === `city`){
        currentLimit = 50;
    }
    else if(zone === `residential`){
        currentLimit = 20;
    }
    
    let status = "";
    if(speed<= currentLimit){
        console.log(`Driving ${speed} km/h in a ${currentLimit} zone`);
    }
    else{
        let difference = speed - currentLimit;
        if (difference <= 20 ){
            status = `speeding`;
        }
        else if (difference <= 40 ){
            status = `excessive speeding`;
        }
        else{
            status = `reckless driving`;
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currentLimit} - ${status}`);
    }

}


solve(200, 'motorway' )