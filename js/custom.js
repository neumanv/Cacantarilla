"use strict"

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}