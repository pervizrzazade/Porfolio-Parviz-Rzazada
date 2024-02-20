const toogleMenu = document.querySelector(".toogle-menu")
const navLinks = document.querySelector(".links")
toogleMenu.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
})
window.onscroll = () => {
    navLinks.classList.remove("mobile-menu");
};

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        scrollTop.classList.add("active"); 
     }else{
        scrollTop.classList.remove("active");
     }
})