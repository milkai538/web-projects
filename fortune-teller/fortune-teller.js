// Aidan "Ferris" Milk's Fortune Teller project. 27th of May, 2026.

const jobs = ['dado`s coworker', 'a star in the upcoming SCP movie', 'Site 42`s Director']

const salaries = ['1 gazillion quadrillion as thx from fine parapharmacist dadorspgr sry hamstr', 'crinkled up 2 dolla', 'annihilation by SCP-729-j.']


let randIndex = () => Math.floor(Math.random() * salaries.length);


document.querySelector('.roll-button').onclick = function() {
    const user = "Sherm The Worm";
    const randomJob = jobs[randIndex()];
    const randomSalary = salaries[randIndex()];

const userFortune = `In just a couple years, ${user}, you will be working as ${randomJob} and end your career with ${randomSalary}    congratulations!`

document.querySelector('.prediction-text').textContent = 
    userFortune;
}
