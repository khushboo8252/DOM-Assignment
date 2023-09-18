let slides = document.querySelectorAll('#slideshow img');
let slideIndex = 0;
let slideInterval;

function showSlide(index){
    slides.forEach((slide,i)=>{
        if(i === index){
            slide.style.display = 'block';
        }
        else{
            slide.style.display = 'none';
        }
    })
}

// Automation Starts

function startSlideShow(){
    slideInterval = setInterval(()=>{
        slideIndex = (slideIndex + 1)% slides.length;
        showSlide(slideIndex);
        console.log(slideIndex)
    }, 2000)
}

function stopSlideShow(){
    clearInterval(slideInterval);
}

function toggleSlideShow(){
    if(slideInterval){
        stopSlideShow();
        slideInterval = null;
    }
    else{
        startSlideShow();
    }
}

// Manual Process
function nextSlide(){
    stopSlideShow();
    slideIndex = (slideIndex + 1)% slides.length;
    showSlide(slideIndex);
}

function prevSlide(){
    stopSlideShow();
    slideIndex = (slideIndex - 1)% slides.length;
    showSlide(slideIndex);
}

showSlide(slideIndex);