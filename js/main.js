$(document).ready(function(){
    // Header Slider Init
    var headerSlider = $('.header-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items: 1
    });

    // Header Slider Animate Function
    $('.header-slider h4').animateCss('bounceInDown', function(){
        $('.header-slider h2').css('visibility','visible');
        $('.header-slider h2').animateCss('bounceInDown', function(){
            $('.header-slider h3').css('visibility', 'visible');
            $('.header-slider h3').animateCss('bounceInDown');
        });
    });

    // Header Slider Item Index Config
    var headerSliderItemConfig = function(){
        $('.header-slider .owl-dots > .owl-dot').each(function(i, k){
            var itemOrder = i+1;
            if(itemOrder<10){
                itemOrder = "0"+itemOrder;
            }
            $(this).find('span').html(itemOrder);
            if($(this).hasClass('active')){
                var dataText = $('.header-slider .owl-item.active').find('.item').attr('data-text');
                $(this).html('<small>'+dataText+'</small>'+'<span>'+itemOrder+'</span>')
            }
        });
    }
    headerSliderItemConfig(); 
    headerSlider.on('changed.owl.carousel', headerSliderItemConfig);

    // News Slider Init
    var newsSlider = $('.news-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1
    });

    // News slider arrows
    $('.news-slider .owl-prev').html('<img src="img/left-arrow.png">');
    $('.news-slider .owl-next').html('<img src="img/right-arrow.png">');

    // Rss Slider Init
    $('.rss-slider').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            340:{
                items:1,
                nav:false
            },
            768:{
                items:2,
                nav:true
            },
            1200:{
                items:4,
                nav:true
            }
        }
    })

    // Rss slider arrows
    $('.rss-slider .owl-prev').html('<img src="img/left-arrow.png">');
    $('.rss-slider .owl-next').html('<img src="img/right-arrow.png">');
});

// Animate CSS Jquery Extend Method
$.fn.extend({
    animateCss: function (animationName, cb) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if(cb){
                cb();
            }
        });
    }
});