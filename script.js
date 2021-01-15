


$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $('.home').height() - 70;

  console.log(navHeight);
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
      $('nav').removeClass('d-none');
    }
    else {
      $('nav').removeClass('fixed');
        $('nav').addClass('d-none');

    }
 });
});



$(window).on('load', function(){
  setTimeout(removeLoader, 200); //wait for page load PLUS two seconds.

});
function removeLoader(){
      new WOW().init();
    $( ".loadermy" ).fadeOut(300, function() {

      $( ".loadermy" ).addClass("d-none");
        // fadeOut complete. Remove the loading div
      $( ".loadermy" ).remove(); //makes page more lightweight
  });
}

$(function(){

});



function logohover(element) {
  element.setAttribute('src', 'images/logomyyellow.svg');
}

function logounhover(element) {
  element.setAttribute('src', 'images/logomy.svg');
}
