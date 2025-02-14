document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeConfig");
    const playBtn = document.getElementById("playButton");
    const volumeSlider = document.getElementById("volume");
    const volumeValue = document.getElementById("volumeValue");

    // Cerrar la ventana de configuración
    closeBtn.addEventListener("click", () => {
        window.location.href = "index.html"; // Simula volver a la pantalla principal
    });

        // Cerrar la ventana de configuración
        playBtn.addEventListener("click", () => {
            window.location.href = "hud.html"; // Simula volver a la pantalla principal
        });

    // Mostrar valor del volumen en tiempo real
    volumeSlider.addEventListener("input", () => {
        volumeValue.textContent = volumeSlider.value;
    });
});