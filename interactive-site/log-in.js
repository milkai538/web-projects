

const name = document.getElementById('name');

const email = document.getElementById('email');

const password = document.getElementById('password');

const form = document.getElementById('form');



form.addEventListener('submit', (e)=> 
{

    if(name.value === '' || name.value == null)

    {
        e.preventDefault();
    }

})

form.addEventListener('submit', (e)=> 
{

    if(email.value === '' || email.value == null)

    {
        e.preventDefault();
    }

})

form.addEventListener('submit', (e)=> 
{

    if(password.value === '' || password.value == null)

    {
        e.preventDefault();
    }

})