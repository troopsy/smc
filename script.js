

var slideIndex = 1;
var hidebutton ;
var windowSize = 0;
$(document).ready(function(){
  windowSize = $(window).width();
  var c2 = document.getElementById("c-2").getBoundingClientRect();

  console.log(c2);
    $(window).scroll(function(e){
       let y = ($(window).scrollTop());
       console.log(y);
        $(".smc-product").css("margin-top","-"+y+"px");
        //Code for the small devices
        if(windowSize < 600){
        }
    });
    
    $('.like-button, heart-button').hide();
    $('.item-1 img').click(function(){
      clearTimeout(hidebutton);
        $('.like-button, heart-button').show(0, function(){
            $('.like-button, .heart-button').removeClass('close');
        });
    });




    showSlides(slideIndex);
    mini_slides(1, 0);
    mini_slides(1, 1);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


var miniIndex = [1,1];
var slideId = ["s-1", "s-2"];
function plusSlides(n, no) {
    mini_slides(miniIndex[no] += n, no);
}
function mini_Slide(n,no){
    mini_slides( miniIndex[no] = n, no);
}

function mini_slides(n, no) {
    //alert(miniIndex[no]);
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {miniIndex[no] = 1}    
  if (n < 1) {miniIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[miniIndex[no]-1].style.display = "flex";  
}

