/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {

    if ($.browser.mozilla) {
        //$("#video-bg").prepend("<source src='/img/video.webm' type='video/webm'>");
    }

    var wid = window.innerWidth;
    var hei = window.innerHeight;


    $("#news").css("height", hei + "px");
    $("#newsbar").css("height", hei - 95 + "px");
    $(".newsphoto").css("width", wid / 2 - 80 + "px");
    $(".newsphoto").css("left", "40px");

    $("#newsbar").niceScroll({
        cursorcolor: "rgb(255, 255, 255)",
        cursorwidth: 6,
        cursoropacitymin: 0.5,
        zindex: 100000,
        cursorborder: "0px solid #fff"
    });

    //$(".newsball").css("height",$(".newsball").height()-50+"px");

    $("body").css("height", (6 * hei + 6 * wid) + "px");

    $("#pjuice6").hover(function () {
        $("#pjuice6").stop(true).animate({
            opacity: 1
        }, "fast");
    }, function () {
        $("#pjuice6").stop(true).animate({
            opacity: 0
        }, "fast");
    });

    if (hei < 650) {
        $("#footerfirst").css("display", "none");
        $("#pom1").css("display", "none");
        $("#logohead").css("display", "none");
    } else if (hei > 650) {
        $("#footerfirst").css("display", "block");
        $("#pom1").css("display", "block");
        $("#logohead").css("display", "block");
    }

    if (hei < 725) {
        $("#picon").css("display", "none");
        $("#picon2").css("display", "none");
        $("#picon3").css("display", "none");
    } else if (hei > 625) {
        $("#picon").css("display", "block");
        $("#picon2").css("display", "block");
        $("#picon3").css("display", "block");
    }

    $("#we1").css("background-color", "#fbd6d5");

    $("#sale").click(function () {
        $("#saleshow").fadeIn();
    });

    $("#saleshow").click(function () {
        $("#saleshow").fadeOut();
    });

    $("#we1").click(function () {
        $("#pjuice3-2").fadeOut();
        $("#we1").css("background-color", "#fbd6d5");
        $("#we2").css("background-color", "#fff");
    });

    $("#we2").click(function () {
        $("#pjuice3-2").fadeIn();
        $("#we2").css("background-color", "#fbd6d5");
        $("#we1").css("background-color", "#fff");
    });

    $("#closeiconmore").click(function () {
        $("#md1").fadeOut();
    });

    $("#closeiconmore2").click(function () {
        $("#md2").fadeOut();
    });

    $("#closeiconmore3").click(function () {
        $("#md3").fadeOut();
    });

    $("#closeiconmore4").click(function () {
        $("#md4").fadeOut();
    });

    $("#closeiconmore5").click(function () {
        $("#md5").fadeOut();
    });

    $("#closeiconmore6").click(function () {
        $("#md6").fadeOut();
    });

    $("#closeiconmore1").click(function () {
        $("#md1").fadeOut();
    });

    $("#nutmore").click(function () {
        $("#md1").fadeIn();
    });

    $("#nutmore2").click(function () {
        $("#md2").fadeIn();
    });

    $("#nutmore3").click(function () {
        $("#md3").fadeIn();
    });

    $("#nutmore4").click(function () {
        $("#md4").fadeIn();
    });

    $("#nutmore5").click(function () {
        $("#md5").fadeIn();
    });

    $("#nutmore6").click(function () {
        $("#md6").fadeIn();
    });

    $("#menuicon").click(function () {
        $("#menu").fadeIn();
    });

    $("#closeicon").click(function () {
        $("#menu").fadeOut();
    });

    $("#closeicon2").click(function () {
        $("#newscon").fadeOut();
    });

    $("#mi1").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 2000);
        $("#menu").fadeOut();
    });

    $("#mi2").click(function () {
        $("body,html").animate({
            scrollTop: hei
        }, 2000);
        $("#menu").fadeOut();
    });


    $("#mi3").click(function () {
        $("#newscon").css("display", "block");
        $("#menu").fadeOut();


        var opts = {
            lines: 16, // The number of lines to draw
            length: 10, // The length of each line
            width: 3, // The line thickness
            radius: 15, // The radius of the inner circle
            corners: 0.6, // Corner roundness (0..1)
            rotate: 44, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#fff', // #rgb or #rrggbb or array of colors
            speed: 2, // Rounds per second
            trail: 31, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: true, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent
            left: '50%' // Left position relative to parent
        };
        var target = document.getElementById('news');
        var spinner = new Spinner(opts).spin(target);




        var myStylesLocation = "/d_css/css/common.css";
        $.get(myStylesLocation, function (css) {
            $('<style type="text/css"></style>').html(css).appendTo("head");
        });


        var lan = $('html').attr('lang');
        $.ajax({
            type: "POST",
            url: "/" + lan + "/loadnews/",
            success: function (result) {
                $("#newsbar").html(result);
                $(".newsphoto").css("width", wid / 2 - 80 + "px");
                $(".newsphoto").css("left", "40px");
            },
            error: function (result) {
                $("#newsbar").html('Connection timeout ! Try Again.');
            }
        })

                .done(function () {
                    $("#newsbar").animate({opacity: 1});
                    $(".spinner").fadeOut();
                });




    });


    $("#morebtn0").click(function () {
        $("#newscon").css("display", "block");
        $("#menu").fadeOut();


        var opts = {
            lines: 16, // The number of lines to draw
            length: 10, // The length of each line
            width: 3, // The line thickness
            radius: 15, // The radius of the inner circle
            corners: 0.6, // Corner roundness (0..1)
            rotate: 44, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#fff', // #rgb or #rrggbb or array of colors
            speed: 2, // Rounds per second
            trail: 31, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: true, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent
            left: '50%' // Left position relative to parent
        };
        var target = document.getElementById('news');
        var spinner = new Spinner(opts).spin(target);




        var myStylesLocation = "/d_css/css/common.css";
        $.get(myStylesLocation, function (css) {
            $('<style type="text/css"></style>').html(css).appendTo("head");
        });


        var lan = $('html').attr('lang');
        $.ajax({
            type: "POST",
            url: "/" + lan + "/loadnews/",
            success: function (result) {
                $("#newsbar").html(result);
                $(".newsphoto").css("width", wid / 2 - 80 + "px");
                $(".newsphoto").css("left", "40px");
            },
            error: function (result) {
                $("#newsbar").html('Connection timeout ! Try Again.');
            }
        })

                .done(function () {
                    $("#newsbar").animate({opacity: 1});
                    $(".spinner").fadeOut();
                });




    });
    
    
    
    $("#mi4").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei
        }, 2000);
        $("#menu").fadeOut();
    });

    $("#mi5").click(function () {
        $("body,html").animate({
            scrollTop: 4 * hei + 6 * wid
        }, 2000);
        $("#menu").fadeOut();
    });

    $("#mi6").click(function () {
        $("body,html").animate({
            scrollTop: 5 * hei + 6 * wid
        }, 2000);
        $("#menu").fadeOut();
    });

    $("#pbut0").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei
        }, 1500);
    });

    $("#pbut5").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei + 5 * wid
        }, 1500);
    });

    $("#pbut1").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei + wid
        }, 1500);
    });

    $("#pbut2").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei + 2 * wid
        }, 1500);
    });

    $("#pbut3").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei + 3 * wid
        }, 1500);
    });

    $("#pbut4").click(function () {
        $("body,html").animate({
            scrollTop: 3 * hei + 4 * wid
        }, 1500);
    });

    $(window).mousemove(function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageX;

        /* if(mouseX<wid/3){
         $("#mtxt1").css("display","block");
         $("#mtxt2").css("display","none");
         $("#mtxt3").css("display","none");
         $("#slide1").css("background-color","#ec3237");
         } else if(mouseX>wid/3 && mouseX<2*wid/3){
         $("#mtxt1").css("display","none");
         $("#mtxt2").css("display","block");
         $("#mtxt3").css("display","none");
         $("#slide1").css("background-color","#fff");
         } else if(mouseX>2*wid/3){
         $("#mtxt1").css("display","none");
         $("#mtxt2").css("display","none");
         $("#mtxt3").css("display","block");
         $("#slide1").css("background-color","#ec3237");
         }
         
         */
    });

    $(window).resize(function () {

        wid = window.innerWidth;
        hei = window.innerHeight;

        $("#news").css("height", hei + "px");
        $("#newsbar").css("height", hei - 95 + "px");
        $(".newsphoto").css("width", wid / 2 - 80 + "px");
        $(".newsphoto").css("left", "40px");

        $("body").css("height", (6 * hei + 6 * wid) + "px");

        var roll = $(window).scrollTop();
        var h1 = 550 + roll * 2;
        var h2 = roll * 2.5 - 3 * hei;
        var h3 = roll * 3 - 4.3 * hei;
        var h4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
        var h5 = roll * 3 - ((10.7 * hei) + (18 * wid));
        var h6 = roll * 3 - ((12.4 * hei) + (18 * wid));
        var h7 = roll * 3 - ((12.7 * hei) + (18 * wid));
        var w1 = 550 + roll * 2;
        var w2 = roll * 2.5 - 3 * hei;
        var w3 = roll * 3 - 4.3 * hei;
        var w4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
        var w5 = roll * 3 - ((10.7 * hei) + (18 * wid));
        var w6 = roll * 3 - ((12.4 * hei) + (18 * wid));
        var w7 = roll * 3 - ((12.7 * hei) + (18 * wid));
        var opa1 = 1 + (-1 * roll / 100);

        if (wid > hei) {

            if (w1 < wid * 1.3) {
                w1 = 550 + roll * 2;
                h1 = 550 + roll * 2;
                $("#video-bg").css("display", "block");
            } else if (w1 > wid * 1.3) {
                w1 = wid * 1.5;
                h1 = wid * 1.5;
                $("#video-bg").css("display", "none");
            }

            if (w2 < wid * 1.3) {
                w2 = roll * 2.5 - 3 * hei;
                h2 = roll * 2.5 - 3 * hei;
            } else if (w2 > wid * 1.3) {
                w2 = wid * 1.5;
                h2 = wid * 1.5;
            }

            if (w3 < wid * 1.3) {
                w3 = roll * 3 - 4.3 * hei;
                h3 = roll * 3 - 4.3 * hei;
            } else if (w3 > wid * 1.3) {
                w3 = wid * 1.5;
                h3 = wid * 1.5;
            }

            if (w4 < wid * 1.3) {
                w4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
                h4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
            } else if (w4 > wid * 1.3) {
                w4 = wid * 1.5;
                h4 = wid * 1.5;
            }

            if (w5 < wid * 1.3) {
                w5 = roll * 3 - ((10.7 * hei) + (18 * wid));
                h5 = roll * 3 - ((10.7 * hei) + (18 * wid));
            } else if (w5 > wid * 1.3) {
                w5 = wid * 1.5;
                h5 = wid * 1.5;
            }

        }

        if (wid < hei) {

            $("#video-bg").css("display", "none");

            if (wid < 500) {
                if (w1 < hei * 1.5) {
                    w1 = 370 + roll * 2;
                    h1 = 370 + roll * 2;
                } else if (w1 > hei * 1.5) {
                    w1 = hei * 1.5;
                    h1 = hei * 1.5;
                }
            } else if (wid > 500) {
                if (w1 < hei * 1.5) {
                    w1 = 550 + roll * 2;
                    h1 = 550 + roll * 2;
                } else if (w1 > hei * 1.5) {
                    w1 = hei * 1.5;
                    h1 = hei * 1.5;
                }
            }

            if (w2 < hei * 1.3) {
                w2 = roll * 2.5 - 3 * hei;
                h2 = roll * 2.5 - 3 * hei;
            } else if (w2 > hei * 1.3) {
                w2 = hei * 1.5;
                h2 = hei * 1.5;
            }

            if (w3 < hei * 1.3) {
                w3 = roll * 3 - 4.3 * hei;
                h3 = roll * 3 - 4.3 * hei;
            } else if (w3 > hei * 1.3) {
                w3 = hei * 1.5;
                h3 = hei * 1.5;
            }

            if (w4 < hei * 1.3) {
                w4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
                h4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
            } else if (w4 > hei * 1.3) {
                w4 = hei * 1.5;
                h4 = hei * 1.5;
            }

            if (w5 < hei * 1.3) {
                w5 = roll * 3 - ((10.7 * hei) + (18 * wid));
                h5 = roll * 3 - ((10.7 * hei) + (18 * wid));
            } else if (w5 > hei * 1.3) {
                w5 = hei * 1.5;
                h5 = hei * 1.5;
            }

        }

        if (w7 < wid * 0.8) {
            $("#slide6").stop(true).animate({
                opacity: 1
            });
        } else if (w7 > wid * 0.8) {
            $("#slide6").stop(true).animate({
                opacity: 0
            });
        }

        if (w1 < wid * 1.3) {
            $("#pbutcontainer").stop(true).animate({
                right: -100
            });
        } else if (w1 > wid * 1.3) {
            $("#pbutcontainer").stop(true).animate({
                right: 20
            });
        }

        $("#mouse").css("opacity", opa1);

        if (roll > 200) {
            $("#mouse").stop(false, true).fadeOut();
        } else if (roll < 200) {
            $("#mouse").stop(false, true).fadeIn();
        }

        $(".roll").css("top", -1 * roll + "px");
        $("#r3").css("top", 2 * hei + (-1 * roll) + "px");
        $("#r4-1").css("top", 3 * hei + (-1 * roll) + "px");
        $("#r4").css("top", 4 * hei + (-1 * roll) + "px");
        $("#r4-1").css("left", "0px");
        $("#r5").css("top", 5 * hei + (-1 * roll) + "px");
        $("#r6").css("top", 6 * hei + (-1 * roll) + "px");
        $("#r7").css("top", 7 * hei + (-1 * roll) + "px");
        $("#r8").css("top", 8 * hei + (-1 * roll) + "px");
        $("#r8-1").css("top", 9 * hei + (-1 * roll) + "px");
        $("#r9").css("top", 4.1 * hei + 6 * wid + (-1 * roll) + "px");
        $("#r10").css("top", 5 * hei + 6 * wid + (-1 * roll) + "px");
        $("#pom2").css("margin-top", 2 * hei - 160 + (-1 * roll) + "px");
        $("#pom3").css("margin-top", 4.1 * hei + 6 * wid - 250 + (-1 * roll) + "px");
        $("#pom4").css("margin-top", 5.1 * hei + 6 * wid - 380 + (-1 * roll) + "px");
        $("#picon").css("margin-top", 2 * hei - 410 + (-1.2 * roll) + "px");
        $("#picon2").css("margin-top", 3.3 * hei + 6 * wid + (-1 * roll) + "px");
        $("#picon3").css("margin-top", 4.15 * hei + 6 * wid + (-1 * roll) + "px");

        $("#slide1").css("height", h1 + "px");
        $("#slide1").css("width", w1 + "px");
        $("#slide1").css("margin-top", -1 * (h1 / 2) + "px");
        $("#slide1").css("margin-left", -1 * (w1 / 2) + "px");

        $("#slide2").css("height", h2 + "px");
        $("#slide2").css("width", w2 + "px");
        $("#slide2").css("margin-top", -1 * (h2 / 2) + "px");
        $("#slide2").css("margin-left", -1 * (w2 / 2) + "px");

        $("#slide3").css("height", h3 + "px");
        $("#slide3").css("width", w3 + "px");
        $("#slide3").css("margin-top", -1 * (h3 / 2) + "px");
        $("#slide3").css("margin-left", -1 * (w3 / 2) + "px");

        $("#slide4").css("height", h4 + "px");
        $("#slide4").css("width", w4 + "px");
        $("#slide4").css("margin-top", -1 * (h4 / 2) + "px");
        $("#slide4").css("margin-left", -1 * (w4 / 2) + "px");

        $("#slide5").css("height", h5 + "px");
        $("#slide5").css("width", w5 + "px");
        $("#slide5").css("margin-top", -1 * (h5 / 2) + "px");
        $("#slide5").css("margin-left", -1 * (w5 / 2) + "px");

        $("#slide6").css("height", h6 + "px");
        $("#slide6").css("width", w6 + "px");
        $("#slide6").css("margin-top", -1 * (h6 / 2) + "px");
        $("#slide6").css("margin-left", -1 * (w6 / 2) + "px");

        $("#slide7").css("height", h7 + "px");
        $("#slide7").css("width", w7 + "px");
        $("#slide7").css("margin-top", -1 * (h7 / 2) + "px");
        $("#slide7").css("margin-left", -1 * (w7 / 2) + "px");

        /*  if(h1<1300){$("#slide1").css("overflow","hidden");}
         else if(h1>1300){$("#slide1").css("overflow","visible");} */

        if (roll > 3 * hei && roll < 3 * hei + 6 * wid) {
            $("#r4-1").css("top", "0px");
            $("#r4-1").css("left", 3 * hei + (-1 * roll) + "px");
            $("#r4").css("left", 3 * hei + wid + (-1 * roll) + "px");
            $("#r5").css("left", 3 * hei + 2 * wid + (-1 * roll) + "px");
            $("#r6").css("left", 3 * hei + 3 * wid + (-1 * roll) + "px");
            $("#r7").css("left", 3 * hei + 4 * wid + (-1 * roll) + "px");
            $("#r8").css("left", 3 * hei + 5 * wid + (-1 * roll) + "px");
            $("#r8-1").css("left", 3 * hei + 6 * wid + (-1 * roll) + "px");
            $("#r4").css("top", "0px");
            $("#r5").css("top", "0px");
            $("#r6").css("top", "0px");
            $("#r7").css("top", "0px");
            $("#r8").css("top", "0px");
            $("#r8-1").css("top", "0px");
        }

        if (roll > 3 * hei + 6 * wid) {
            $("#r8-1").css("top", 3 * hei + 6 * wid + (-1 * roll) + "px");
            $("#r8-1").css("left", "0px");
        }

        if (w1 > wid * 1.1) {
            $("#logohead").stop(true).animate({
                top: "20px"
            });
            $("#footerhead").stop(true).animate({
                bottom: "20px"
            });
        } else if (w1 < wid * 1.1) {
            $("#logohead").stop(true).animate({
                top: "-100px"
            });
            $("#footerhead").stop(true).animate({
                bottom: "-50px"
            });
        }

        //if(roll>2.8*hei && roll<2.8*hei+wid){

        // }

        // if(roll>2.8*hei+wid && roll<2.8*hei+2*wid){

        //  }

        //  if(roll>2.8*hei+2*wid && roll<2.8*hei+3*wid){

        //   }

        //   if(roll>2.8*hei+3*wid && roll<2.8*hei+4*wid){

        //   }

        //   if(roll>2.8*hei+4*wid){

        //   }

        if (hei < 650) {
            $("#footerfirst").css("display", "none");
            $("#pom1").css("display", "none");
            $("#logohead").css("display", "none");
        } else if (hei > 650) {
            $("#footerfirst").css("display", "block");
            $("#pom1").css("display", "block");
            $("#logohead").css("display", "block");
        }

        if (hei < 725) {
            $("#picon").css("display", "none");
            $("#picon2").css("display", "none");
            $("#picon3").css("display", "none");
        } else if (hei > 625) {
            $("#picon").css("display", "block");
            $("#picon2").css("display", "block");
            $("#picon3").css("display", "block");
        }

    });

    $(window).scroll(function () {

        wid = window.innerWidth;
        hei = window.innerHeight;

        var roll = $(window).scrollTop();
        var h1 = 550 + roll * 2;
        var h2 = roll * 2.5 - 3 * hei;
        var h3 = roll * 3 - 4.3 * hei;
        var h4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
        var h5 = roll * 3 - ((10.7 * hei) + (18 * wid));
        var h6 = roll * 3 - ((12.4 * hei) + (18 * wid));
        var h7 = roll * 3 - ((12.7 * hei) + (18 * wid));
        var w1 = 550 + roll * 2;
        var w2 = roll * 2.5 - 3 * hei;
        var w3 = roll * 3 - 4.3 * hei;
        var w4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
        var w5 = roll * 3 - ((10.7 * hei) + (18 * wid));
        var w6 = roll * 3 - ((12.4 * hei) + (18 * wid));
        var w7 = roll * 3 - ((12.7 * hei) + (18 * wid));
        var opa1 = 1 + (-1 * roll / 100);


        if (wid > hei) {

            if (w1 < wid * 1.3) {
                w1 = 550 + roll * 2;
                h1 = 550 + roll * 2;
                $("#video-bg").css("display", "block");
            } else if (w1 > wid * 1.3) {
                w1 = wid * 1.5;
                h1 = wid * 1.5;
                $("#video-bg").css("display", "none");
            }

            if (w2 < wid * 1.3) {
                w2 = roll * 2.5 - 3 * hei;
                h2 = roll * 2.5 - 3 * hei;
            } else if (w2 > wid * 1.3) {
                w2 = wid * 1.5;
                h2 = wid * 1.5;
            }

            if (w3 < wid * 1.3) {
                w3 = roll * 3 - 4.3 * hei;
                h3 = roll * 3 - 4.3 * hei;
            } else if (w3 > wid * 1.3) {
                w3 = wid * 1.5;
                h3 = wid * 1.5;
            }

            if (w4 < wid * 1.3) {
                w4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
                h4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
            } else if (w4 > wid * 1.3) {
                w4 = wid * 1.5;
                h4 = wid * 1.5;
            }

            if (w5 < wid * 1.3) {
                w5 = roll * 3 - ((10.7 * hei) + (18 * wid));
                h5 = roll * 3 - ((10.7 * hei) + (18 * wid));
            } else if (w5 > wid * 1.3) {
                w5 = wid * 1.5;
                h5 = wid * 1.5;
            }

        }

        if (wid < hei) {

            $("#video-bg").css("display", "none");

            if (wid < 500) {
                if (w1 < hei * 1.5) {
                    w1 = 370 + roll * 2;
                    h1 = 370 + roll * 2;
                } else if (w1 > hei * 1.5) {
                    w1 = hei * 1.5;
                    h1 = hei * 1.5;
                }
            } else if (wid > 500) {
                if (w1 < hei * 1.5) {
                    w1 = 550 + roll * 2;
                    h1 = 550 + roll * 2;
                } else if (w1 > hei * 1.5) {
                    w1 = hei * 1.5;
                    h1 = hei * 1.5;
                }
            }

            if (w2 < hei * 1.3) {
                w2 = roll * 2.5 - 3 * hei;
                h2 = roll * 2.5 - 3 * hei;
            } else if (w2 > hei * 1.3) {
                w2 = hei * 1.5;
                h2 = hei * 1.5;
            }

            if (w3 < hei * 1.3) {
                w3 = roll * 3 - 4.3 * hei;
                h3 = roll * 3 - 4.3 * hei;
            } else if (w3 > hei * 1.3) {
                w3 = hei * 1.5;
                h3 = hei * 1.5;
            }

            if (w4 < hei * 1.3) {
                w4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
                h4 = roll * 2.5 - ((8.3 * hei) + (15 * wid));
            } else if (w4 > hei * 1.3) {
                w4 = hei * 1.5;
                h4 = hei * 1.5;
            }

            if (w5 < hei * 1.3) {
                w5 = roll * 3 - ((10.7 * hei) + (18 * wid));
                h5 = roll * 3 - ((10.7 * hei) + (18 * wid));
            } else if (w5 > hei * 1.3) {
                w5 = hei * 1.5;
                h5 = hei * 1.5;
            }

        }

        if (w7 < wid * 0.8) {
            $("#slide6").stop(true).animate({
                opacity: 1
            });
        } else if (w7 > wid * 0.8) {
            $("#slide6").stop(true).animate({
                opacity: 0
            });
        }

        if (w1 < wid * 1.3) {
            $("#pbutcontainer").stop(true).animate({
                right: -100
            });
        } else if (w1 > wid * 1.3) {
            $("#pbutcontainer").stop(true).animate({
                right: 20
            });
        }

        if (roll < 3 * hei - hei / 2) {
            $("#pbut4").css("background-color", "#fbd6d5");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei - hei / 2 && roll < 3 * hei + wid - wid / 2) {
            $("#pbut0").css("background-color", "#d20050");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut4").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei + wid - wid / 2 && roll < 3 * hei + 2 * wid - wid / 2) {
            $("#pbut1").css("background-color", "#d20050");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut4").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei + 2 * wid - wid / 2 && roll < 3 * hei + 3 * wid - wid / 2) {
            $("#pbut2").css("background-color", "#d20050");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut4").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei + 3 * wid - wid / 2 && roll < 3 * hei + 4 * wid - wid / 2) {
            $("#pbut3").css("background-color", "#d20050");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut4").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei + 4 * wid - wid / 2 && roll < 3 * hei + 5 * wid - wid / 2) {
            $("#pbut4").css("background-color", "#d20050");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei + 5 * wid - wid / 2 && roll < 3 * hei + 6 * wid - wid / 2) {
            $("#pbut5").css("background-color", "#d20050");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut4").css("background-color", "#fbd6d5");
        }

        if (roll > 3 * hei + 6 * wid - wid / 2) {
            $("#pbut4").css("background-color", "#fbd6d5");
            $("#pbut0").css("background-color", "#fbd6d5");
            $("#pbut1").css("background-color", "#fbd6d5");
            $("#pbut2").css("background-color", "#fbd6d5");
            $("#pbut3").css("background-color", "#fbd6d5");
            $("#pbut5").css("background-color", "#fbd6d5");
        }

        $("#mouse").css("opacity", opa1);

        if (roll > 200) {
            $("#mouse").stop(false, true).fadeOut();
        } else if (roll < 200) {
            $("#mouse").stop(false, true).fadeIn();
        }

        $(".roll").css("top", -1 * roll + "px");
        $("#r3").css("top", 2 * hei + (-1 * roll) + "px");
        $("#r4-1").css("top", 3 * hei + (-1 * roll) + "px");
        $("#r4").css("top", 4 * hei + (-1 * roll) + "px");
        $("#r4-1").css("left", "0px");
        $("#r5").css("top", 5 * hei + (-1 * roll) + "px");
        $("#r6").css("top", 6 * hei + (-1 * roll) + "px");
        $("#r7").css("top", 7 * hei + (-1 * roll) + "px");
        $("#r8").css("top", 8 * hei + (-1 * roll) + "px");
        $("#r8-1").css("top", 9 * hei + (-1 * roll) + "px");
        $("#r9").css("top", 4.1 * hei + 6 * wid + (-1 * roll) + "px");
        $("#r10").css("top", 5 * hei + 6 * wid + (-1 * roll) + "px");
        $("#pom2").css("margin-top", 2 * hei - 160 + (-1 * roll) + "px");
        $("#pom3").css("margin-top", 4.1 * hei + 6 * wid - 250 + (-1 * roll) + "px");
        $("#pom4").css("margin-top", 5.1 * hei + 6 * wid - 380 + (-1 * roll) + "px");
        $("#picon").css("margin-top", 2 * hei - 410 + (-1.2 * roll) + "px");
        $("#picon2").css("margin-top", 3.3 * hei + 6 * wid + (-1 * roll) + "px");
        $("#picon3").css("margin-top", 4.15 * hei + 6 * wid + (-1 * roll) + "px");

        $("#slide1").css("height", h1 + "px");
        $("#slide1").css("width", w1 + "px");
        $("#slide1").css("margin-top", -1 * (h1 / 2) + "px");
        $("#slide1").css("margin-left", -1 * (w1 / 2) + "px");

        $("#slide2").css("height", h2 + "px");
        $("#slide2").css("width", w2 + "px");
        $("#slide2").css("margin-top", -1 * (h2 / 2) + "px");
        $("#slide2").css("margin-left", -1 * (w2 / 2) + "px");

        $("#slide3").css("height", h3 + "px");
        $("#slide3").css("width", w3 + "px");
        $("#slide3").css("margin-top", -1 * (h3 / 2) + "px");
        $("#slide3").css("margin-left", -1 * (w3 / 2) + "px");

        $("#slide4").css("height", h4 + "px");
        $("#slide4").css("width", w4 + "px");
        $("#slide4").css("margin-top", -1 * (h4 / 2) + "px");
        $("#slide4").css("margin-left", -1 * (w4 / 2) + "px");

        $("#slide5").css("height", h5 + "px");
        $("#slide5").css("width", w5 + "px");
        $("#slide5").css("margin-top", -1 * (h5 / 2) + "px");
        $("#slide5").css("margin-left", -1 * (w5 / 2) + "px");

        $("#slide6").css("height", h6 + "px");
        $("#slide6").css("width", w6 + "px");
        $("#slide6").css("margin-top", -1 * (h6 / 2) + "px");
        $("#slide6").css("margin-left", -1 * (w6 / 2) + "px");

        $("#slide7").css("height", h7 + "px");
        $("#slide7").css("width", w7 + "px");
        $("#slide7").css("margin-top", -1 * (h7 / 2) + "px");
        $("#slide7").css("margin-left", -1 * (w7 / 2) + "px");

        /*  if(h1<1300){$("#slide1").css("overflow","hidden");}
         else if(h1>1300){$("#slide1").css("overflow","visible");} */

        if (roll > 3 * hei && roll < 3 * hei + 6 * wid) {
            $("#r4-1").css("top", "0px");
            $("#r4-1").css("left", 3 * hei + (-1 * roll) + "px");
            $("#r4").css("left", 3 * hei + wid + (-1 * roll) + "px");
            $("#r5").css("left", 3 * hei + 2 * wid + (-1 * roll) + "px");
            $("#r6").css("left", 3 * hei + 3 * wid + (-1 * roll) + "px");
            $("#r7").css("left", 3 * hei + 4 * wid + (-1 * roll) + "px");
            $("#r8").css("left", 3 * hei + 5 * wid + (-1 * roll) + "px");
            $("#r8-1").css("left", 3 * hei + 6 * wid + (-1 * roll) + "px");
            $("#r4").css("top", "0px");
            $("#r5").css("top", "0px");
            $("#r6").css("top", "0px");
            $("#r7").css("top", "0px");
            $("#r8").css("top", "0px");
            $("#r8-1").css("top", "0px");
        }

        if (roll > 3 * hei + 6 * wid) {
            $("#r8-1").css("top", 3 * hei + 6 * wid + (-1 * roll) + "px");
            $("#r8-1").css("left", "0px");
        }

        if (w1 > wid * 1.1) {
            $("#logohead").stop(true).animate({
                top: "20px"
            });
            $("#footerhead").stop(true).animate({
                bottom: "20px"
            });
        } else if (w1 < wid * 1.1) {
            $("#logohead").stop(true).animate({
                top: "-100px"
            });
            $("#footerhead").stop(true).animate({
                bottom: "-50px"
            });
        }

        //if(roll>2.8*hei && roll<2.8*hei+wid){

        // }

        // if(roll>2.8*hei+wid && roll<2.8*hei+2*wid){

        //  }

        //  if(roll>2.8*hei+2*wid && roll<2.8*hei+3*wid){

        //   }

        //   if(roll>2.8*hei+3*wid && roll<2.8*hei+4*wid){

        //   }

        //   if(roll>2.8*hei+4*wid){

        //   }

    });

});
