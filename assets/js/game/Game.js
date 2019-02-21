class Game{
  constructor(){
    this.moles = this.initMoles();
    this.score = 0;
  }

  /**
  * Starts the game:
  * - Hiding all moles
  * - Set score to 0
  */
  startGame(){
    this.score = 0;
    for (var i = 0; i < this.moles.length; i++) {
      $(this.moles[i].element).css('bottom', '-100%');
    }
  }

  /**
  * Initialise moles on the game board.
  */
  initMoles(){
    let moles = [];
    $('.hole__mole').each(function() {
      const m1 = new Mole(this);
      moles.push(m1);
    });
    return moles;
  }

  /**
  * Increases the current score by 1
  */
  increaseScore(){
    this.score += 1;
  }
}
