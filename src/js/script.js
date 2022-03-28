var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000)
}
window.addEventListener('scroll', ()=>{
  if(scrollY > 0){
    document.querySelector('.header').classList.add('is-active')
    document.querySelector('#banner_logo').classList.add('logo-is-active')
  } else {
    document.querySelector('.header').classList.remove('is-active')
    document.querySelector('#banner_logo').classList.remove('logo-is-active')
  }
})