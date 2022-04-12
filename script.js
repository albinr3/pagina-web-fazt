document.querySelector(".menu-btn").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.querySelector(".nav-menu").classList.toggle("show"); //classlist se utiliza para agregarle una clase a un elemento
}                                                                 //toggle se utiliza para verificar si ya la tiene puesta la clase quitarle y si no la tiene ponerla

//Esto hara funcionar el scrollReveal
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.card', { delay:  400 });
ScrollReveal().reveal('.cards-banner-one', { delay: 400 });
ScrollReveal().reveal('.cards-banner-two', { delay: 400 });
ScrollReveal().reveal('.social', { delay: 400 });
ScrollReveal().reveal('.footer', { delay: 400 });
ScrollReveal().reveal('.copyright', { delay: 400 });

