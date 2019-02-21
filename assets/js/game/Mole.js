class Mole{
  constructor(el){
    this.element = el;
  }

  /**
  * Make the mole schow it's head out of his hole
  * @param {number} time Time (in ms) the mole will be visible.
  */
  showMole(time){
    this.setListener();
    $(this.element).css('bottom', '0');
    setTimeout(() => {
      this.hideMole();
    }, time)
  }

  /**
  * Hide the mole
  */
  hideMole(){
    $(this.element).css('bottom', '-100%');
  }

  /**
  * Set event listener on mole in the DOM to increase the score
  */
  setListener(){
    $(this.element).click(() => {
      game.increaseScore();
      this.hideMole();
      $(this.element).off();
    });
  }
}
