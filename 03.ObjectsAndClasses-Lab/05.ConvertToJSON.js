function salve(firstName,lastName,hairColor){
    const obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    const convertedText = JSON.stringify(obj);
    console.log(convertedText);
}

salve('George', 'Jones',
'Brown');