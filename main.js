$(function() {
  $('.drop-down-text, .content-css,.text-css').slideUp();
  $('.drop-down h3, .text-css h1, .main-content text').click(function(event) {
      $(this).next().slideToggle();
  })
});
