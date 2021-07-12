function theFunction() {
  document.body.style.background = "linear-gradient(#012d3b, #03779d)";
  alert("Activating dark mode!");
}

function resetTheFunction(){
  document.body.style.background = "linear-gradient(#c9f1fd, rgba(0, 0, 0, 0.01))";
  alert("Activating light mode!");
}

function colorMyFunction() {
  var theColor= document.getElementById('mycolor').value;
  document.body.style.background = theColor;
  alert("Changing the webpage color!");
}

function resetMyFunction() {
  document.body.style.background = "linear-gradient(#012d3b, #03779d)";
  alert("Reseting the webpage color!");
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
