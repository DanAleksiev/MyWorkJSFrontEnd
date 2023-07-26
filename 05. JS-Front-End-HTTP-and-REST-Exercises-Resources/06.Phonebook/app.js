function attachEvents() {
    const phoneBook = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    loadBtn.addEventListener('click', onLoadEvent);
    createBtn.addEventListener('click', onCreateEvent);

    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

    function onCreateEvent(){
        
        let person = personInput.value;
        let phone = phoneInput.value;

        let httpHeader = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }

        fetch(BASE_URL, httpHeader)
        .then((res)=> res.json())
        .then(()=> {
            personInput.value = '';
            phoneInput.value = '';
            onLoadEvent();
        }).catch((err)=> console.log(err));
    }

    function onLoadEvent(){
        phoneBook.innerHTML = '';

        fetch(BASE_URL)
        .then((res)=> res.json())
        .then((data)=> {
            
            for (const {person, phone, _id} of data) {
                const li = document.createElement('li');
                const button = document.createElement('button');

                button.textContent = 'Delete';
                button.id = _id;
                button.addEventListener('click', onDeleteEvent);

                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(button);
                phoneBook.appendChild(li);
            }
        }).catch((err)=> console.log(err));

    }

    function onDeleteEvent(){
        let httpHeader = {
            method: 'DELETE'
        }
        
        fetch(BASE_URL + this.id, httpHeader)
        .then(()=> onLoadEvent())
        .catch((err)=> console.log(err));
    }
}

attachEvents();