function solve(a,b){
    let startValue = 0;
    let endValue = 0;
    if(a.charCodeAt() > b.charCodeAt()){
        startValue = b.charCodeAt();
        endValue = a.charCodeAt();
    }
    else{
        startValue = a.charCodeAt();
        endValue = b.charCodeAt();
    }
    
    let arr = [];

    for (let i = startValue + 1; i < endValue; i++) {
        arr.push(String.fromCharCode(i))
    }

    console.log(arr.join(" "));
}

solve('a','d')
solve('#',':')