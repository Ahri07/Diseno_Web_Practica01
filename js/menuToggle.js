let menu = document.querySelector("nav .menu");
let btnOpenMenu = document.querySelector("#btnOpenMenu");
let btnCloseMenu = document.querySelector("#btnCloseMenu");


btnOpenMenu.addEventListener("click", function() {
    menu.classList.add("show-menu");
});


btnCloseMenu.addEventListener("click", function() {
    menu.classList.remove("show-menu");
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enterB").addEventListener("click", function() {
        window.location.href = "configuracion.html"; 
    });
});