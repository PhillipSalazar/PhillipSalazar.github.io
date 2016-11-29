

Reveal.initialize();


$(document).ready(function(){


setInterval(function() {
  $(".cat").toggleClass("blink").delay(500);
  $(".cat").toggleClass("lolz");

//  $("#topleft").toggleClass(".green").delay(500);
//  $("#topleft").toggleClass(".lolz");
//  $(".redp").toggleClass(".lol").delay(500);
//  $(".redp").toggleClass(".lol");

  console.log("toggled!");
}, 500);



});
