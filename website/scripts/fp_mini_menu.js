"use-strict"
// Get the hamburger icon and mini menu

// prettier-ignore
const navbarToggle = document.querySelector(".navbar-toggle");
// prettier-ignore

const navbarMenu = document.querySelector(".navbar-menu");
// prettier-ignore

const miniMenu = document.querySelector(".mini-menu-options");
// prettier-ignore

navbarToggle.addEventListener("click", () => {
navbarToggle.classList.toggle("active");
navbarMenu.classList.toggle("active");
miniMenu.classList.toggle("active");
});
