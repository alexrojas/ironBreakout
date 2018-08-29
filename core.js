var x = canvas2.width / 2;
var y = canvas2.height - 30;
var yb = canvas2.height;
var dx = 1.2;
var dy = -2;


var myMusic

// console.log(x);
// console.log(y);

var paddleHeight = 15;
var paddleWidth = 135;
var paddleX = (canvas2.width - paddleWidth) / 2;

var bulletX = paddleX + paddleWidth / 2


var brickRowCount = 5;
var brickColumnCount = 8;
var brickWidth = 50;
var brickHeight = 20;
var brickPadding = 8;
var brickOffsetTop = 40;
var brickOffsetLeft = 30;

var outerRowCount = 1

var lives = 3


var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

var outerBricks = []
for (var c = 0; c < brickColumnCount; c++) {
  outerBricks[c] = []
  for (var r = 0; r < outerRowCount; r++) {
    outerBricks[c][r] = {
      x: 0,
      y: brickRowCount,
      status: 1
    }
  }
}

var score = 0

var myMusic1 = new Audio('./sounds3/laserSound.wav')
// var myMusic2 = new Audio('./sounds3/brickSoun.wav')

function draw() {
  // myMusic.play()

  // console.log(bulletX)

  canvas.clearRect(0, 0, canvas2.width, canvas2.height)
  canvas2.style.background = "black";
// myMusic1.play()
  drawBricks()
  drawOuterBricks()

  drawBall()

  drawBullet()

  drawPaddle()

  collisionDetection()
  outerCollisionDetection()

  drawScore()

  drawLives()
  if (x + dx > canvas2.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy < paddleHeight) {
    dy = -dy;
  } else if (y + dy > canvas2.height - paddleHeight) {
    if (x > (paddleX + 35) && x < (paddleX + paddleWidth) - 35) {
      dy = -dy
    } else if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy * 1.1
      dx = dx * 1.2
    } else {
      lives--
      if(!lives){
        // alert("GAME OVER");
        document.location.reload();
      }
      else{
        x = canvas2.width/2
        y = canvas2.height-30
        dx = 1.2
        dy = -2
        paddleX = (canvas2.width-paddleWidth)/2;
        bulletX = paddleX + paddleWidth / 2
      }
    }
  }



  if (rightPressed && paddleX < canvas2.width - paddleWidth) {
    paddleX += 7;
    if (spacePressed === false) {
      bulletX += 7
    }
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
    if (spacePressed === false) {
      bulletX -= 7
    }
  }
  if (spacePressed === true || mouseClicked === true) {
    yb -= 8
    // myMusic.play()
  }
  if (yb <= 0) {
    mouseClicked = false
    spacePressed = false;
    yb = canvas2.height - 1
    bulletX = paddleX + paddleWidth / 2
  }

  x += dx
  y += dy
  // yb -= 3
}

setInterval(draw, 6)
