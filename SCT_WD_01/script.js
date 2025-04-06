document.addEventListener("DOMContentLoaded", () => {
    const Menu = document.querySelector(".Menu");
    const navLinks = document.querySelector(".nav-links");
  
    Menu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });