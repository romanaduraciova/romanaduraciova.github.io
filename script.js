// Autor: Romana Ďuráčiová | xdurac01
// Projekt: ITW Projekt č. 2

const mobileLines = document.querySelector(".mobile_lines");
const navList = document.querySelector(".nav_list");
const navItem = document.querySelectorAll(".nav_item");

// Show menu when clicking
mobileLines.addEventListener("click", showMenu);
// Hide menu after clicking on one of the sections
navItem.forEach(item => item.addEventListener("click", hideMenu));

// Hide menu when scrolling
window.addEventListener("scroll", hideMenu);

// Function for showing menu
function showMenu() {
    mobileLines.classList.toggle("active");
    navList.classList.toggle("active");
}

// Function for hiding menu
function hideMenu() {
    mobileLines.classList.remove("active");
    navList.classList.remove("active");
}