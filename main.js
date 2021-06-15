$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        fade: true,
        customPaging:
        function(slick,index) {
        return ''; },
        nextArrow:$('.btnSlider-next'),
        prevArrow:$('.btnSlider-prev'),
    });
});
