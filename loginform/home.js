const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');

const usersList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Tero nam lekh ani email pani lekh..';
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));

        usersList.appendChild(li);

        name.value = "";
        email.value = "";

    }
}