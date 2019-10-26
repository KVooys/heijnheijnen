// add scrolling effects to the nav buttons

$(document).ready(function () {
  Topbuttons();
  $('[lang="de"]').hide();
});

function Topbuttons() {
  $("#topbutton").click(function() {
      $('html, body').animate({
          scrollTop: $(".top").offset().top
      }, 1200);
  });

  $("#booksbutton").click(function() {
      $('html, body').animate({
          scrollTop: $(".booknav").offset().top
      }, 1200);
  });

  $("#aboutbutton").click(function() {
      $('html, body').animate({
          scrollTop: $(".about").offset().top
              }, 1200);
  });

  $("#contactbutton").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact").offset().top
      }, 1200);
  });
};

function switch_lang() {
  $('[lang="de"]').toggle();
  $('[lang="nl"]').toggle();
};