 $(document).ready(function () {
    $('.yumm').slideDown(2000);
    $(".yumm").click(function(){
      $(".yumm").slideUp(1000);
      $(".Tumm").show(100);
      $("body").addClass("classOne");
    });
    $(".Tumm").click(function () {
      $(".Tumm").slideUp(1000);
      $(".Double").show();
      $(".Tumm1").slideDown(2000);
      $("body").removeClass();
      $("body").addClass("classTwo");
    });
    $(".Tumm1").click(function () {
      $(".Tumm1").slideUp(1000);
      $(".tripple").show();
      $(".Tumm2").slideDown(2000);
      $("body").removeClass();
      $("body").addClass("classThree");
    });
    $(".Tumm2").click(function () {
      $(".Tumm2").slideUp(1000);
      $(".molecule").show();
      $(".Tumm3").slideDown(2000);
      $("body").removeClass();
      $("body").addClass("classFour");
    });
    $(".Tumm3").click(function () {
      $(".Tumm3").slideUp(1000);
      $(".atom").show();
      $(".Tumm4").slideDown(2000);
      $("body").removeClass();
      $("body").addClass("classFive");
    });
    $(".Tumm4").click(function () {
      $(".Tumm4").slideUp(1000);
      $(".newme").slideDown(2000);
      $("body").removeClass();
      
    });


});
