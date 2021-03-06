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

var randomSpeed = getRandomInt(75, 250);
var Enemy = function(x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = getRandomInt(50, randomSpeed);

  // console.log(this);

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
  var ts = Math.round((new Date()).getTime() / 1000);
    this.x = this.x + (this.speed * dt);
      if(this.x > 505) {
        this.x = 0;

      }
    // console.log(this.x);


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
  this.speed = 2;

};

Player.prototype.update = function() {

};

Player.prototype.collision = function() {

};

Player.prototype.handleInput = function(key) {
  switch (key) {
  case "up":
    this.y = this.y - 15;
    if(this.y < -5)
      this.y = -4;
    break;
  case "down":
    this.y = this.y + 15;
    if(this.y > 400)
      this.y = 399;
    break;
  case "right":
    this.x = this.x + 15;
    if(this.x >400)
      this.x = 399;
    break;
    case "left":
      this.x = this.x - 15;
      if(this.x < 5)
        this.x = 6;
      break;
}

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-500, 75), new Enemy(-200, 225), new Enemy(-510, 300)];
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
