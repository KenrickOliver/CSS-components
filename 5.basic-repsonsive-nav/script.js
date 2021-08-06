const toggle = document.querySelector(".toggle__button");
const navLinks = document.querySelector(".navbar__links");
const toggleIcon = document.querySelector(".toggle__icon");

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    toggleIcon.classList.toggle('bx-menu')
    toggleIcon.classList.toggle('bx-x')
})