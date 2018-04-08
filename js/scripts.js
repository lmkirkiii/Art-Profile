// Buisness Logic.
var foodie = function(food){
  if(food === "Curry"){
    return "Ingredients Are: Starch, Corn, Crispy Noodles, Curry Powder."
  }else if (food === "Stew"){
    return "Pizza & Ice Cream"
  }
};


//User Interface Logic
$(document).ready(function(){
  $("#me").click(function(){
    $("#zone").fadeOut();
    $("#zone2").fadeIn();
    $("#frick").slideDown(4000);
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

  $("#frick").click(function(){
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
    $("body").removeClass("ello");
    $("body").addClass("starz");
  });

  //Grid All

  //Max

  $("#max").click(function(){
    $("#selfie").fadeOut(500);
    $("#ruins").fadeOut(1000);
    $("#angel").fadeOut(800);
    $("#abs").fadeOut(2000);
    $("#cutter").fadeOut(1500);
    $("#max").fadeOut(8000);
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
    $("#selfie").fadeOut(500);
    $("#ruins").fadeOut(1000);
    $("#angel").fadeOut(700);
    $("#abs").fadeOut(2000);
    $("#cutter").fadeOut(1500);
    $("#max").fadeOut(800);

    $("#prayer").slideDown(10000);

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




});
