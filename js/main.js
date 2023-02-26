$(document).ready(function(){
    
    $('.carousel-images1').slick({
        autoplay: true,
        asNavFor: '.carousel-images2'
    })

    $('.carousel-images2').slick({
        autoplay: true,
        arrows: false,
        asNavFor: '.carousel-images1'
    })
})

