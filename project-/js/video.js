const video = document.getElementById("promoVideo");
const controlButton = document.getElementById("videoControl");
const playIcon = '<i class="fas fa-play play-icon"></i>';
const pauseIcon = '<i class="fas fa-pause pause-icon"></i>';

controlButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        controlButton.innerHTML = pauseIcon;
    } else {
        video.pause();
        controlButton.innerHTML = playIcon;
    }
});

video.addEventListener("ended", () => {
    controlButton.innerHTML = playIcon;
});