$(document).ready(function(){
    $(".par").hover(function(){
        $(this).css("color", "yellow");
        }, function(){
        $(this).css("color", "grey");
    });
});