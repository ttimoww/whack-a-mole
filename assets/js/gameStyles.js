$(window).resize(function() {
  const $mole = $('.hole__mole');
  const $hole = $('.hole__hole');
  $hole.css('padding-top', $mole.height() - $hole.height());
});

$(document).ready(function() {
  const $mole = $('.hole__mole');
  const $hole = $('.hole__hole');
  $hole.css('padding-top', $mole.height() - $hole.height());
});
