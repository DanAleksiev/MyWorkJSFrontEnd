function solve(password){
    let passLength = true;
    if(password.length < 6 || password.length >10){
        passLength = false;
        console.log(`Password must be between 6 and 10 characters`);
    }

    let onlyLettersAndDigits = true;
    let enoughDigits = true;
    let moreThenTwoDigits = 0;
    for (let i = 0; i < password.length; i++) {
        const currentLetter = password[i].charCodeAt();

        if (currentLetter >= 65 && currentLetter <=90 || currentLetter >= 97 && currentLetter <= 122 ||currentLetter >=48 && currentLetter <= 57){
            if(currentLetter >=48 && currentLetter <= 57){
                moreThenTwoDigits ++;
            }
        }
        else{
            onlyLettersAndDigits = false;
            console.log(`Password must consist only of letters and digits`);
            break;
        }
        
    }
    if (moreThenTwoDigits < 2){
        enoughDigits = false;
        console.log(`Password must have at least 2 digits`);
    }

    if (passLength === true && enoughDigits === true && onlyLettersAndDigits === true) {
        console.log("Password is valid");
    }

console.log(``);
}

solve('logIn')
// solve('MyPass123')
// solve('Pa$s$s')