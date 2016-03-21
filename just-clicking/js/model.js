// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function(_) {

  var _currentPlayerScore = 0;
  var _squares = [0,0,0,0,0,0,0,0,0];

  var getScore = function(){
    return _currentPlayerScore;
  };

  var getSquares = function(){
    return _squares;
  };

  var activateRandomSquare =function(){
    var counter = false;
  
    for( var i = 0; i < _squares.length; i++){
      if(_squares[i] === 0 && !counter){
        _squares[i] = _.random(0,1);
        counter = true;
      }
    }
  };

  var processSquareClick= function(i){
      if(_squares[i] === 1){
        _squares[i] = 0;
        _currentPlayerScore += 10;
      }
  };

return{
  getScore: getScore,
  getSquares: getSquares,
  activateRandomSquare: activateRandomSquare,
  processSquareClick: processSquareClick
};

})(_);


