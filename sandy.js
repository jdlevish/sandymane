



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
// portfolio image gallery
const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);



