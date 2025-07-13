document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  audio.volume = 0;

  document.body.addEventListener("click", () => {
    audio.volume = 1;
    audio.play();
  }, { once: true });
});
