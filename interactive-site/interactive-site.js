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
            numberonumber.innerHTML = "Phase 1 - Denial: Let's be honest, not many people will ever even begin to wonder if they can do something as powerful as manipulating reality itself. In this stage people tend to rationalize it, and will hopefully prevent further powers from this point on. Recommendation(s) for Encounter: Just don't bring it up, and you're good, don't worry.";
            break;
        case '2':
            e.preventDefault();
            numberonumber.innerHTML = "Phase 2 - Experimentation: This is often right after the person has discovered their ability (Or, in some cases, what they believe to be their ability) and they will begin testing to see the upper limits of what they can do. Yes, reality benders have limits. Usually the testing will either rise in a small number of jumps, or in a slow and steady method. Either way, this phase will last until the limit(s) at which point they move on to Phase 3. Recommendation(s) for Encounter: Try not making them too mad; don't want to be poofed away.";
            break;
        case '3':
            e.preventDefault();
            numberonumber.innerHTML = "Phase 3 - Stability: After feeling their limits out, a type green will hopefully stay here until death. This phase is often in tandem with the attempt to live a more normal life. Recommendation(s) for Encounter: Again, do not severely provoke, and the person will hopefully only need to be monitored. However.. It is with great sadness we tell you that most will progress unto phase 4.";
            break;
        case '4':
            e.preventDefault();
            numberonumber.innerHTML = "Phase 4 - The Child-God: 1%. Only 1% of reality benders in phase 4 will ever return to phase 3. Due to the primary missions of the SCP Foundation(To study anomalous entities.), we cannot condone the elimination of a reality bender for any purposes, and can affirm with you that it is entirely possible to save way more than 1/100 by reverting them to phase 3. Phase 4 is noteable for reality benders having megalomaniac desires, decreased empathy, and an inability to accept faults of the self. The only recommendation we can offer is to hide and contact either of our organizations for assistance.";
            break;
        case '5':
            e.preventDefault();
            numberonumber.innerHTML = "That is called a Type Black, or demi-deity. You only have an infitesimal chance to escape whatever situation you managed to get into.";
            break;
        case '0':
            e.preventDefault();
            numberonumber.innerHTML = "Rude to ignore such a simple instruction, but I digress. That is called a Thaumatologist, or a Type Blue (just think wizards and warlocks). These people are much less powerful than reality benders, but still hold the same capabilities, and are often hired by both of our organizations. I mean less powerful as in they need to do spells to make changes to reality, and face a usually negative feedback for doing so. Again, same capabilities, but they have vast expenses to pay first.";
            break;
        default:
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