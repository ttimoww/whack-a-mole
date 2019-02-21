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
      $(this.element).css('bottom', '-100%');
      $(this.element).unbind('click');
    }, time)
  }

  setListener(){
    $(this.element).click(function() {
      console.log('score');
      game.increaseScore();
    });
  }
}
