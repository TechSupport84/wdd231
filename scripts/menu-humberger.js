const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    menuBtn.innerHTML = navMenu.classList.contains("show") ? "&times;" : "&#9776;";
});
