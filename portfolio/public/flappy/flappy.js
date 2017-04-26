var game = new Phaser.Game(300, 520, Phaser.AUTO, 'game',
 { preload: preload, create: create, update: update });

var bg;
var floor;
var player;
var toppipe;
var bottompipe;
var pipes;
var timer;
var space;
var start;
var button;
var jump;
function preload() {
  game.load.spritesheet('sheet', 'sheet.png',148,426,-1,-158,0);
  game.load.spritesheet('floor', 'floor.png');
  game.load.spritesheet('player','player.png',30,25,1);
  game.load.spritesheet('toppipe', 'top.png');
  game.load.spritesheet('bottompipe', 'bottom.png');
  game.load.spritesheet('pipe', 'pipe.png');
}

function create() {
// game attributes
game.physics.startSystem(Phaser.Physics.ARCADE);

//  Set the world (global) gravity
game.physics.arcade.gravity.y = 200;

// add background
bg = game.add.sprite(0, 0, 'sheet');
bg.frame = 1;
bg.scale.setTo(2.5,1.27);

floor = game.add.sprite(-5, 460, 'floor');
floor.frame = 1;
floor.scale.setTo(2,1.5);
floor.position.z = 2;
game.physics.enable( floor , Phaser.Physics.ARCADE);
floor.body.allowGravity = false;

player = game.add.sprite(70,240,'player');
player.frame = 1;
player.scale.setTo(2,2);
game.physics.enable( player , Phaser.Physics.ARCADE);
player.body.static = true;
player.body.allowGravity = true;
player.body.collideWorldBounds=true;

player.body.onCollide = new Phaser.Signal();
player.body.onCollide.add(hit, this);

// game start text

start = game.add.text(25,173,"Click to start!",{font: "30px monospace"});
jump = game.add.text(35, 213, "Space to jump.", {font: "30px monospace"});
start.inputEnabled = true;
// user input
button = game.input.onDown.add(Start);
this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
timer = game.time.events.loop(Phaser.Timer.SECOND * 3, Loop, this);
game.paused = true;
}

function update() {

game.physics.arcade.collide(player, floor, collisionHandler, null, this);
game.physics.arcade.overlap(player, toppipe, hit, null, this);
game.physics.arcade.overlap(player, bottompipe, hit, null, this);
if (this.space.isDown)
{
  player.body.velocity.y = -250;

}
 else if(this.space.isUp)
{
  player.body.velocity.y = 100;
}

}
//collisions
function collisionHandler (player, floor) {

game.paused = true;
}

 function Loop() {
  pipes = game.add.physicsGroup();

  var posy = game.rnd.integerInRange(-20,50);
  //creation of sprites
  toppipe = game.add.sprite(200, posy, 'toppipe'); // top pipe
  bottompipe = game.add.sprite(200, posy + 350, 'bottompipe'); // bottom pipe


   pipes.add(toppipe);
   pipes.add(bottompipe);
   game.physics.enable( toppipe , Phaser.Physics.ARCADE);
   game.physics.enable( bottompipe , Phaser.Physics.ARCADE);
   // toppipe attributes
   toppipe.scale.setTo(1.5,1.5);
   toppipe.body.static = true;
   toppipe.body.allowGravity = false;
   toppipe.body.velocity.x = -50;
   toppipe.body.immoveable = false;
   // bottompipe attributes
   bottompipe.scale.setTo(1.5,1.5);
   bottompipe.body.static = true;
   bottompipe.body.allowGravity = false;
   bottompipe.body.velocity.x = -50;
   bottompipe.body.immoveable = false;


}

function hit(player,pipes) {

  this.game.add.text(75,173,"You lose",{font: "30px monospace"});
  this.game.add.text(23,213,"Click to restart",{font: "30px monospace"});

  game.paused = true;
  button = game.input.onDown.add(Restart);

}

function Start(){
  if (game.paused){
    game.paused = false;
    start.destroy();
    jump.destroy();
  }else {
    game.paused = false;
  }

}
function Restart() {
game.state.restart();
}
