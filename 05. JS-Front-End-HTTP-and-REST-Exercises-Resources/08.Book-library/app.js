function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const authorInput = document.querySelector('#form > input[name="author"]');
  const titleInput = document.querySelector('#form > input[name="title"]');
  const formTitle = document.querySelector('#form > h3');
  const display = document.querySelector('table > tbody');

  const submitBtn = document.querySelector('#form > button');
  const loadBtn = document.getElementById('loadBooks');
  submitBtn.addEventListener('click', submitHandler);
  loadBtn.addEventListener('click', loadHandler);

  let editId = null;
  loadHandler();
  
  function loadHandler(){
    display.innerHTML = '';

    fetch(BASE_URL)
    .then((res)=> res.json())
    .then((data)=>{
      for (const key in data) {
        let {author, title} = data[key];

        const row = document.createElement('tr');
        const titleDef = document.createElement('td');
        const authorDef = document.createElement('td');
        const btnWrapper = document.createElement('td');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');

        titleDef.textContent = title;
        authorDef.textContent = author;
        editBtn.textContent = 'Edit';
        delBtn.textContent = 'Delete';

        /*--------------EDIT-----------------*/
        editBtn.addEventListener('click', ()=>{
          submitBtn.textContent = 'Save';
          formTitle.textContent = 'Edit Form';
          authorInput.value = author;
          titleInput.value = title;
          editId = key;
        });
        /*-------------END EDIT---------------*/

        /*-------------DELETE-----------------*/
        delBtn.addEventListener('click', ()=>{
          const httpHeader = {
            method: 'DELETE'
          }

          fetch(BASE_URL + key, httpHeader)
          .then((res)=> res.json)
          .then(()=> loadHandler())
          .catch((err)=> console.log(err));
        })
        /*------------END DELETE---------------*/

        btnWrapper.appendChild(editBtn);
        btnWrapper.appendChild(delBtn);
        row.appendChild(titleDef);
        row.appendChild(authorDef);
        row.appendChild(btnWrapper);
        display.appendChild(row);
      }
    })
    .catch((err)=> console.log(err))
  }

  function submitHandler(){
    let editMode = submitBtn.textContent === 'Save';
    let author = authorInput.value;
    let title = titleInput.value;

    for (const value of [author, title]) {
      if(!isValid(value)){
        console.log('Error!');
        return;
      }
    }

    let httpHeader = {
      method: (editMode)? 'PUT':'POST',
      body: JSON.stringify({author, title})
    }

    let operationLink = (editMode)
    ? BASE_URL + editId
    : BASE_URL;

    fetch(operationLink, httpHeader)
    .then((res)=> res.json())
    .then(()=>{
      if(editMode){
        submitBtn.textContent = 'Submit';
        formTitle.textContent = 'Form';
        editId = null;
      }

      authorInput.value = '';
      titleInput.value = '';
      loadHandler();
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