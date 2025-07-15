const noButton = document.getElementById("noButton");
const yesForm = document.getElementById("yesForm");
const thankYouMessage = document.getElementById("thankYouMessage");

noButton.addEventListener("mouseover", () => {
  const offsetX = Math.floor(Math.random() * 200) - 100;
  const offsetY = Math.floor(Math.random() * 200) - 100;
  noButton.style.position = "relative";
  noButton.style.left = `${offsetX}px`;
  noButton.style.top = `${offsetY}px`;
});

yesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Envoie du formulaire
  fetch(yesForm.action, {
    method: "POST",
    body: new FormData(yesForm),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    yesForm.style.display = "none";
    noButton.style.display = "none";
    thankYouMessage.classList.remove("hidden");
  });
});
