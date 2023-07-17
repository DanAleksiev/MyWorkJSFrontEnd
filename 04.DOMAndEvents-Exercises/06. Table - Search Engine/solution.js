function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const data = Array.from(document.querySelectorAll("tbody tr"))
      const target = document.querySelector("#searchField")

      const activeRows = Array.from(document.querySelectorAll("tbody tr.select"));

      activeRows.forEach((row) => {
        row.classList.remove("select");
      });
      // data
      // .filter((d) => d.textContent.includes(target.value))
      // .forEach((d) => {
      //    d.classList.add("select");
      // });

      data.forEach((d)=>{
         if (d.textContent.includes(target.value)) {
            d.classList.add("select")
         }
      })
      target.value = ""
   }
}