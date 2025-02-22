const menu = document.querySelector(".menu-icon");
const menu_header = document.querySelector(".header");
const toggleMenu = () => {
    menu_header.classList.toggle("active");
   
};

menu.addEventListener('click', () => toggleMenu());


