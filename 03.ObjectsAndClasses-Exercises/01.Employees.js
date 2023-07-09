function salve(input){
    const obj = {};
    for (let i = 0; i < input.length; i++) {
        const currentEmployee = input[i];
        const employeeNum = currentEmployee.length;
        obj[input[i]] = employeeNum;
    }

    Object.keys(obj).forEach(element => {
        console.log(`Name: ${element} -- Personal Number: ${obj[element]}`);
    });
}

salve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])