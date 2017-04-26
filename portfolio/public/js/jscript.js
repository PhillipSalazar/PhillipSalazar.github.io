$(document).ready(function() {

$(".ang-nav").mousedown(function() {
  $(this).css("background-color","black");
  $(this).css("color","white");
});

$(".ang-nav").mouseup(function() {
  $(this).css("background-color","white");
  $(this).css("color","black");
});

// noder button
$("#noder-button").mouseover(function() {
  $(this).css("background-color","black");
  $(this).css("color","white");
});

$("#noder-button").mouseout(function() {
  $(this).css("background-color","white");
  $(this).css("color","black");
});
/*
$().click(function(){

});

$().click(function(){

});
*/
});
