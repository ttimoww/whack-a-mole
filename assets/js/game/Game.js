class Game{
  constructor(){
    this.moles = this.initMoles();
    this.score = 0;
  }

  /**
  * Initialise moles on the game board.
  */
  initMoles(){
    const self = this;
    let moles = [];
    $('.hole__mole').each(function() {
      const m1 = new Mole(this, self);
      moles.push(m1);
    });
    return moles;
  }

  /**
  * Starts the game:
  * - Set score to 0
  * - Hiding all moles
  * - Set main game loop
  */
  startGame(){
    this.score = 0;
    for (var i = 0; i < this.moles.length; i++) {
      $(this.moles[i].element).css('bottom', '-100%');
    }
    this.startGameLoop(3000, 500)
  }

  /**
  * Start the main loop of the game
  * @param {number} time Time (in ms) the game should run before stopping
  * @param {number} time Time (in ms) between the moles to show up
  */
  startGameLoop(gameTime, spawnTime){
    const randTime = (min, max) => { return Math.round(Math.random() * (max - min) + min)}
    const randMole = () =>{ return this.moles[Math.floor(Math.random() * this.moles.length)]}

    const gameLoop = setInterval(() =>{
      const time = randTime(500, 2000);
      const mole = randMole();

      mole.showMole(time);

    }, spawnTime);

    setTimeout(() =>{
      this.endGame(gameLoop)
    }, gameTime);
  }

  /**
  * Increases the current score by 1
  */
  increaseScore(){
    this.score += 1;
    $('#current-score').html(this.score);
  }

  /**
  * End the game loop
  * @param {function} gameLoop The main game loop that has to be stopped.
  */
  endGame(gameLoop){
    console.log('stop game');
    clearInterval(gameLoop);
  }
}
