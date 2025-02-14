document.addEventListener("DOMContentLoaded", () => {
    const mapCards = document.querySelectorAll(".map-card");
    const popup = document.querySelector(".map-popup");
    const overlay = document.querySelector(".overlay");
    const closePopupButtons = document.querySelectorAll(".close-popup");
    const mapBackground = document.querySelector(".map-background");
    const mapLayout = document.querySelector(".map-layout");

    const closeBtn = document.getElementById("closeMaps");
    const playBtn = document.getElementById("playGame");


    const mapsData = {
        bind: {
            background: "media/Bind-Mapa.webp",
            layout: "media/BindMockup.webp"
        },
        split: {
            background: "media/Split-Mapa.webp",
            layout: "media/SplitMockup.webp"
        },
        ascent: {
            background: "media/Heaven-Mapa.webp",
            layout: "media/HeavenMockup.webp"
        }
    };

    mapCards.forEach(card => {
        card.addEventListener("click", () => {
            const map = card.getAttribute("data-map");
            const data = mapsData[map];

            if (data) {
                mapBackground.src = data.background;
                mapLayout.src = data.layout;

                popup.classList.add("show");
                overlay.classList.add("show");
            }
        });
    });


    closePopupButtons.forEach(button => {
        button.addEventListener("click", () => {
            popup.classList.remove("show");
            overlay.classList.remove("show");
        });
    });


    closeBtn.addEventListener("click", () => {
        window.location.href = "agentes.html";
    });

   
    playBtn.addEventListener("click", () => {
        window.location.href = "hud.html";
    });
});
