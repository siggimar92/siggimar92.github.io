'use strict';

$(document).ready(function() {

    $('html, body').animate({
        scrollTop: 0
    }, 800);

    var scrollHeight = 570 - 70;
    var isExpanded = true;
    $(window).scroll(function() {

        if ($(window).scrollTop() > scrollHeight) {
            $('.icon-container').addClass('icon-container--small');    
            $('.icon').addClass('icon--small');
            isExpanded = false;
        }
      
        if (!isExpanded && $(window).scrollTop() < scrollHeight) {
            $('.icon-container').removeClass('icon-container--small');    
            $('.icon').removeClass('icon--small');
            isExpanded = true;
        }
      
    });

    $('.icon-container').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

});



// $('#link').click(function(e){
//     var $target = $('html,body');
//     $target.animate({scrollTop: $target.height()}, 500);
//   });