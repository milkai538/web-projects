// Question Answers

// 1: The index number of the very first number ought to be 0
// also 1: The benefit of using a negative index number is that negatives start at the end -- allowing you to use a latter number without memorizing its position from 0

// Question Answers part 2: Electric Boogalo

// 2: Captain America was replaced by Black Panther
// once again also 2: It showed the array of heroes rather than ${heroes[1]}

const heroes = ["Super Man" , "Captain America" , "Iron Man" , "The Hulk" , "Spider-Man"];

const backupHero = heroes.at(-1);

console.log(heroes[0]);
console.log(heroes[2]);
console.log(heroes.at(-1))

heroes[1] = "Black Panther";

heroes[3] = "Doctor Strange";

console.log(`The leader of the team is now ${heroes[1]}.`);
console.log(`The full array is: ${heroes}`);

console.log(`The lead superhero is ${heroes[3]}. and my backup superhero is ${backupHero}`);
console.log(`New Mission: ${heroes[0]} and ${heroes[1]} will lead ${heroes[2]} , ${heroes[3]} , and ${heroes[4]} into battle.`)

