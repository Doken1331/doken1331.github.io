$(document).ready(function() {
    $('.slider').slick({
        adaptiveHeight:true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 500,
            settings: {
            slidesToShow: 1,
            }
            }],
        centerMode: true
    });
})