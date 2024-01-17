

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
    $('.ongoing__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        // autoplay: true,
        autoplaySpeed: 2000,
        // Infinity: true,
    });
});
