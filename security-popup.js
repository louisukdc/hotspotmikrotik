let popup = document.getElementById("security-popup");
let overlay = document.getElementById("overlay");


let slideIndex = 1;
showDivs(slideIndex);
const SLIDE_INTERVAL = 3000; 
let slideshowTimer;
let slideWrapper;


function plusDivs(n) {
    clearInterval(slideshowTimer); 
    showDivs(slideIndex += n);
    startSlideshow();
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slide-image-grid");
  
  if (x.length === 0) return; 

  
  if (n > x.length) {slideIndex = 1} 
  
  if (n < 1) {slideIndex = x.length}
  
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    x[i].classList.remove("fade"); 
  }

  
  x[slideIndex-1].style.display = "block";  
  x[slideIndex-1].classList.add("fade"); 
}

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

    
    slideshowTimer = setInterval(() => {
        showDivs(slideIndex += 1);
    }, SLIDE_INTERVAL);
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
    showDivs(slideIndex);
    startSlideshow();
    setTimeout(openPopup, 500); 
});


if (document.login && document.login.username) {
    document.login.username.focus();
}