"use strict"

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}