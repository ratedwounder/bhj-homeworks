const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let slides = document.querySelectorAll(".slider__item"); 
let slideIndex = 1;

showSlides(slideIndex);

next.onclick = function() {
    showSlides(slideIndex += 1);
}

prev.onclick = function () {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { 
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = "slider__item";
    }
    slides[slideIndex - 1].className += " slider__item_active";
}