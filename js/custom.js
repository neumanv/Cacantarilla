"use strict"

AOS.init(); //Inicia la libreria AOS

//Responsive navbar
function responsive() {
    let nav = document.getElementById("nav");
    if (nav.className === "header") {
        nav.className += " responsive";
    } else {
        nav.className = "header";
    }
}

//Desplegable de información
$(document).ready(function () {
    $(".toggle").click(function () {
        $("#info-ubi").toggle();
    });
});

//Hover de cartas
$(document).ready(function () {
    $(".carta").hover(function () {
        $(this).css("background-color", "#c5c6c6");
    }, function(){
        $(".carta").css("background-color", "var(--principal)");
    });
});

//Formulario
document.getElementById("form").addEventListener("submit", function(event) {

    let mail = document.getElementById("mail");
    
    if(!validarEmail(mail.value)){
        return alert("No se ha enviado el formulario porque el email es incorrecto")
    }else{
        return alert("Gracias, lo leeremos lo antes posible " + mail.value);
    }
});    

function validarEmail(mail){

    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   //pattern del correo electrónico
    return email.test(mail);
}