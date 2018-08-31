$(document).ready(function() {
    $('.main_btna').click(function() {
        $('.modal').slideDown(1000);
        $('.overlay').fadeIn(1000);
    });

    $('.main_btn').click(function() {
        $('.modal').slideDown(1000);
        $('.overlay').fadeIn(1000);
    });

    $('a[href="#sheldure"]').click(function() {
        $('.modal').slideDown(1000);
        $('.overlay').fadeIn(1000);
    });

    
    $('span').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
    
});
