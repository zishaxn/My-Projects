const icon = document.querySelector(".hamburger-icon");

icon.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
