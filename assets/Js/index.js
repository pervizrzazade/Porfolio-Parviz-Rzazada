const toogleMenu = document.querySelector(".toogle-menu")
const navLinks = document.querySelector(".links")
toogleMenu.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
})
window.onscroll = () => {
    navLinks.classList.remove("mobile-menu");
};
