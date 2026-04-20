let count = 0;
const likeButton = document.getElementById("btnLike");
const likeCount = document.getElementById("likeCount");

likeButton.addEventListener("click", () => {
  count++;
  likeCount.textContent = count + " likes";
});

const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

nameInput.addEventListener("input", () => {
  const typedValue = nameInput.value;

  if (typedValue === "") {
    nameDisplay.textContent = "Render name here!";
  } else {
    nameDisplay.textContent = "Hello " + typedValue + "!";
  }
});
