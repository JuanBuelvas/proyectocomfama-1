//1. Traer la etiqueta que se quiere controlar
let menu = document.getElementById('menu');

//Detectar el scroll o movimiento en la ventana
window.addEventListener("scroll", function(){
    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop <= 50) {
        //Menu Transparente
        menu.classList.add("menu");
        menu.classList.remove("menu2");

    } else {
        //Menu De Color
        menu.classList.add("menu2");
        menu.classList.remove("menu");
    }


});






