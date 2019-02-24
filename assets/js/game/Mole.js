class Mole{
  constructor(el, gm){
    this.element = el,
    this.game = gm
  }

  /**
  * Make the mole schow it's head out of his hole
  * @param {number} time Time (in ms) the mole will be visible.
  */
  showMole(time){
    $(this.element).off().unbind('click')
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
    setTimeout(() => {
      $(this.element).off();
    }, 300);
  }

  /**
  * Set event listener on mole in the DOM to increase the score
  */
  setListener(){
    $(this.element).click(() => {
      $(this.element).off();
      this.game.increaseScore();
      console.log('score');
      this.hideMole();
    });
  }
}
