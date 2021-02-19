$(document).ready(function (){

    "use strict"
    $("#slider-carousel").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto: true,
        items:{
            visible:{
                min:1,
                max:1,
            },
            height:"variable"
        },
        pagination:{
            //container:".sliderpager",
            pageAnchorBuilder: false
        }
    });
    if(window.innerWidth>767){
        $(window).scroll(function () {
            let top = $(window).scrollTop();
            if (top >= 80) {
                $("header").addClass("secondary");
            } else if ($("header").hasClass("secondary")) {
                $("header").removeClass("secondary");
            }
        })
    }
    $("input[type=checkbox]").click(function () {
        if ($(this).is(":checked")) {
            console.log("click")
            $(".nav-bar").css({
                backgroundColor: "deepskyblue",
                transition: "0.5s ease-in"
            })
        } else {
            console.log("not checked")
            $(".nav-bar").css({
                backgroundColor: "transparent",
                transition: "0.5s ease-in"
            })
            $(window).scroll(function () {

                let top = $(window).scrollTop();
                if (top >= 80) {
                    $("header").addClass("secondary");
                } else if ($("header").hasClass("secondary")) {
                    $("header").removeClass("secondary");
                }
            })
        }
    })


})