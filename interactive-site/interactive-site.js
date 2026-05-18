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