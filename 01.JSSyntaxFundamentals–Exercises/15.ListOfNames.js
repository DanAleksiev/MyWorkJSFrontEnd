function solve(names){
    names.sort(function (a, b) {
        return a.localeCompare(b, undefined, { sensitivity: "base" });
      });
for (let i = 0; i < names.length; i++) {
    console.log(`${i+1}.${names[i]}`)
}
}

solve(["John", "Bob", "Christina", "Ema"]);
