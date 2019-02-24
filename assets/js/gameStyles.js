$(window).resize(function() {
  setHoleHeight();
});

$(document).ready(function() {
  setHoleHeight()
});

const setHoleHeight = function(){
  const $mole = $('.hole__mole');
  const $hole = $('.hole');
  $hole.height($mole.height());
}
