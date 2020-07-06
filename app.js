
M.AutoInit();
var instance = M.Carousel.getInstance(elem);
$(document).ready(function () {
    $('.sidenav').sidenav();
});
$(document).ready(function () {
    $('.parallax').parallax();
});

$(document).ready(function () {
    $('.carousel').carousel();
    $('.carousel').carousel('next()');
});

$('.carousel.carousel-item').carousel({
    duration: 10,
    
});
