

Reveal.initialize();


$(document).ready(function(){


setInterval(function() {
  $(".cat").toggleClass("blink").delay(500);
  $(".cat").toggleClass("lolz");
  console.log("toggled!");
}, 500);


});
