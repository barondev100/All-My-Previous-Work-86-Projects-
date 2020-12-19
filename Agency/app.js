$(window).scroll(function(){
    parallax();
})

function parallax(){
    var wScroll = $(window).scrollTop();
    
    $('.parallax--bg').css('background-position', 'center center ' + (wScroll * 0.25) + 'px');

    $('.parallax--box').css('top', -5+(wScroll * 0.010) + 'em')
}