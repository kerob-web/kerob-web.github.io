$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items: 1,
        navText : ["",""]
    })
});