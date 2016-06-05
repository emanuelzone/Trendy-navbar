// Scroll to top

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
console.log('Scroll to top is ready.');	
});

$(document).ready(function(){
$( ".intro" ).fadeTo( 1000, 1 );
$( ".intro-heading" ).fadeTo( 2000, 1 );
$( ".intro-text" ).fadeTo( 3200, 1 );
$( ".intro-menu" ).fadeTo( 2200, 1 );
console.log('Fadein is ready.');
});


$(document).ready(function(){
var menu = $(".sticky-nav");
$(window).scroll(function(){
  //more then or equals to
  if($(window).scrollTop() >= 462 ){
       menu.fadeIn(600);

  //less then 100px from top
  } else {
     menu.fadeOut(100);

  }
});
console.log('Sticky nav is ready.');
});


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
console.log('Hideme is ready.');
});

// Background Theme


$(document).ready(function(){
    $("#black").click(function(){
	$("body").removeClass("blue");
	$("body").removeClass("grey");
        $("body").addClass("black");
	$("body, html").fadeIn(100);
	});
});

$(document).ready(function(){
    $("#blue").click(function(){
	$("body").removeClass("black");
	$("body").removeClass("grey");
        $("body").addClass("blue");
	$("body, html").fadeIn(100);
	});
});

$(document).ready(function(){
    $("#grey").click(function(){
	$("body").removeClass("black");
	$("body").removeClass("blue");
        $("body").addClass("grey");
	$("body, html").fadeIn(100);
	});
});


// Font Theme


$(document).ready(function(){
    $("#dosis").click(function(){
	$("body").removeClass("montserrat");
	$("body").removeClass("arial");
        $("body").addClass("dosis");
	});
});

$(document).ready(function(){
    $("#montserrat").click(function(){
	$("body").removeClass("dosis");
	$("body").removeClass("arial");
        $("body").addClass("montserrat");
	});
});

$(document).ready(function(){
    $("#arial").click(function(){
	$("body").removeClass("dosis");
	$("body").removeClass("montserrat");
        $("body").addClass("arial");
	});
});


// Mouseover

 $("#1").on("mouseover", function () {
   $('.infotext').text("Welcome page")
$( ".infotext" ).animate({
    opacity: 1,
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });

 $("#1").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });


 $("#2").on("mouseover", function () {
   $('.infotext').text("Who am i?");
 });

 $("#2").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });



 $("#3").on("mouseover", function () {
   $('.infotext').text("Whats my skills?");
 });

 $("#3").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });



 $("#4").on("mouseover", function () {
   $('.infotext').text("Download plugins");
 });

 $("#4").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });



 $("#5").on("mouseover", function () {
   $('.infotext').text("Find me on JSFiddle");
 });

 $("#5").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });



 $("#6").on("mouseover", function () {
   $('.infotext').text("Find me on github");
 });

 $("#6").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });


 $("#7").on("mouseover", function () {
   $('.infotext').text("Get in touch");
 });

 $("#7").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });


 $("#8").on("mouseover", function () {
   $('.infotext').text("Download free plugins");
 });

 $("#8").on("mouseout", function () {
   $('.infotext').text("")
$( ".infotext" ).animate({
    left: "+=50",
  }, 200, function() {
    // Animation complete.
  });

 });
 
 // Text menu
  $(".menu").on("mouseover", function () {
   $('.infotext').text("Open menu");
 });

 $(".menu").on("mouseout", function () {
   $('.infotext').text("")

 });
 // Close menu
   $(".menu-hide").on("mouseover", function () {
   $('.infotext').text("Close menu");
 });

 $(".menu-hide").on("mouseout", function () {
   $('.infotext').text("")
    // Animation complete.
  });


/* Animate */

$(document).ready(function(event){
    $(".menu").stop().click(function(event){
        $(".box1").stop().delay(100).animate({	
            opacity: '1'
        }, 100);

        $(".box2").delay(200).animate({	
            opacity: '1'
        }, 200);

        $(".box3").delay(300).animate({	
            opacity: '1',
        }, 300);

        $(".box4").delay(400).animate({	
            opacity: '1'
        }, 400);

        $(".box5").delay(500).animate({	
            opacity: '1'
        }, 500);

        $(".box6").delay(600).animate({	
            opacity: '1'
        }, 600);

        $(".box7").delay(700).animate({	
            opacity: '1'
        }, 700);

    });
	console.log('Menu is ready.');
});

$(document).ready(function(){
    $(".menu").click(function(){
        $(".boxes").stop().toggle(200);
    });
});

/* Hide*/


$(document).ready(function(){
    $(".menu-hide").click(function(){
        $(".boxes").stop().toggle(800);
    });
});

$(document).ready(function(){
    $(".menu-hide").stop().click(function(){
        $(".box1").stop().animate({	
            opacity: '0'
        }, 800);

        $(".box2").stop().animate({	
            opacity: '0'
        }, 700);

        $(".box3").stop().animate({	
            opacity: '0'
        }, 600);

        $(".box4").stop().animate({	
            opacity: '0'
        }, 500);

        $(".box5").stop().animate({	
            opacity: '0'
        }, 400);

        $(".box6").stop().animate({	
            opacity: '0'
        }, 300);

        $(".box7").stop().animate({	
            opacity: '0'
        }, 200);

    });
});

$(".menu-hide").click(function(){
    $(".menu-hide").hide();
$(".menu").stop().show();
	$(".menu-hide").stop();

});

$(".menu").click(function(){
    $(".menu").hide();
$(".menu-hide").show();
	$(".menu-hide").stop();

});




/* Settings */



$(".settings").click(function(){
    $(".settings-wrapper").fadeIn("slow");

});

$(".settings-close").click(function(){
    $(".settings-wrapper").fadeOut("fast");

});

$(".settings").click(function(){
	$(".settings").fadeOut('fast');
	$(".settings-close").show();
});

$(".settings-close").click(function(){

	$(".settings").fadeIn(1200);
});



/* Bookmark */


var $root = $('html, body');
$('.bmk').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});


/* Skillbars */


$(document).ready(function(){
    $(".skill-btn-1").click(function(){
        var div = $(".html");
        div.animate({width: '90%', opacity: '1'}, 1000);
        var div = $(".css");
        div.animate({width: '85%', opacity: '1'}, 1400);
        var div = $(".php");
        div.animate({width: '30%', opacity: '1'}, 1600);
        var div = $(".javascript");
        div.animate({width: '50%', opacity: '1'}, 1800);
    });
});

$(document).ready(function(){
    $(".skill-btn-2").click(function(){
        var div = $(".illustrator");
        div.animate({width: '75%', opacity: '1'}, 1000);
        var div = $(".photoshop");
        div.animate({width: '60%', opacity: '1'}, 1400);
        var div = $(".indesign");
        div.animate({width: '40%', opacity: '1'}, 1600);
        var div = $(".fireworks");
        div.animate({width: '90%', opacity: '1'}, 1600);

    });
});

$(document).ready(function(){
    $(".skill-btn-3").click(function(){
        var div = $(".dreamweaver");
        div.animate({width: '70%', opacity: '1'}, 1000);
        var div = $(".wordpress");
        div.animate({width: '85%', opacity: '1'}, 1400);
        var div = $(".episerver");
        div.animate({width: '70%', opacity: '1'}, 1800);
        var div = $(".office");
        div.animate({width: '62%', opacity: '1'}, 1800);

    });
});

