// console.log("test1");

var canvas = document.getElementById('myCanvas').getContext('2d')

var canvas2 =document.getElementById('myCanvas')

var ballRadius = 10;

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            canvas.beginPath();
            canvas.rect(brickX, brickY, brickWidth, brickHeight);
            canvas.fillStyle = "#00dd67";
            canvas.fill();
            canvas.closePath();
        }
    }
}


function drawBall(){

  canvas.beginPath();
  canvas.arc(x, y, ballRadius, 0, Math.PI*2);
  canvas.fillStyle = "#009edd";
  canvas.fill();
  canvas.closePath();
}

function drawPaddle() {
    canvas.beginPath();
    canvas.rect(paddleX, canvas2.height-paddleHeight, paddleWidth, paddleHeight);
    canvas.fillStyle = "#0095DD";
    canvas.fill();
    canvas.closePath();
}

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}


// var canvas = document.getElementById("canvas");
// // var canvas = canvas.getContext("2d");
// canvas.beginPath()
// canvas.rect(20, 40, 50, 50)
// canvas.fillStyle = 'blue'
// canvas.fill()
// canvas.stroke()
// canvas.closePath
// //
// //
// //
// canvas.beginPath();
// canvas.arc(240, 160, 20, 0, Math.PI*2 , false);
// canvas.fillStyle = "green";
// canvas.fill();
// canvas.closePath();
//
// //
// canvas.beginPath();
// canvas.rect(160, 10, 100, 40);
// canvas.strokeStyle = "rgba(0, 0, 255, 0.5)";
// canvas.stroke();
// canvas.closePath();
