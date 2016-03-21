// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(model, view) {

  var init = function(){
    view.init(onClick);
    setInterval(gameLoop, 1000);
  };

  var gameLoop = function(){
    model.activateRandomSquare();
    updateView();
  }; 

  var onClick = function(i){
    model.processSquareClick(i);
    updateView();
  };

  var updateView = function(){
    view.updateSquares(model.getSquares());
    view.updateScore(model.getScore());
  };

return{
  init:init
};


})(JC.model, JC.view);