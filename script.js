


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
  setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.

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




	// var colors = ["#000000"];
	// for(var path in paths){
  //   console.log(path);
	//   paths[path].style.animationDelay = Math.round(Math.random()) + "s";
	//   paths[path].style.animationDuration = Math.round(Math.random() * 12 + 10) + "s";
	// //  paths[path].style.stroke = colors[Math.floor(Math.random() * colors.length)];
	//   paths[path].style.opacity = (Math.random() * 0.5 + 0.1);
	//   var pathLength = paths[path].getTotalLength();
