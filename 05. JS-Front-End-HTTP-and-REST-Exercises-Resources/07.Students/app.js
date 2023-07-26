function attachEvents() {
  const firstNameInput = document.querySelector('input[name="firstName"]');
  const lastNameInput = document.querySelector('input[name="lastName"]');
  const facultyNumInput = document.querySelector('input[name="facultyNumber"]');
  const gradeInput = document.querySelector('input[name="grade"]');
  const table = document.querySelector('#results > tbody');
  const display = document.querySelector('p.notification');

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', onClickEvent);

  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';
  

  loadTable();
  function onClickEvent(){
    display.textContent = '';

    let data = [
      firstNameInput.value,
      lastNameInput.value,
      facultyNumInput.value,
      gradeInput.value
    ]

    for (const value of data) {
      if(!isValid(value)){
        display.textContent = 'Invalid or no input!';
        return;
      }
    }
    let[firstName, lastName, facultyNumber, grade] = data;

    let httpHeader = {
      method: 'POST',
      body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    }

    fetch(BASE_URL, httpHeader)
    .then((res)=> res.json())
    .then(()=>{
      firstNameInput.value = '';
      lastNameInput.value = '';
      facultyNumInput.value = '';
      gradeInput.value = '';
      loadTable();
    })
    .catch((err)=> console.log(err));

  }

  function loadTable(){
    table.innerHTML = '';

    fetch(BASE_URL)
    .then((res)=> res.json())
    .then((data)=>{
      let keys = Object.keys(data);
      for (const key of keys) {
        const row = document.createElement('tr');
        const firstNameDef = document.createElement('td');
        const lastNameDef = document.createElement('td');
        const facultyNumberDef = document.createElement('td');
        const gradeDef = document.createElement('td');
        
        firstNameDef.textContent = data[key].firstName;
        lastNameDef.textContent = data[key].lastName;
        facultyNumberDef.textContent = data[key].facultyNumber;
        gradeDef.textContent = data[key].grade;

        row.appendChild(firstNameDef);
        row.appendChild(lastNameDef);
        row.appendChild(facultyNumberDef);
        row.appendChild(gradeDef);

        table.appendChild(row);
        console.log('loaded')
      }
    })
    .catch((err)=> console.log(err));
  }
  
  function isValid(input){
    if(  input === null
      || input === undefined
      || input === ' '
      || input === ''){
        return false;
    }

    return true;
  }
}

attachEvents();