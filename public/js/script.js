//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'can', { preload: preload, create: create, update: update });

var map;
var layer;
var clouds;
var mountains
function preload() {

  game.load.image('cloudz','public/images/sky.png');
  game.load.image('mountainz', 'public/images/mountains.png');
}

function create() {
//  this.game.canvas.id = 'blah';
  //game.stage.backgroundColor = '#787878';
  game.stage.backgroundColor = '#6495ED';

}

function update() {
}
