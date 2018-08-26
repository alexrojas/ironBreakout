var x = canvas2.width/2;
var y = canvas2.height-30;
var dx = 2;
var dy = -2;
console.log(x);
console.log(y);

var paddleHeight = 15;
var paddleWidth = 135;
var paddleX = (canvas2.width-paddleWidth)/2;

var brickRowCount = 5;
var brickColumnCount = 5;
var brickWidth = 80;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 40;
var brickOffsetLeft = 35;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

var score = 0

function draw (){
  canvas.clearRect(0, 0, canvas2.width, canvas2.height)

  drawBricks()

  drawBall()

  drawPaddle()

  collisionDetection()

  drawScore()
  if(x + dx > canvas2.width-ballRadius || x + dx < ballRadius){
    dx = -dx;
  }

  if(y + dy < ballRadius){
    dy = -dy;
  }else if(y + dy > canvas2.height - paddleHeight){
    if(x > paddleX + 15&& x < paddleX + (paddleWidth -15)){
      dy = -dy
      // dx = 2
    }else{
      alert("GAME OVER");
      document.location.reload();
    }
  }
    // else if(x > paddleX && x < paddleX + paddleWidth){
    //   dy = -dy
    //   dx = 6
    // }


  if(rightPressed && paddleX < canvas2.width-paddleWidth) {
    paddleX += 7;
  }else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
  }
  x += dx
  y += dy
}

setInterval(draw, 2)
