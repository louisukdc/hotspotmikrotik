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
  
  let mainSlides = document.getElementsByClassName("slide-image-grid");
  let popupSlides = document.getElementsByClassName("slide-image"); 
  
  
  let totalSlides = Math.max(mainSlides.length, popupSlides.length);
  if (totalSlides === 0) return;

  
  if (n > totalSlides) {slideIndex = 1} 
  if (n < 1) {slideIndex = totalSlides}
  
  
  if (mainSlides.length > 0) {
      for (let i = 0; i < mainSlides.length; i++) {
        mainSlides[i].style.display = "none";  
        mainSlides[i].classList.remove("fade");
      }
      
      let mainIndex = (slideIndex - 1) % mainSlides.length;
      if (mainSlides[mainIndex]) {
          mainSlides[mainIndex].style.display = "block";  
          mainSlides[mainIndex].classList.add("fade");
      }
  }

  
  if (popupSlides.length > 0) {
      for (let i = 0; i < popupSlides.length; i++) {
        popupSlides[i].style.display = "none";
        popupSlides[i].classList.remove("fade");
      }
      
      let popupIndex = (slideIndex - 1) % popupSlides.length;
      if (popupSlides[popupIndex]) {
          popupSlides[popupIndex].style.display = "block";
          popupSlides[popupIndex].classList.add("fade");
      }
  }
}

function showNextSlide() {
    const wrapperPopup = document.getElementById("slide-wrapper");
    const wrapperGrid = document.getElementById("slideShowGrid");
    
    
    const referenceWrapper = wrapperGrid || wrapperPopup;
    if (!referenceWrapper || referenceWrapper.children.length === 0) return;

    const totalSlides = referenceWrapper.children.length;

    
    slideIndex = (slideIndex + 1) % totalSlides;
    
    
    const offset = slideIndex * 100/totalSlides/2;

    
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