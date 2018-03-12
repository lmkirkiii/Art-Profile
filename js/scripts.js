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
  $("form").submit(function(event){
    event.preventDefault();
    var food = $("input#forminput").val();
    var result= foodie(food);
    $("#result").text(result);

  });
});
