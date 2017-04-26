var game = new Phaser.Game(600, 450, Phaser.AUTO, 'phaser-example',{ preload: preload, create: create, update: update });
// 600 game width;
// componets
var player;
var dreams;
var enemy;
var block;
var scare1;
// others
var pause;
var time;
var gameover;
var score;
var restart;
var introtext;
//maths
var random;
var score2;
var amount = 1000; //1000
var number = 650; //300
function preload() {
  game.load.image('player','asset/catcherz.png');
  game.load.image('enemy','asset/dream.png');
  game.load.image('startB','asset/startbutton.png');
  game.load.image('pauseButton','asset/puasebuttonz.png');
  game.load.image('restart','asset/restart.png');
  game.load.image('nightmarez','asset/nightmare.png');
  game.load.image('block', 'asset/block.png');
  game.load.image('scare1', 'asset/scare.jpg');
  game.load.image('scare2', "asset/scare2.jpg");
  game.load.image('scare3','asset/scare3.jpg');
}

function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);
game.stage.backgroundColor = '#000033'
score2 = 0;

player = game.add.sprite(250,450, "player");
game.physics.arcade.enable(player);
player.body.collideWorldBounds = true;
player.body.static = true;
player.body.allowGravity = false;
player.inputEnabled = true;
player.input.enableDrag();
player.input.allowVerticalDrag = false;

dreams = game.add.group();
dreams.enableBody = true;
dreams.physicsBodyType = Phaser.Physics.ARCADE;
for (var i = 0; i < amount; i++){
enemy = dreams.create(this.world.randomX,50 * -i, "enemy");
enemy.enableBody = true;
enemy.body.velocity.y = 50;
}
block = game.add.sprite(-100,460, 'block');
block.enableBody = true;
block.scale.setTo(3,1);
game.physics.arcade.enable(block);
block.body.static = true;
block.body.allowGravity = false;
block.body.immoveable = false;

//nightmares
nightmares = game.add.group();
nightmares.enableBody = true;
nightmares.physicsBodyType = Phaser.Physics.ARCADE;
for (var j = 0; j < number; j++){
  night = nightmares.create(this.world.randomX, -100 * j -200, "nightmarez");
  night.enableBody = true;
  night.body.velocity.y = 50;
}
// start
introtext = this.game.add.text(200, 150, "Dream Catcher", { font: "30px"} );
introtext.fill = '#F0F8FF';

startbutton = game.add.sprite(225,200,'startB');
startbutton.inputEnabled = true;
startbutton.events.onInputDown.add(start, this);
// pause button
pauseButton = game.add.sprite(550,20,"pauseButton");
pauseButton.inputEnabled = true;
pauseButton.events.onInputUp.add(pausing, this);
//pauseButton.events.onInputDown.add(unpauseB, this);

game.input.onUp.add(unpause, this);
//score
score = 0;
Gtext = this.game.add.text(10, 10, "Dreams caught: " + score, { font: "20px"} );
Gtext.fill = '#F0F8FF';


//game.time.events.repeat(Phaser.Timer.SECOND, 5 ,timeLoopz, this);
//game.time.events.loop(Phaser.Timer.SECOND ,timeLoopz, this);

game.paused = true;
}

function update() {
game.physics.arcade.overlap(player, dreams, hit, null, this);
game.physics.arcade.overlap(block, dreams, dreamnothing, null, this);
game.physics.arcade.overlap(block, nightmares, donothing, null, this);
game.physics.arcade.overlap(player, nightmares, scare, null, this);
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
   {
     player.x -= 5.5;
   }
   else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
   {
     player.x += 5.5;

   }

// thingy

}


function timeLoopz() {
  random = game.rnd.integerInRange(20,280);
  dreams = game.add.group();
  dreams.enableBody = true;
  dreams.physicsBodyType = Phaser.Physics.ARCADE;
  enemy = dreams.create(this.world.randomX,50, "enemy");
  game.physics.arcade.enable(enemy);
  enemy.body.velocity.y = 150;
  enemy.body.static = true;
console.log("lolz");

}

function hit(player, dreams) {

  score += 1;
  score2++;
    console.log("hit! and score: " + score2);
    Gtext.text = "Dreams caught: " + score;
  dreams.kill();

  if(score2 === amount){
    console.log("you win!");
    win = this.game.add.text(240, 100, "You won!", { font: "30px"} );
    win.fill = '#F0F8FF';
    restart = game.add.sprite(240,250,'restart');
    restart.inputEnabled = true;
    restart.events.onInputUp.add(restartz, this);
      game.paused = true;
  } else {
    console.log("more logging!");
  }
  return score2;
  return score;
}

function killz(block, dreams) {
  dreams.destroy();
  gameover = this.game.add.text(65, 100, "You lost one!", { font: "30px"} );
  gameover.fill = '#F0F8FF';
  console.log("killz!!!!");
  game.paused = true;
  pauseButton.destroy();
}

function scare(player, nightmares) {
 var a = Math.random();
  console.log("Roar!!!!!" + a);
nightmares.destroy();
if (a < 0.33){
   scare1 = game.add.sprite(145,100,'scare1');
   scare1.scale.setTo(0.5,0.5);
} else if ((a > 0.33) && (a < 0.66)){
  scare2 = game.add.sprite(200,100,'scare2');
  scare2.scale.setTo(0.5,0.5);
} else if ( a > 0.66){
  scare3 = game.add.sprite(190,90,'scare3');
  scare3.scale.setTo(0.5,0.5);
}

 restart = game.add.sprite(240,370,'restart');
 restart.inputEnabled = true;
 restart.events.onInputUp.add(restartz, this);
 gameover = this.game.add.text(150, 50, "you caught a nightmare!", { font: "30px"} );
 gameover.fill = '#F0F8FF';
 //scare1.scale.setTo(0.5,0.5);
 game.paused = true;

// game
}

function donothing(block, nightmares) {

nightmares.destroy();
console.log("nightmare is destroyed!");

}

function dreamnothing(block, dreams) {
    score2 += 1;
    dreams.destroy();
    console.log(score2);
    if (score2 === amount ){
      win = this.game.add.text(265, 100, "You won!", { font: "30px"} );
      win.fill = '#F0F8FF';
      restart = game.add.sprite(75,250,'restart');
      restart.inputEnabled = true;
      restart.events.onInputUp.add(restartz, this);
        game.paused = true;
      console.log("you win");
    }
     return score2;
}

function pausing() {
game.paused = true;

// restart button
/*
restart = game.add.sprite(75,200,'restart');
restart.inputEnabled = true;
restart.events.onInputUp.add(restartz, this);
*/
    console.log("paused!");

}

function unpause() {
  game.paused = false;

  console.log("unpause!");
}

function restartz() {
game.state.restart();
console.log("restarted");
}

function start() {
  game.paused = false;
  startbutton.destroy();
  introtext.destroy();
}

function unpauseB() {
  restart.destroy();
  game.paused = false;
  console.log("unpause!");
}
