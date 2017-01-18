// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$( document ).ready(function(){
  $(".button-collapse").sideNav();
});

// Home Page About Me Functionality
// $(function () {
//   count = 0;
//   wordsArray = ["art", "beaches", "books", "craft beer", "design", "music", "pottery", "UI/UX", "yoga", "writing" ];
//   setInterval(function () {
//     count++;
//     $("#word").fadeOut(400, function () {
//       $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
//     });
//   }, 2000);
// });

// Makes content with class of 'fadeInBlock' fade in on scroll.
$(function() {
    $(window).scroll( function(){
        $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 40;
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});
