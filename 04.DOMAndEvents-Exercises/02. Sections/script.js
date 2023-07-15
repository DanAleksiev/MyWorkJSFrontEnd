function create(words) {
   function click(p) {
         const currP = p.currentTarget.querySelector("p")
         currP.style.display = "block";
      
   }
   
   words.forEach(element => {
      const div = document.createElement("div");  
      const paragraph = document.createElement("p")

      paragraph.textContent = element;
      paragraph.style.display = "none"
      
      div.appendChild(paragraph);
      div.addEventListener("click", click)

      const currentElement = document.getElementById("content").appendChild(div)

   });
}