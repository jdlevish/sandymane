



var count = 0;
showSlides();
function showSlides() {
  var slides = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
  }
  count++
  if (count >= slides.length) { count = 0 };

  slides[count].style = "display: grid";
  setTimeout(showSlides, 5000);
}



