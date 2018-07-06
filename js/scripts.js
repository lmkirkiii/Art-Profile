


//User Interface Logic
$(document).ready(function(){
  $("#me").click(function(){
    $("#zone").fadeOut();
    $("#zone2").fadeIn();
    $("#hello").slideDown(4000);
    $("body").addClass("ello");
  });
  $("#me").hover(function(){
    $("#meep").toggle();
  });

  $("#zone2").click(function(){
    $("#zone2").fadeOut();
    $("#grid1").fadeIn();
    $("#grid2").fadeIn("slow");
    $(".hub").fadeOut();
    $("#zone3").fadeOut();
    $("body").removeClass("starz");
    $("body").addClass("red");
  });

  //Grid All

  //Max

  $("#max").click(function(){
    $("#selfie").fadeOut(500);
    $("#ruins").fadeOut(1000);
    $("#angel").fadeOut(800);
    $("#abs").fadeOut(2000);
    $("#cutter").fadeOut(1500);
    $("#max").fadeOut(2000);
    $("#megaMax").fadeIn(7000);

    $("body").removeClass("red");
    $("body").addClass("spiral");
  });

  $("#megaMax").click(function(){
    $("#megaMax").fadeOut(5000);
    $("#facez").fadeIn(1000);
  });

  $("#facez").click(function(){
    $("#selfie").fadeIn(500);
    $("#ruins").fadeIn(1000);
    $("#angel").fadeIn(800);
    $("#abs").fadeIn(2000);
    $("#cutter").fadeIn(1500);
    $("#max").fadeIn(8000);
    $("#facez").fadeOut(500);

    $("body").removeClass("spiral");
    $("body").addClass("red");
  });

  //Angel of the Night.

  $("#angel").click(function(){
    $("#selfie").fadeOut(500);
    $("#ruins").fadeOut(1000);
    $("#angel").fadeOut(8000);
    $("#abs").fadeOut(2000);
    $("#cutter").fadeOut(1500);
    $("#max").fadeOut(800);
    $("#angelic").fadeIn(7000);

    $("body").removeClass("spiral");
    $("body").addClass("citay");
  });

  $("#angelic").click(function(){
    $("#selfie").fadeIn(500);
    $("#ruins").fadeIn(1000);
    $("#angel").fadeIn(800);
    $("#abs").fadeIn(2000);
    $("#cutter").fadeIn(1500);
    $("#max").fadeIn(8000);
    $("#angelic").fadeOut(500);

    $("body").removeClass("citay");
    $("body").addClass("red");
  });

  //Fashion Show

  $("#selfie").click(function(){
    $("#selfie").slideUp(1000);
    $("#ruins").slideUp(1000);
    $("#angel").slideUp(1000);
    $("#abs").slideUp(1000);
    $("#cutter").slideUp(1000);
    $("#max").slideUp(1000);

    $("#prayer").slideDown(3000);

    $("body").removeClass("red");
    $("body").addClass("fashion");
  });

  //Fashion Show off

  $("#prayer").click(function(){
    $("#prayer").slideUp(1000);
    $("#roses").slideDown(3000);
    $("body").removeClass("fashion");
    $("body").addClass("floral");
  });
  $("#roses").click(function(){
    $("#roses").slideUp(1000);
    $("#artiste").slideDown(3000);
    $("body").removeClass("floral");
    $("body").addClass("paris");
  });
  $("#artiste").click(function(){
    $("#artiste").slideUp(1000);
    $("#artheads").slideDown(2000);
  });
  $("#artheads").click(function(){
    $("#artheads").fadeOut(800);
    $("#heart").fadeIn(1500);
  });
  $("#heart").hover(function(){
    $("#heady").slideDown(500);
  });
  $("#heady").hover(function(){
    $("#heady").slideUp(500);
    $("#heart").slideUp(600);
    $("#duke").slideDown(2000)
    $("body").removeClass("paris");
    $("body").addClass("abstract");
  });
  $("#duke").click(function(){
    $("#duke").slideUp(1000);
    $("#night").slideDown(3000);
    $("body").removeClass("abstract");
    $("body").addClass("tempo");
  });
  $("#night").click(function(){
    $("#night").slideUp(1000);
    $("#nighty").slideDown(3000);
  });
  $("#nighty").click(function(){
    $("#nighty").slideUp(1000);
    $("#zoid").slideDown(3000);
    $("body").removeClass("tempo");
    $("body").addClass("computer");
  });
  $("#zoid").click(function(){
    $("#zoid").slideUp(1000);
    $("#slider").slideDown(3000);
    $("#slider").animate({
       left: '250px',
       opacity: '0.5',
       height: '+=150px',
       width: '+=150px'
     });
   });

   $("#slider").click(function(){
    $("#slider").animate({
      right: '250px',
      opacity: '1',
      height: '700px',
      width: '850px'
    });
  });

  $("#slider").click(function(){
    $("body").removeClass("computer");
    $("body").addClass("zyborg");
  });

  $("#slider").click(function(){
   $("#slider").animate({
     opacity: '0.3',
     height: '100px',
     width: '80px'
   });
   $("#slider2").slideDown();
 });
  $("#slider2").click(function(){
    $("#slider").slideUp(100);
    $("#slider2").fadeOut(1000);
    $("#polka").slideDown(3000);
    $("body").removeClass("zyborg");
    $("body").addClass("dot");
  });
  $("#polka").click(function(){
    $("#polka").slideUp(1000);
    $("#seven1").slideDown(3000);
    $("#seven2").slideDown(2000);
    $("#seven3").slideDown(3300);
    $("#seven4").slideDown(1500);
    $("#seven5").slideDown(3800);
    $("#seven6").slideDown(3900);
    $("#seven7").slideDown(4000);
    $("#seven8").slideDown(3990);
    $("#seven9").slideDown(2900);
    $("#seven10").slideDown(1050);
    $("#seven11").slideDown(2300);
    $("#seven12").slideDown(3344);
    $("#seven13").slideDown(2300);
    $("#seven14").slideDown(1234);
    $("#seven15").slideDown(1340);
    $("#seven16").slideDown(3330);
    $("#seven17").slideDown(1717);
    $("#seven18").slideDown(444);
    $("#seven19").slideDown(1920);
    $("#seven20").slideDown(1992);
    $("#seven21").slideDown(1993);
    $("#seven22").slideDown(1994);
    $("#seven23").slideDown(2222);
    $("#seven24").slideDown(2001);
    $("#seven25").slideDown(1492);
    $("#seven26").slideDown(1716);
    $("#seven27").slideDown(1812);
    $("body").removeClass("dot");
    $("body").addClass("seven");
  });
  $("#seven17").click(function(){
    $("#seven1").slideUp(3000);
    $("#seven2").slideUp(2000);
    $("#seven3").slideUp(3300);
    $("#seven4").slideUp(1500);
    $("#seven5").slideUp(3800);
    $("#seven6").slideUp(3900);
    $("#seven7").slideUp(4000);
    $("#seven8").slideUp(3990);
    $("#seven9").slideUp(2900);
    $("#seven10").slideUp(1050);
    $("#seven11").slideUp(2300);
    $("#seven12").slideUp(3344);
    $("#seven13").slideUp(2300);
    $("#seven14").slideUp(1234);
    $("#seven15").slideUp(1340);
    $("#seven16").slideUp(3330);
    $("#seven17").slideUp(1717);
    $("#seven18").slideUp(444);
    $("#seven19").slideUp(1920);
    $("#seven20").slideUp(1992);
    $("#seven21").slideUp(1993);
    $("#seven22").slideUp(1994);
    $("#seven23").slideUp(2222);
    $("#seven24").slideUp(2001);
    $("#seven25").slideUp(1492);
    $("#seven26").slideUp(1716);
    $("#seven27").slideUp(1812);
    $("#seven28").slideDown(3000);
    $("body").removeClass("seven");
    $("body").addClass("blues");

  });
  $("#seven28").click(function(){
    $("#seven28").slideUp(1000);
    $("#nightLove").slideDown(3000);
    $("body").removeClass("blues");
    $("body").addClass("last");
  });

  $("#nightLove").click(function(){
    $("#yuppie").fadeIn(2000);
    $("#sussy").slideDown(1000);
    $("#fussy").fadeIn(3000);
    $("#nufsaid").slideUp(9000);
    $("#lussy").fadeIn(2500);
    $("#yuppie1").fadeIn(2000);
    $("#sussy1").slideDown(1000);
    $("#fussy1").fadeIn(3000);
    $("#nufsaid1").slideUp(9000);
    $("#lussy1").fadeIn(2500);
    $("#nightLove").fadeOut(1000);
    $("#zone2").fadeIn(1000);
    $("body").removeClass("last");
    $("body").addClass("starz");
  });

  $("#hello").click(function(){
    $("#selfie").fadeIn(500);
    $("#ruins").fadeIn(1000);
    $("#angel").fadeIn(800);
    $("#abs").fadeIn(2000);
    $("#cutter").fadeIn(1500);
    $("#max").fadeIn(8000);
    $("#frick").fadeOut(500);

    $("body").removeClass("starz");
    $("body").addClass("red");
  });
  // Character Heaven


});
