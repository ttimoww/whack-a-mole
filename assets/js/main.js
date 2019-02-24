$(document).ready(function() {
  const game = new Game();
  $('#highScore').html(localStorage.highScore);

  $('#start-game').click(function(event) {
    game.startGame();
  });
});
