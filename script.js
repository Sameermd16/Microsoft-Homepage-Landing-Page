const goTopBtn = document.querySelector('.go_top_btn');
const menuBtn = document.querySelector('.menu_btn');
const mainMenu = document.querySelector('.main_menu');
const menuClose = document.querySelector('.menu_close');

menuBtn.addEventListener('click', () => {
    mainMenu.classList.add('show');
    menuBtn.style.display = "none";
    menuClose.style.display = 'block';
})
menuClose.addEventListener('click', () => {
    menuClose.style.display = "none";
    menuBtn.style.display = 'block';
    mainMenu.classList.remove('show');
})


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }
})