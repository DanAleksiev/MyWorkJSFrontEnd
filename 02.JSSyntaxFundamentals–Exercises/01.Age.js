function anIAdult(age) {

    let group = "";

    if (age >= 66) {
        group = `elder`;
    }
    else if (age >= 20) {
        group = `adult`;
    }
    else if (age >= 14) {
        group = `teenager`;
    }
    else if (age >= 3) {

        group = `child`;
    }
    else if (age >= 0) {
        group = `baby`;
    }
    else{
        group = `out of bounds`;
    }

    console.log(group)

}

anIAdult(-1)