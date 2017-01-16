var player = new player();
var enemies = [];
var gameStatus = "run";
var timer = 0;
var items = [];

function pwrUp() {
    this.x = random(0, 580);
    this.y = random(0, 580);
    this.display = function() {
        ellipse(this.x, this.y, 30);
    }
}

function spawnEnemy(){
    this.x = 200;
    this.y = 20;
    this.size = 20;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > player.x) {
            this.xSpeed = -2;
        } else if (this.x < player.x) {
          this.xSpeed = 2;
        } else if (this.x === player.x) {
          this.xSpeed = 0;
        }

        if (this.y > player.y) {
            this.ySpeed = -2;
        } else if (this.y < player.y) {
          this.ySpeed = 2;
        } else if (this.y === player.y) {
          this.ySpeed = 0;
        }

    };

    this.display = function() {
      fill(255, 0, 0);
      rect(this.x, this.y, this.size, this.size);
    };

    this.bump =function(){
      if(dist(this.x,this.y,player.x,player.y) < 20) {
          enemies.splice(0, enemies.length);
          return true;
      } else {
        return false;
      }
    }
}
function setup() {
  createCanvas(600,600);
  enemies.push(new spawnEnemy());
  player.x = 300;
  player.y = 300;
  timer = 0;
}

function draw() {
  if (gameStatus == "run") {

    background(0);
    timer++;
    fill(255, 255, 0);
    rect(200, 0, 20, 20);
    player.display();
    player.logic();
    if (frameCount % 180 === 0) {
      enemies.push(new spawnEnemy());
    }

    if (frameCount % 300 === 0) {
      items.push(new pwrUp());
    }

    if (frameCount % 300 === 180) {
      items.splice(0, 1);
    }

    for (var j = 0; j < items.length; j++) {
        items[j].display();
        if (dist(items[j].x, items[j].y, player.x, player.y) < 25) {
            enemies.splice(0, enemies.length);
        }
    }

    for (var i = 0; i < enemies.length; i++) {
      enemies[i].update();
      enemies[i].display();
      if (enemies[i].bump()) {
          gameStatus = "finish"
      }
    }


  } else if (gameStatus == "finish") {
    background(150);
    text("Good job! You lived for " + floor((timer + 60) / 60) + "sec!", 200, 300);

  }

}

function keyPressed() {
  if (keyCode == 37) {
    player.xSpeed = -3;
  }
  if (keyCode == 38) {
    player.ySpeed = -3;
  }
  if (keyCode == 39) {
    player.xSpeed = 3;
  }
  if (keyCode == 40) {
    player.ySpeed = 3;
  }
  if (keyCode == 32) {
    if (gameStatus == "finish") {
      gameStatus = "run";
      setup();
    }
  }
}

function keyReleased() {
  if (keyCode == 37) {
    player.xSpeed = 0;
  }
  if (keyCode == 38) {
    player.ySpeed = 0;
  }
  if (keyCode == 39) {
    player.xSpeed = 0;
  }
  if (keyCode == 40) {
    player.ySpeed = 0;
  }
}

function player() {
    this.x = 300;
    this.y = 300;
    this.size = 20;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.logic = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };

    this.display = function() {
      fill(0, 0, 255);
        rect(this.x, this.y, this.size, this.size);
    };


}
