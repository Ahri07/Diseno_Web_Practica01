document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeHUD");
    const volverBtn = document.getElementById("playHUD");

    const sensitivitySlider = document.getElementById("sensitivity");
    const sensitivityValue = document.getElementById("sensitivityValue");

    const mapRotateSlider = document.getElementById("mapRotate");
    const mapRotateValue = document.getElementById("mapRotateValue");

    const minimapSizeSlider = document.getElementById("minimapSize");
    const minimapSizeValue = document.getElementById("minimapSizeValue");

    // Cerrar la ventana de HUD y volver a la pantalla principal
    closeBtn.addEventListener("click", () => {
        window.location.href = "mapas.html";
    });

    // Ir a la siguiente sección con el botón de Play
    volverBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Mostrar valores en tiempo real
    sensitivitySlider.addEventListener("input", () => {
        sensitivityValue.textContent = sensitivitySlider.value;
    });

    mapRotateSlider.addEventListener("input", () => {
        mapRotateValue.textContent = mapRotateSlider.value;
    });

    minimapSizeSlider.addEventListener("input", () => {
        minimapSizeValue.textContent = minimapSizeSlider.value;
    });
});