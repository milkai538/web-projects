

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const form = document.getElementById('form');



form.addEventListener('submit', (e)=> 
{

    var emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(name.value == '' || name.value == null)

    {
        e.preventDefault();
        nameError.innerHTML = "Name is required.";
    }

    else
    {
        nameError.innerHTML = "";
    }

        if(!email.value.match(emailCheck))
    {
        emailError.innerHTML = "Use a valid email.";
    }

        else
    {
        emailError.innerHTML = "";
    }

    if(password.value.length <=5 )

    {
        e.preventDefault();
        passwordError.innerHTML = "Password must be longer than 5 digits.";
    }

    else
    {
        passwordError.innerHTML = "";
    }

    if(password.value.length >25 )

    {
        e.preventDefault();
        passwordError.innerHTML = "Password can be 25 digits at most.";
    }

    else
    {
        passwordError.innerHTML = "";
    }

    if(password.value === 'password')

    {
        e.preventDefault();
        passwordError.innerHTML = "dont even joke lad";
    }

    else
    {
        passwordError.innerHTML = "";
    }

})

