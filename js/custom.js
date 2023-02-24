"use strict"

AOS.init(); //Inicia la libreria AOS

function responsive() {
    let nav = document.getElementById("nav");
    if(nav.className === "header"){
        nav.className += " responsive";
    }else{
        nav.className = "header";
    }
}

$(document).ready(function () {
    $(".toggle").click(function () {
        $("#info-ubi").toggle();
    });
});