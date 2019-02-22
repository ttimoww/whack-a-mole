class Game{
  constructor(){
    this.moles = this.initMoles();
    this.model = new Model();
    this.score = 0,
    this.gameDuration = 30000
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
    $('#current-score').html(this.score);
    for (var i = 0; i < this.moles.length; i++) {
      $(this.moles[i].element).css('bottom', '-100%');
    }
    this.startGameLoop(this.gameDuration, 500)
  }

  /**
  * Start the main loop of the game
  * @param {number} time Time (in ms) the game should run before stopping
  * @param {number} time Time (in ms) between the moles to show up
  */
  startGameLoop(gameTime, spawnTime){
    const randTime = (min, max) => { return Math.round(Math.random() * (max - min) + min)}
    const randMole = () =>{ return this.moles[Math.floor(Math.random() * this.moles.length)]}
    let remainingTime = Math.round(gameTime / 1000);
    $('#game-timer').html(remainingTime);

    const gameTimer = setInterval(() =>{
      remainingTime -= 1;
      $('#game-timer').html(remainingTime);
    }, 1000)

    const gameLoop = setInterval(() =>{
      const time = randTime(500, 1800);
      const mole = randMole();

      mole.showMole(time);

    }, spawnTime);

    setTimeout(() =>{
      this.endGame(gameLoop, gameTimer)
    }, gameTime);
  }

  /**
  * Increases the current score by 1 and plays sound
  */
  increaseScore(){
    this.score += 1;
    $('#current-score').html(this.score);

    var sound = document.createElement("audio");
    sound.src = '/sounds/score.wav';
    sound.volume = 0.1;
    sound.autoPlay = false;
    sound.preLoad = true;
    sound.play();
  }

  /**
  * End the game loop
  * @param {interval} gameLoop The main game loop that has to be stopped.
  * @param {interval} gameTimer The main game timer that has to be stopped.
  */
  endGame(gameLoop, gameTimer){
    console.log('Game end');
    for (var i = 0; i < this.moles.length; i++) {
      this.moles[i].hideMole();
    }
    clearInterval(gameLoop);
    clearInterval(gameTimer);
    $('#game-timer').html('0');
    this.model.save(this.score);
  }
}
