function reverseArr(num, arr){
    let result =[];
    for (let index = 0; index < num; index++) {
        result.push(arr[index]);
        
    }

    let output = "";
    for (let revers = result.length-1 ; revers >= 0; revers--) {
        output += `${result[revers]} `;
        
    }
    console.log(output);
}


reverseArr(3,[10,20,30,40,50])