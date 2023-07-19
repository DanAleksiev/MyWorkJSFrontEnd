function solve() {
  //not mine code source (RiseYourFists)
  const buttons = document.querySelectorAll('button');
  const buttonGenerator = buttons[0];
  const buyButton = buttons[1];

  buttonGenerator.addEventListener('click', generateHandler);
  buyButton.addEventListener('click', buyButtonHandler);
  
  function generateHandler(){
    const board = document.querySelector('tbody');
    const inputElement = document.querySelectorAll('textarea')[0];
    let objects = JSON.parse(inputElement.value);
    
    for (const obj of objects) {
      const row = document.createElement('tr');

      const imgTD = createTD();
      
      const img = document.createElement('img');
      img.setAttribute('src', obj['img']);
      imgTD.appendChild(img);

      const nameTD = createTD();
      const itemName = document.createElement('p');
      itemName.textContent = obj['name'];
      nameTD.appendChild(itemName);

      const priceTD = createTD();
      const priceTag = document.createElement('p');
      priceTag.textContent = obj['price'];
      priceTD.appendChild(priceTag);

      const decFactorTD = createTD();
      const decFactorTag = document.createElement('p');
      decFactorTag.textContent = obj['decFactor'];
      decFactorTD.appendChild(decFactorTag);

      const checkTD = createTD();
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkTD.appendChild(checkBox);

      row.appendChild(imgTD);
      row.appendChild(nameTD);
      row.appendChild(priceTD);
      row.appendChild(decFactorTD);
      row.appendChild(checkTD);

      board.appendChild(row);
    }

    function createTD(){
      return document.createElement('td');
    }
  }

  function buyButtonHandler(){
    const resultArea = document.querySelectorAll('textarea')[1];
    let items = [];
    let sum = 0;
    let factor = 0;
    
    const rows = document.querySelectorAll('tbody > tr');
    for (const row of rows) {
      let checkBoxTD = row.children[4];
      let checkBox = checkBoxTD.children[0];
      if(checkBox.checked){
        let name = row.children[1].children[0].textContent;
        let price = Number(row.children[2].children[0].textContent);
        let decFactor = Number(row.children[3].children[0].textContent);

        items.push(name);
        sum += price;
        factor += decFactor;
      }
    }

    factor /= items.length;
    let result = `Bought furniture: ${items.join(', ')}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${factor}`;
    resultArea.value = result;
  }
}