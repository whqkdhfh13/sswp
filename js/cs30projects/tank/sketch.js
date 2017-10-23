// P5.js Template
var tank1;
var tank2;

// Global Variable


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    angleMode(DEGREES);
    createCanvas(800, 600);
    tank1 = new Tank(100, 300, 20, 30, 4, 4, 38, 40, 37, 39, 96, 0);
    tank2 = new Tank(500, 300, 20, 30, 4, 4, 87, 83, 65, 68, 32, 180);
    // Initialize Variable

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // Logic
    tank1.rotate();
    tank2.rotate();
    tank1.event();
    tank2.event();
    tank1.points();
    tank2.points();

    background("black");
    tank1.display();
    tank2.display();
    //console.log(tank1.angle);
    //console.log(tank2.angle);

    for (var i = 0; i < tank1.bullets.length; i++) {
      tank1.bullets[i].logic();
      tank1.bullets[i].display();
      if (tank1.bullets[i].status) {
        tank1.bullets.splice(i, 1);
      }
    }

    for (var i = 0; i < tank2.bullets.length; i++) {
      tank2.bullets[i].logic();
      tank2.bullets[i].display();
      if (tank2.bullets[i].status) {
        tank2.bullets.splice(i, 1);
      }
    }

    console.log(tank1.bullets.length);

}

function keyPressed() {
  if (keyCode === tank1.k5 && tank1.bullets.length < 3) {
    tank1.bullets.push(new Bullet(tank1));
  }

  if (keyCode === tank2.k5 && tank2.bullets.length < 3) {
    tank2.bullets.push(new Bullet(tank2));
  }
}
