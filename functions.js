
// global color variable
var dog;
$(document).ready(function(){
  $('#yellow').css('background-color', 'yellow');
  $('#red').css('background-color', 'red');
  $('#green').css('background-color', 'green');
  $('#blue').css('background-color', 'blue');
  $('#orange').css('background-color', 'orange');
  $('#cyan').css('background-color', 'cyan');
  $('#pink').css('background-color', 'pink');
  $('#black').css('background-color', 'black');
  $('#white').css('background-color', 'white');
  $('#delete').css('background-color', 'coral');
  $('#save').css('background-color', 'coral');
// yellow button
  $('#yellow').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px yellow');
    dog = stroke('yellow');
  });

  $('#yellow').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px grey');

  });
// red button
  $('#red').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px red');
    dog = stroke('red');
  });

  $('#red').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

// green button
  $('#green').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px green');
    dog = stroke('green');
  });

  $('#green').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

  // blue button
  $('#blue').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px blue');
    dog = stroke('blue');
  });

  $('#blue').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

  // orange button
  $('#orange').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px orange');
    dog = stroke('orange');
  });

  $('#orange').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

// cyan button
  $('#cyan').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px #00FFFF');
    dog = stroke('#00FFFF');
  });

  $('#cyan').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

// pink button
  $('#pink').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px pink');
    dog = stroke('pink');
  });

  $('#pink').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

  //black button
  $('#black').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px black');
    dog = stroke('black');
  });

  $('#black').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });

  // white button
  $('#white').mousedown(function(){
    $(this).css('box-shadow','5px 0px 15px white');
    dog = stroke('white');
  });

  $('#white').mouseup(function(){
    $(this).css('box-shadow','0px 0px 0px #888888');

  });
  // header
    $('h1').animate({top: '3em'});

    $("h1").click(function(){
        $(this).hide();
    });

    /*$("h1").dblclick(function(){
        $(this).();
    });*/
});
// background color




function setup() {

var myCanvas = createCanvas(window.innerWidth-150,window.innerHeight-20);
 myCanvas.parent("can");
  //defaultCanvas0
 strokeWeight(10);

}

function touchMoved() {
 line(touchX, touchY, ptouchX, ptouchY);
dog;
 return false;
}

function clean(){
//var cat = document.getElementById('delete');
  clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function save(){
 saveCanvas('myCanvas', 'jpg');
}
