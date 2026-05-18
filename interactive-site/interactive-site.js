form.addEventListener('submit', (e)=> 
{

    if(numbero.value == '' || numbero.value == null)
    {e.preventDefault();
    numberoError.innerHTML = "A number is required.";}  
        else
    {numberoError.innerHTML = "";}


    if(numbero.value == '1')
{numberonumber.innerHTML = "level 1 TG";}
    else
{numberonumber.innerHTML = "";}



if(numbero.value == '2')
{numberonumber.innerHTML = "level 2 TG";}
    else
{numberonumber.innerHTML = "";}


if(numbero.value == '3')
{numberonumber.innerHTML = "level 3 TG";}
else
{numberonumber.innerHTML = "";}


if(numbero.value == '4')
{numberonumber.innerHTML = "level 4 TG";}
else
{numberonumber.innerHTML = "";}


})