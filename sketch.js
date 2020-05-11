var ball, img, paddle, ball_image, paddle_image;

function preload() {
  ball_image =
    loadImage("ball.png")

  paddle_image =
    loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);

  ball = createSprite(200, 200)
  ball.addImage( ball_image)
  ball.velocityX = 9
  //ball.velocityY = 5
  //groupBall.add(ball);


  paddle = createSprite(350, 200)
  paddle.addImage(paddle_image)
  //groupPaddle.add(paddle)

  //var groupBall = createGroup();
  //var groupPaddle = createGroup();



}

function draw() {
  //background("alpha")
  background(205, 153, 0);
  edges = createEdgeSprites()

  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(paddle,explosion)
  paddle.collide(edges)


  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y -20
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20
  }



  drawSprites();
}

function explosion()
{
  ball.velocityY=random(-8,8);
}
