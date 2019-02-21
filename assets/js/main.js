$(document).ready(function() {
  const game = new Game();
  
  $('#start-game').click(function(event) {
    game.startGame();
  });
});
