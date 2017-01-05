// Variables applied to each of our instances go here,
// we've provided one for you to get started

// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
var movers = function(x, y, image) {
  this.sprite = image;
  this.x = x;
  this.y = y;
};


// Enemies our player must avoid
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
};

var Enemy = function(x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = 100;
  // this.speed = getRandomInt(1, speed);
  console.log(this);

}
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  //   var movers = function(x, y, image) {
  //     this.sprite = image;
  //     this.x = x;
  //     this.y = y;
  // };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
  console.log('update');
  console.log(this.speed);
    this.x = this.x + 100;
    console.log(this.x);


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.sprite = 'images/char-pink-girl.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function(dt) {
  console.log("update");
};

Player.prototype.handleInput = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-150, 130), new Enemy(-130, 250), new Enemy(-110, 350)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
