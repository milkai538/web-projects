// Aidan/Ferris King Milk
// 14 APR 2026 my bday yay
// Parameters & Arguments Practice

// OBJECTIVE: To understand the difference between parameters and arguments and to use both with a traditional function

// PART 1
// TODO: Write a JS function that takes two parameters -- firstName and homeSchool
// Function should RETURN a template string similar to this example: My name is Mike and my home school is TC Central.
// Call the function and use two arguments -- one for the firstName, the other for the home school
// Use the alert ( ) method to display your template string in a pop-up window

function introduceStudent(firstName, homeSchool) {

    return `My name is ${firstName}, and my home school is ${homeSchool}.`;
}

const fName = "Mike";
const school = "TC Central";

const message = introduceStudent(fName, school);
alert(message);

// PART 2
// TODO: Write another JS function that takes two parameters -- base and height
// Function should CALCULATE and RETURN a template string like this: My right triangle has a base of 20 ft., a height of 15 ft., and an area of 150 sq. ft.
// Call the function and use two arguments -- one for the length of the base, the other for the triangle's height
// Again, use the alert ( ) method to display your template string in a pop-up window

function calculateTriangleArea(base, height) {
    const area = (base * height) / 2;

return `My right triangle has a base of ${base} ft., a height of ${height} ft., and an area of ${area} sq. ft.`;
}

const base = 20;
const height = 15;
const resultMessage = calculateTriangleArea(base, height);

alert(resultMessage);


// PART 3
// Create a PUBLIC GitHub repo: arguments-parameters-practice
// Upload your updated starter.js script to the repo
// Copy the web address of the repo
// Email repo web address to teacher 
















