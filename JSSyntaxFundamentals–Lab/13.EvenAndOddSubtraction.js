function reverseArr(...arr){
    // doest work if you dont define the tipe of the var      
    let odd = 0;
    let even = 0;
    for (let index = 0; index < arr.length; index++) {
        let currentNum = arr[index]; 
        
        if (currentNum  % 2 === 0) {
                even += currentNum;
            }
        
        else{
                odd += currentNum;
            }
    }

    const result = even-odd;

    // const enen = arr.filter((num) => num%2=== 0);
    // const odd = arr.filter((num) => num%2=== 1);
    // let result = enen.reduce((a, b) => a + b, 0) - odd.reduce((a, b) => a + b, 0);

    console.log(result);
}


reverseArr(2,4,6,8,10)