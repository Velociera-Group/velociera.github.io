document.addEventListener("DOMContentLoaded", () => {
    const vellogo = document.getElementById("velologohead");
    const hamburger = document.getElementById("hamlogohead");
    const closeicon = document.getElementById("closehead");
    const navlinks = document.getElementById("navlinks");

    function toggleNav(open) {
        vellogo.style.opacity = open ? "0" : "1";
        hamburger.style.display = open ? "none" : "block";
        closeicon.style.display = open ? "block" : "none";
        navlinks.style.visibility = open ? "visible" : "hidden";
        navlinks.style.opacity = open ? "1" : "0";
        navlinks.style.transform = open ? "translateY(0)" : "translateY(-10px)";
    }

    hamburger.addEventListener("click", () => toggleNav(true));
    closeicon.addEventListener("click", () => toggleNav(false));

    // 🔹 Main Slider
    let slideIndex = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = slides.children.length;

    function moveSlide(step) {
        slideIndex = (slideIndex + step + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(() => moveSlide(1), 3000);

    // 🔹 Secondary Slider
    let slideIndex2 = 0;
    const slides2 = document.querySelector(".slides2");
    const images2 = slides2.children;

    function showSlides2() {
        Array.from(images2).forEach((slide) => (slide.style.opacity = "0"));
        images2[slideIndex2].style.opacity = "1";
        slideIndex2 = (slideIndex2 + 1) % images2.length;
    }

    setInterval(showSlides2, 3000);

    document.querySelectorAll(".slider2 .prev, .slider2 .next").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            moveSlide2(e.target.classList.contains("prev") ? -1 : 1);
        });
    });

    function moveSlide2(n) {
        slideIndex2 = (slideIndex2 + n + images2.length) % images2.length;
        showSlides2();
    }

    // 🔹 Update Year
    document.getElementById("humus").innerHTML = `&copy; ${new Date().getFullYear()} Velociera Inc.`;
});

function scrollup(){
    window.scrollTo({ top: 0, behavior: "smooth"});
}
