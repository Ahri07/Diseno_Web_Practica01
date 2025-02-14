document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeConfig");
    const playBtn = document.getElementById("playButton");
    const volumeSlider = document.getElementById("volume");
    const volumeValue = document.getElementById("volumeValue");


    closeBtn.addEventListener("click", () => {
        window.location.href = "index.html"; 
    });

        playBtn.addEventListener("click", () => {
            window.location.href = "agentes.html"; 
        });

    volumeSlider.addEventListener("input", () => {
        volumeValue.textContent = volumeSlider.value;
    });
});