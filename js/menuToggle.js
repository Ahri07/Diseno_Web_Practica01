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