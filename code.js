var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4433f09d-76ec-4074-9795-3aa1e9446bcc","a405656a-602a-411c-98c8-e89c8e12296f","99d7765f-5199-48ab-8efa-39567a01ab9f","a789d2d5-8eaf-473d-8339-4c27ecfbc448","59db31f9-e9d2-4e12-bc3c-3cad83150b6c","6de321e1-a565-4d44-8db1-5555d9c27d18","57b19ce6-5017-430c-b1c2-e101de7150ce"],"propsByKey":{"4433f09d-76ec-4074-9795-3aa1e9446bcc":{"name":"paddle","sourceUrl":null,"frameSize":{"x":92,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"c58Vd8MnQXhRLZ5S0uRglxXWGem1LhP.","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":31},"rootRelativePath":"assets/4433f09d-76ec-4074-9795-3aa1e9446bcc.png"},"a405656a-602a-411c-98c8-e89c8e12296f":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/vGWAFa.mUne7tCUqj7VEz594sKyohbhM/category_sports/beachball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"vGWAFa.mUne7tCUqj7VEz594sKyohbhM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vGWAFa.mUne7tCUqj7VEz594sKyohbhM/category_sports/beachball.png"},"99d7765f-5199-48ab-8efa-39567a01ab9f":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/OEa2gEbbvs2v84AZcjbUfOw_7tVqVKJr/category_backgrounds/abstract_16.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OEa2gEbbvs2v84AZcjbUfOw_7tVqVKJr","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OEa2gEbbvs2v84AZcjbUfOw_7tVqVKJr/category_backgrounds/abstract_16.png"},"a789d2d5-8eaf-473d-8339-4c27ecfbc448":{"name":"bal","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"59db31f9-e9d2-4e12-bc3c-3cad83150b6c":{"name":"bal 1","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"},"6de321e1-a565-4d44-8db1-5555d9c27d18":{"name":"bal3","sourceUrl":"assets/api/v1/animation-library/gamelab/.8W4FkqRZ6sbUlwCEYyEwHkBRD3wlkoe/category_germs/gameplaywacky_12.png","frameSize":{"x":387,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".8W4FkqRZ6sbUlwCEYyEwHkBRD3wlkoe","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.8W4FkqRZ6sbUlwCEYyEwHkBRD3wlkoe/category_germs/gameplaywacky_12.png"},"57b19ce6-5017-430c-b1c2-e101de7150ce":{"name":"bal2","sourceUrl":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png","frameSize":{"x":399,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var SCORE = 0;
var gameState="serve"

var background = createSprite(200,200);
background.setAnimation("background");

var box1 = createSprite(25, 75, 50, 50);
box1.setAnimation("bal");
box1.scale = 0.1;

var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("bal 1");
box2.scale = 0.1;

var box3 = createSprite(125, 75, 50, 50);
box3.setAnimation("bal");
box3.scale = 0.1;

var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("bal 1");
box4.scale = 0.1;

var box5 = createSprite(225, 75, 50, 50);
box5.setAnimation("bal");
box5.scale = 0.1;

var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("bal 1");
box6.scale = 0.1;

var box7 = createSprite(325, 75, 50, 50);
box7.setAnimation("bal");
box7.scale = 0.1;

var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("bal 1");
box8.scale = 0.1;


var box9 = createSprite(25, 125, 50, 50);
box9.setAnimation("bal 1");
box9.scale = 0.1;

var box10 = createSprite(75, 125, 50, 50);
box10.setAnimation("bal");
box10.scale = 0.1;

var box11 = createSprite(125, 125, 50, 50);
box11.setAnimation("bal 1");
box11.scale = 0.1;

var box12 = createSprite(175, 125, 50, 50);
box12.setAnimation("bal");
box12.scale = 0.1;

var box13 = createSprite(225,125, 50, 50);
box13.setAnimation("bal 1");
box13.scale = 0.1;

var box14 = createSprite(275, 125, 50, 50);
box14.setAnimation("bal");
box14.scale = 0.1;

var box15 = createSprite(325, 125, 50, 50);
box15.setAnimation("bal 1");
box15.scale = 0.1;

var box16 = createSprite(375, 125, 50, 50);
box16.setAnimation("bal");
box16.scale = 0.1;

var box17 = createSprite(50, 25, 50, 50);
box17.setAnimation("bal2");
box17.scale = 0.15;

var box18 = createSprite(150, 25, 50, 50);
box18.setAnimation("bal3");
box18.scale = 0.1;

var box19 = createSprite(250, 25, 50, 50);
box19.setAnimation("bal2");
box19.scale = 0.15;

var box20 = createSprite(350, 25, 50, 50);
box20.setAnimation("bal3");
box20.scale = 0.1;

paddle=createSprite(200,390,100,20)
paddle.setAnimation("paddle");

ball=createSprite(200,200,20,20)
ball.setAnimation("ball");
ball.scale=0.1

function draw() {


  
  if(keyDown("ENTER")){
    ball.velocityX=2
    ball.velocityY=3
  };
  
  paddle.x=World.mouseX;
  
  if(ball.isTouching(box1)){
    ball.bounceOff(box1);
    box1.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box2)){
     ball.bounceOff(box2);
    box2.destroy();
    SCORE = SCORE+1;
     playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box3)){
     ball.bounceOff(box3);
    box3.destroy();
    SCORE = SCORE+1;
     playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box4)){
    ball.bounceOff(box4);
    box4.destroy();
    SCORE = SCORE+1;
     playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box5)){
    ball.bounceOff(box5);
    box5.destroy();
    SCORE = SCORE+1;
     playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box6)){
    ball.bounceOff(box6);
    box6.destroy();
    SCORE = SCORE+1;
   playSound("assets/category_hits/8bit_splat.mp3")
   }
  
   if(ball.isTouching(box7)){
    ball.bounceOff(box7);
    box7.destroy();
    SCORE = SCORE+1;
     playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box8)){
     ball.bounceOff(box8);
    box8.destroy();
     playSound("assets/category_hits/8bit_splat.mp3")
  }
  
   if(ball.isTouching(box9)){
     ball.bounceOff(box9);
    box9.destroy();
    SCORE = SCORE+1;
   playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box10)){
     ball.bounceOff(box10);
    box10.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box11)){
     ball.bounceOff(box11);
    box11.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box12)){
    ball.bounceOff(box12);
    box12.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box13)){
    ball.bounceOff(box13);
    box13.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box14)){
    ball.bounceOff(box14);
    box14.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box15)){
    ball.bounceOff(box15);
    box15.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
   if(ball.isTouching(box16)){
     ball.bounceOff(box16);
    box16.destroy();
    SCORE = SCORE+1;
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3")
  }
  
  if(ball.isTouching(box17)){
     ball.bounceOff(box17);
    box17.destroy();
    SCORE = SCORE+1;
   playSound("assets/category_hits/puzzle_game_organic_metal_tile_hit_1.mp3")
  }
  
  if(ball.isTouching(box18)){
     ball.bounceOff(box18);
    box18.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_organic_metal_tile_hit_1.mp3")
  }
  
  if(ball.isTouching(box19)){
     ball.bounceOff(box19);
    box19.destroy();
    SCORE = SCORE+1;
    playSound("assets/category_hits/puzzle_game_organic_metal_tile_hit_1.mp3")
  }
  
  if(ball.isTouching(box20)){
     ball.bounceOff(box20);
    box20.destroy();
    SCORE = SCORE+1;
   playSound("assets/category_hits/puzzle_game_organic_metal_tile_hit_1.mp3")
  }

  if(ball.isTouching(paddle)){
    playSound("assets/category_hits/puzzle_game_button_04.mp3")
  }
  
  
  
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle);
  
  
  drawSprites();
   fill("darkblue");
  textSize(25);
  text("SCORE:" +SCORE,10,200);
  
   if(gameState == "serve")
  {
     //display welcome text
    fill("blue")
    textSize(25);
    text("Welcome! Press space to start.",20,300);
  
  //Moving the ball on pressing enter key
  if(keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    
    gameState='play';
  }
  
  }
  
  if(gameState == "play")
  {
    paddle.x=World.mouseX
    if(ball.isTouching(bottomEdge)|| SCORE === 20 ){
      gameState="end";
    } 
  }
  
  if(gameState == "end")
  {
    ball.velocityX=0;
    ball.velocityY=0;
    textSize(20);
    text("GAME OVER ??",142,100)
  }
  
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
