let slide = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;
let isImageZoomed = false;

showSlide(slideIndex);
setupImageInteraction();
setupKeyboardNavigation();

function changeSlide(n) {
    isImageZoomed = false;
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    isImageZoomed = false;
    showSlide(slideIndex = n);
}

function showSlide(n) {
    if (n > slide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slide.length;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slide[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

function setupImageInteraction() {
    let images = document.querySelectorAll(".slide-image");
    images.forEach(img => {
        img.addEventListener("click", function(e) {
            e.stopPropagation();
            if (this.style.maxHeight === "100%") {
                this.style.maxHeight = "60%";
                isImageZoomed = false;
            } else {
                this.style.maxHeight = "100%";
                isImageZoomed = true;
            }
        });
    });
}

function setupKeyboardNavigation() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            changeSlide(-1);
        } else if (event.key === "ArrowRight") {
            changeSlide(1);
        }
    });
}

