$(function(){

    

    $('.twitter').hover(
      function(){
        $(this).children('img').animate({
          'width':'40px'
        }, 250);
      },
      function(){
        $(this).children('img').animate({
          'width':'32px'
        }, 250);
      }
    );
    $('.instagram').hover(
      function(){
        $(this).children('img').animate({
          'width':'40px'
        }, 250);
      },
      function(){
        $(this).children('img').animate({
          'width':'32px'
        }, 250);
      }
    );
    
    $('.header-right-item a').click(function(){
      var id = $(this).attr('href')
      var position = $(id).offset().top;
      
      $('html, body').animate({
        'scrollTop': position
      }, 500 );
      
    });
    
});
