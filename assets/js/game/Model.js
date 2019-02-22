class Model{

  /**
  * Save the score to the user's local storage
  * @param {number} score The users score
  */
  save(score){
    if (!localStorage.highScore){
      localStorage.setItem('highScore', score);
      $('#highScore').html(score);
    }
    else if (localStorage.highScore < score) {
      localStorage.setItem('highScore', score);
      $('#highScore').html(score);
    }
  }
}
