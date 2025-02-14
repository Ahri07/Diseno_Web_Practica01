let menu = document.querySelector("nav .menu");
let btnOpenMenu = document.querySelector("#btnOpenMenu");
let btnCloseMenu = document.querySelector("#btnCloseMenu");

// Abrir el menú
btnOpenMenu.addEventListener("click", function() {
    menu.classList.add("show-menu");
});

// Cerrar el menú
btnCloseMenu.addEventListener("click", function() {
    menu.classList.remove("show-menu");
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enterB").addEventListener("click", function() {
        window.location.href = "configuracion.html"; // Redirige a pagina.html
    });
});