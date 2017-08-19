// JavaScript Document

$(document).ready(function() {


    $(function() {

        // Slideshow 1
        $("#slider1").responsiveSlides({
            width: $(window).width() > 1025 ? 1025 : 'auto',
            //        maxwidth: 1025,
            speed: 800
        });

        // Slideshow 2
        $("#slider2").responsiveSlides({
            auto: false,
            pager: true,
            speed: 300,
            maxwidth: 540
        });

        // Slideshow 3
        $("#slider3").responsiveSlides({
            manualControls: '#slider3-pager',
            maxwidth: 540
        });

        // Slideshow 4
        $("#slider4").responsiveSlides({
            // width: $("#slider4").width(1025),
            // height: $("slider4").height(200),
            auto: false,
            pager: false,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function() {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function() {
                $('.events').append("<li>after event fired.</li>");
            }
        });

    });


});