$('.search-icon').bind('click', function() {
    $('.search-input').toggleClass('active');
});

$('.menu-icon').bind('click', function() {
    $('.panel').toggleClass('show-menu');
    $('.menu').toggleClass('active');
});