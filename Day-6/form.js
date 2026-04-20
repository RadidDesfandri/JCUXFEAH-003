const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("inputName").value;
  const role = document.getElementById("inputRole").value;

  // Buat validasi ketika belum input tapi click button submit
  if (name === "" || role === "") {
    alert("Required field");
    return;
  }

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayRole").textContent = role;

  const card = document.getElementById("profileCard");
  card.style.display = "block";

  console.log("Success!");
});
