$(function(){
  $('.column-menu').hover(
    function(){
      $('.sub', this).slideDown(10);
    },
    function(){
      $('.sub', this).hide();
    });
});
