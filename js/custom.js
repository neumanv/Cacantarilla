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