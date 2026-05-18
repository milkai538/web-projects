// UPDATED CODE
const numbero = document.getElementById('numbero');
const numberoerror = document.getElementById('numberoerror');
const numberonumber = document.getElementById('numberonumber');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    // Clear previous outputs at the very start
    numberoerror.innerHTML = "";
    numberonumber.innerHTML = "";

    const val = numbero.value;

    // 1. Validation Checks
    if (val === '' || val === null) {
        e.preventDefault();
        numberoerror.innerHTML = "A number is required.";
        return; // Stop running the rest of the function
    } 
    
    if (val.length >= 2) {
        e.preventDefault();
        numberoerror.innerHTML = "One, single digit number at a time.";
        return; // Stop running the rest of the function
    }

    // 2. Value Mapping (Using switch for cleaner single-digit checks)
    switch (val) {
        case '1':
            e.preventDefault();
            numberonumber.innerHTML = "level 1 TG";
            break;
        case '2':
            e.preventDefault();
            numberonumber.innerHTML = "level 2 TG";
            break;
        case '3':
            e.preventDefault();
            numberonumber.innerHTML = "level 3 TG";
            break;
        case '4':
            e.preventDefault();
            numberonumber.innerHTML = "level 4 TG";
            break;
        default:
            // Optional: Handle numbers 0, 5, 6, 7, 8, 9 if submitted
            break;
    }
});



// Old code

/*
const numbero = document.getElementById('numbero');
const numberoerror = document.getElementById('numberoerror');
const numberonumber = document.getElementById('numberonumber');

const form = document.getElementById('form');

form.addEventListener('submit', (e)=> 
{

    if(numbero.value == '' || numbero.value == null)
    {e.preventDefault();
    numberoerror.innerHTML = "A number is required.";}  
        else
    {numberoerror.innerHTML = "";}

    if(numbero.value.length >= 2 )
    {e.preventDefault();
    numberoerror.innerHTML = "One, single digit number at a time.";}  
        else
    {numberoerror.innerHTML = "";}


    if(numbero.value === '1')
{e.preventDefault();
    numberonumber.innerHTML = "level 1 TG";}
    else
{numberonumber.innerHTML = "";}



if(numbero.value === '2')
{e.preventDefault();
    numberonumber.innerHTML = "level 2 TG";}
    else
{numberonumber.innerHTML = "";}


if(numbero.value === '3')
{e.preventDefault();
    numberonumber.innerHTML = "level 3 TG";}
else
{numberonumber.innerHTML = "";}


if(numbero.value === '4')
{e.preventDefault();
    numberonumber.innerHTML = "level 4 TG";}
else
{numberonumber.innerHTML = "";}


})

*/