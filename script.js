// Autor: Romana Ďuráčiová | xdurac01
// Projekt: ITW Projekt č. 2

const mobileLines = document.querySelector(".mobile_lines");
const navList = document.querySelector(".nav_list");
const navItem = document.querySelectorAll(".nav_item");

mobileLines.addEventListener("click", showMenu);
navItem.forEach(item => item.addEventListener("click", hideMenu));
window.addEventListener("scroll", hideMenu);

function showMenu() {
    mobileLines.classList.toggle("active");
    navList.classList.toggle("active");
}

function hideMenu() {
    mobileLines.classList.remove("active");
    navList.classList.remove("active");
}