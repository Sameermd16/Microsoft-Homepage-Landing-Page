const goTopBtn = document.querySelector('.go_top_btn');
const menuBtn = document.querySelector('.menu_btn');
const mainMenu = document.querySelector('.main_menu');

menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
})


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }
})