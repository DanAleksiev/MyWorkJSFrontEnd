function solve() {
  const text = document.querySelector("#input").value.split(".");
  const output = document.getElementById("output");
  
  text.pop();
  
  while(text.length > 0){
    let p = text
    .splice(0, 3)
    .map((p)=> p.trim());

  const newP = document.createElement('p');
  newP.textContent = p.join('.') + '.';

  output.appendChild(newP);
  }
}