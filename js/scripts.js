$(document).ready(function() {
  $(".clickable01").click(function() {
    $("#pic_01-showing").toggle();
    $("#pic_01-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable02").click(function() {
    $("#pic_02-showing").slideToggle();
    $("#pic_02-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable03").click(function() {
    $("#pic_03-showing").fadeToggle();
    $("#pic_03-hidden").fadeToggle();
  });
});

$(document).ready(function() {
  $(".clickable04").click(function() {
    $("#pic_04-showing").fadeToggle();
    $("#pic_04-hidden").fadeToggle();
  });
});
