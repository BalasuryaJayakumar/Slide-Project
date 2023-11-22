const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener("click", () => {
    counter--;
    slideChange();
});

nextBtn.addEventListener("click", () => {
    counter++;
    slideChange();
});

const slideChangeLoop = () => {

    if (counter === slides.length) {
        counter = 0;
    }

    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const slideChange = () => {

    if (counter === slides.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block"
    }

    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}% )`;
    });
}

prevBtn.style.display = "none";