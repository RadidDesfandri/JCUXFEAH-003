// console.log("Selamat datang");

// alert("Selamat datang di Javascript");

// Variable
let isLoggedin = true; // Type data(Boolean) -> true atau false.
const userName = isLoggedin ? "Andi" : "Guest"; // String
const userAge = isLoggedin ? 20 : 0; // Number

console.log(`Username: [${userName}], Age: [${userAge}]`);

// "", '', `` -> Jenis string

let score = 0;

let hobbies = ["Coding", "Reading", 34, false];

function greetUser(name) {
  console.log(`Hello ${name}, welcome!`);
}

greetUser("Budi");
greetUser("Caca");

function addNumber(numA, numB) {
  return numA + numB;
}

let numA = 20;
let numB = 60;
let result = addNumber(numA, numB);

// const multiply = () => "Something!";

// ${} -> Disebut dollar curly
console.log(`Hasil dari ${numA} + ${numB} adalah: ${result}`);
// console.log("Hasil dari " + numA + " + " + numB + " adalah: " + result);

let userScore = 75;
if (userScore >= 80) {
  console.log("Great job!, your score: " + userScore);
} else if (userScore >= 60) {
  console.log("Good work!, your score: " + userScore);
} else {
  console.log("Keep practicing");
}

let isDarkMode = false;

const toggleDarkMode = () => {
  if (isDarkMode === false) {
    isDarkMode = true;
    console.log("Dark mode ON");
  } else {
    isDarkMode = false;
    console.log("Dark mode OFF");
  }
};

toggleDarkMode();
toggleDarkMode();
