const noButton = document.getElementById("noButton");
const yesForm = document.getElementById("yesForm");
const thankYouMessage = document.getElementById("thankYouMessage");

function dodge() {
  const margin = 8;
  const rect = noButton.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width - margin;
  const maxY = window.innerHeight - rect.height - margin;

  const x = Math.max(margin, Math.floor(Math.random() * (maxX - margin)) + margin);
  const y = Math.max(margin, Math.floor(Math.random() * (maxY - margin)) + margin);

  noButton.style.position = "fixed";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
  noButton.style.margin = "0";
}

// Desktop : le bouton fuit le curseur
noButton.addEventListener("mouseover", dodge);

// Mobile : esquive au toucher, avant que le tap ne devienne un clic
noButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  dodge();
}, { passive: false });

// Sécurité : si malgré tout un clic passe, on esquive au lieu de rien faire
noButton.addEventListener("click", (e) => {
  e.preventDefault();
  dodge();
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
  });
});

// La vidéo démarre au clic (geste utilisateur) => son autorisé sur mobile
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
  const videoContainer = document.getElementById("videoContainer");
  const ytVideo = document.getElementById("ytVideo");
  ytVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&playsinline=1&rel=0";
  videoContainer.classList.remove("hidden");
  playButton.classList.add("hidden");
});
