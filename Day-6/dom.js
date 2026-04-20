const title = document.getElementById("mainTitle");
const button = document.getElementById("btn");

function updateText() {
  title.textContent = "Text updated!";

  button.textContent = "I was clicked!";

  title.style.color = "red";
}

button.addEventListener("click", updateText);

// title.style.color = "red";
// console.log(title);

// Sama dengan css
const desc = document.querySelector(".description");
// #searchInput {}
const searchInput = document.querySelector("#searchInput");
console.log(desc);

// const allButtons = document.querySelectorAll(".btn");

const box = document.getElementById("box");
console.log(box);
