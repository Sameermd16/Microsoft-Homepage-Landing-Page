const goTopBtn = document.querySelector('.go_top_btn');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }
})