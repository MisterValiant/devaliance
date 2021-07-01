$(document).ready(function() {
  $("icon").on('click', function() {
    $('nav ul').toggleClass('showing');
    $('nav ul ul').toggleClass('showing');
  });
  $('nav').on('mouseleave', function() {
    $('nav ul').toggleClass('showing');
  });
});
