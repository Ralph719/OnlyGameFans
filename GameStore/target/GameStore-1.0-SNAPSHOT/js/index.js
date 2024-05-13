 /* ---- Slider infinito del header ---- */

let slideIndex = 1;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);


/* ---- CAJAS DE LAS OFERTAS  ---- */

const flipbox = document.querySelectorAll('.flip-box');

flipbox.forEach(flip => {
    flip.addEventListener('click', () => {
        flip.classList.toggle('flipped');
    })
});

