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

    // Lancer la vidéo
    const videoContainer = document.getElementById("videoContainer");
    const ytVideo = document.getElementById("ytVideo");
    ytVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    videoContainer.classList.remove("hidden");
  });
});
