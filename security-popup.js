let popup = document.getElementById("security-popup");
let overlay = document.getElementById("overlay");


let slideIndex = 0;
const SLIDE_INTERVAL = 3000; 
let slideshowTimer;
let slideWrapper;


function showNextSlide() {
    const wrapperPopup = document.getElementById("slide-wrapper");
    const wrapperGrid = document.getElementById("slideShowGrid");
    
    
    const referenceWrapper = wrapperGrid || wrapperPopup;
    if (!referenceWrapper || referenceWrapper.children.length === 0) return;

    const totalSlides = referenceWrapper.children.length;

    
    slideIndex = (slideIndex + 1) % totalSlides;
    
    
    const offset = slideIndex * 100/totalSlides;

    
    if (wrapperPopup) {
        wrapperPopup.style.transform = `translateX(-${offset}%)`;
    }

    
    if (wrapperGrid) {
        wrapperGrid.style.transform = `translateX(-${offset}%)`;
    }

    const ref = wrapperGrid || wrapperPopup;
    if (ref) {
        slideIndex = (slideIndex + 1) % ref.children.length;
    }
}


function startSlideshow() {
    if (slideshowTimer) clearInterval(slideshowTimer);

    slideWrapper = document.getElementById("slide-wrapper");   
    slideWrapper = document.getElementById("slideShowGrid") || slideWrapper;
    
    if (!slideWrapper) {
        setTimeout(startSlideshow, 100);
        return;
    }

    slideIndex = 0;
    slideWrapper.style.transform = `translateX(0%)`;
    slideshowTimer = setInterval(showNextSlide, SLIDE_INTERVAL);
}


function openPopup() {
    if (popup && overlay) {
        popup.classList.add("open-popup");
        overlay.classList.add("open-overlay");
        
    }
}

function closePopup() {

    
    
    if (popup && overlay) {
        popup.classList.remove("open-popup");
        overlay.classList.remove("open-overlay");
    }
    
    
    if (document.login && document.login.username) {
        document.login.username.focus();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {    
    startSlideshow();
    setTimeout(openPopup, 500); 
});


if (document.login && document.login.username) {
    document.login.username.focus();
}