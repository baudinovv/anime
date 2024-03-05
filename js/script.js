

// Modal window 1

document.getElementById("login").addEventListener("click", function() {
    document.getElementById("modal-window").classList.add("open")
})
document.getElementById("modal-window__close").addEventListener("click", function() {
    document.getElementById("modal-window").classList.remove("open")
})

// Modal window 2

document.getElementById("rgstr").addEventListener("click", function() {
    document.getElementById("modal-window-reg").classList.add("open")
})
document.getElementById("modal-window__close-reg").addEventListener("click", function() {
    document.getElementById("modal-window-reg").classList.remove("open")
})
// login --> reg
document.getElementById("login>reg").addEventListener("click", function() {
    document.getElementById("modal-window-reg").classList.add("open")
    document.getElementById("modal-window").classList.remove("open")
})
// reg --> login
document.getElementById("reg>login").addEventListener("click", function() {
    document.getElementById("modal-window-reg").classList.remove("open")
    document.getElementById("modal-window").classList.add("open")
})
// slider

$(document).ready(function(){
    $('.header-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });
});

setInterval(timer, 1000);
// timer
let time = 86400 * 2;

let htmlDays = document.getElementById("days");
let htmlHours = document.getElementById("hours");
let htmlMin = document.getElementById("minutes");
let htmlSec = document.getElementById("sec");


function timer() {
    let days = Math.floor(time / 86400);
    let hours = Math.floor(time / 3600) % 24;
    let minutes = Math.floor(time / 60) % 60 ;
    let seconds = time % 60;
    htmlDays.innerHTML = `${days}`;
    htmlHours.innerHTML = `${hours}`;
    htmlMin.innerHTML = `${minutes}`;
    htmlSec.innerHTML = `${seconds}`;
    time--;
}