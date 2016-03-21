// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function($) {

  var init= function(onClick){
    $(".square").click(function(event){
      var i = parseInt($(event.target).attr("data-i"));
      onClick(i);
    })

    var $square = $(".square");
    for(var i= 0; i < $square.length; i++){
       $($square[i]).attr('data-i', i);
    } 

  };

 var updateSquares = function(dataSquares){

  for(var i = 0; i < dataSquares.length; i++){
    if(dataSquares[i] === 1){
      $('[data-i="' + i + '"]').addClass('active');
    }
    else{
       $('[data-i="' + i + '"]').removeClass('active');
    }
  }
 };

 var updateScore = function(points){
    $("#score").html(points);
 };

 return {
  init: init,
  updateScore: updateScore, 
  updateSquares: updateSquares
 };

})($);



