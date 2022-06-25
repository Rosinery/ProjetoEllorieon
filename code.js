var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a7578217-2f30-4549-a946-1d271126c7cf","8f48737c-ae5b-4433-b4f0-77b34ea9f915","999b3711-16eb-4f85-a41a-d732e3552ad9","53abf3d5-9511-43b6-b524-7c6613dc4610","b4c629df-f1a5-4fb3-b8c7-f289242c1091","195b35fa-4f84-4ec5-935f-c92ce911f9fe","87cc2387-4dd1-4afc-8af8-34fff78094ce","c584a42a-56c4-4c1a-89f0-bbbef0a37325","c40879c0-c50b-4021-91b4-d427112d6d6b","fb6ac2c1-2874-4bb7-979f-0a5f0aef7d55","4245fda9-4317-4ac0-9462-d9a005963536","dea8c18f-5315-4c3f-9472-d09803d51844","0588af04-b616-41bd-899c-b3504aeb6735","ac365fbb-a1b8-4207-a1d5-063077f33896","a712664c-2664-44c0-b28c-20c0fec2c4cf","ebc26e60-e8da-46b3-ad9f-705f987be143","d8686f92-1a46-4121-a74e-13d371c4f1d0"],"propsByKey":{"a7578217-2f30-4549-a946-1d271126c7cf":{"name":"Coração","sourceUrl":null,"frameSize":{"x":833,"y":746},"frameCount":1,"looping":true,"frameDelay":12,"version":"JN0v1lSVKdtIWZGtj14_QH2msBCDPqGV","loadedFromSource":true,"saved":true,"sourceSize":{"x":833,"y":746},"rootRelativePath":"assets/a7578217-2f30-4549-a946-1d271126c7cf.png"},"8f48737c-ae5b-4433-b4f0-77b34ea9f915":{"name":"Coração Imune","sourceUrl":null,"frameSize":{"x":833,"y":746},"frameCount":2,"looping":true,"frameDelay":5,"version":"8.kplmsgjFrCwk.Z1RMVyqD4stqSpcsJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":833,"y":1492},"rootRelativePath":"assets/8f48737c-ae5b-4433-b4f0-77b34ea9f915.png"},"999b3711-16eb-4f85-a41a-d732e3552ad9":{"name":"ITEM","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/999b3711-16eb-4f85-a41a-d732e3552ad9.png","frameSize":{"x":1100,"y":420},"frameCount":1,"looping":true,"frameDelay":4,"version":"qSy9Zj8pfs0yxtIBb1Um_tzr82OoUcI8","loadedFromSource":true,"saved":true,"sourceSize":{"x":1100,"y":420},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/999b3711-16eb-4f85-a41a-d732e3552ad9.png"},"53abf3d5-9511-43b6-b524-7c6613dc4610":{"name":"FIGHT","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/53abf3d5-9511-43b6-b524-7c6613dc4610.png","frameSize":{"x":1100,"y":420},"frameCount":1,"looping":true,"frameDelay":4,"version":".cnT4gn8r1F5PSGP4qDNlBIKOlbyyUO2","loadedFromSource":true,"saved":true,"sourceSize":{"x":1100,"y":420},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/53abf3d5-9511-43b6-b524-7c6613dc4610.png"},"b4c629df-f1a5-4fb3-b8c7-f289242c1091":{"name":"Maguineton","sourceUrl":null,"frameSize":{"x":160,"y":160},"frameCount":8,"looping":true,"frameDelay":12,"version":"G74DWIdBkJJTSn71.nti6gHRjajYuhh.","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":480},"rootRelativePath":"assets/b4c629df-f1a5-4fb3-b8c7-f289242c1091.png"},"195b35fa-4f84-4ec5-935f-c92ce911f9fe":{"name":"Parafuso","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/195b35fa-4f84-4ec5-935f-c92ce911f9fe.png","frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"i1bWtlQanMnhgVgSa5Y9lRzlP6VTxdZf","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/195b35fa-4f84-4ec5-935f-c92ce911f9fe.png"},"87cc2387-4dd1-4afc-8af8-34fff78094ce":{"name":"Engrenagem","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/87cc2387-4dd1-4afc-8af8-34fff78094ce.png","frameSize":{"x":42,"y":42},"frameCount":1,"looping":true,"frameDelay":4,"version":"xdPT.WOhIoKmeD7lLsGDxV5nwbI6b3DE","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":42},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/87cc2387-4dd1-4afc-8af8-34fff78094ce.png"},"c584a42a-56c4-4c1a-89f0-bbbef0a37325":{"name":"Barra de metal","sourceUrl":null,"frameSize":{"x":180,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"7d0k1qJUpptfje99k_AZPX1vaaStVD..","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":60},"rootRelativePath":"assets/c584a42a-56c4-4c1a-89f0-bbbef0a37325.png"},"c40879c0-c50b-4021-91b4-d427112d6d6b":{"name":"Placa de metal","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/c40879c0-c50b-4021-91b4-d427112d6d6b.png","frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":4,"version":"bO2PexqnTSShguULAYhuSZOgikJKixGk","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/c40879c0-c50b-4021-91b4-d427112d6d6b.png"},"fb6ac2c1-2874-4bb7-979f-0a5f0aef7d55":{"name":"Magneton defetead","sourceUrl":null,"frameSize":{"x":160,"y":160},"frameCount":2,"looping":true,"frameDelay":12,"version":"5EHS17auBuWwAdVPHsrMsPlaMBWzuOIY","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":320},"rootRelativePath":"assets/fb6ac2c1-2874-4bb7-979f-0a5f0aef7d55.png"},"4245fda9-4317-4ac0-9462-d9a005963536":{"name":"Heart broke","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"OUfMCsYqKc_iMmZ.spi2lRXE.CCH344K","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/4245fda9-4317-4ac0-9462-d9a005963536.png"},"dea8c18f-5315-4c3f-9472-d09803d51844":{"name":"Gameover","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/dea8c18f-5315-4c3f-9472-d09803d51844.png","frameSize":{"x":426,"y":186},"frameCount":1,"looping":true,"frameDelay":4,"version":"1vjoxcN.pEZK05CNRW2OPM49hy7FH3dW","loadedFromSource":true,"saved":true,"sourceSize":{"x":426,"y":186},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/dea8c18f-5315-4c3f-9472-d09803d51844.png"},"0588af04-b616-41bd-899c-b3504aeb6735":{"name":"A Knokout!","sourceUrl":null,"frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":12,"version":"vt5WDEZPFImeMt7yAMZKSp24NLClQKuv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/0588af04-b616-41bd-899c-b3504aeb6735.png"},"ac365fbb-a1b8-4207-a1d5-063077f33896":{"name":"Atack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":7,"looping":false,"frameDelay":5,"version":"N5lBlxuNS0ds3O_3Ldm9B3xZZTmC3m2b","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/ac365fbb-a1b8-4207-a1d5-063077f33896.png"},"a712664c-2664-44c0-b28c-20c0fec2c4cf":{"name":"Maguineton inicial","sourceUrl":null,"frameSize":{"x":160,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"fRnnSG8a8FucPq77vdx2LUs6oCl__usZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/a712664c-2664-44c0-b28c-20c0fec2c4cf.png"},"ebc26e60-e8da-46b3-ad9f-705f987be143":{"name":"Start","sourceUrl":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/ebc26e60-e8da-46b3-ad9f-705f987be143.png","frameSize":{"x":1480,"y":680},"frameCount":1,"looping":true,"frameDelay":4,"version":"5jw1RFgGQ9vYSpIJQXf6OIsORI1N1iSk","loadedFromSource":true,"saved":true,"sourceSize":{"x":1480,"y":680},"rootRelativePath":"assets/v3/animations/FPgo7_ebx8jE2pDFow7dzlOupMZE6RdKVIxtNKmFdfY/ebc26e60-e8da-46b3-ad9f-705f987be143.png"},"d8686f92-1a46-4121-a74e-13d371c4f1d0":{"name":"Tutorial","sourceUrl":null,"frameSize":{"x":960,"y":540},"frameCount":1,"looping":true,"frameDelay":12,"version":"dBtjE5RqBmunZtDgg4PlnJ8XtDKSCito","loadedFromSource":true,"saved":true,"sourceSize":{"x":960,"y":540},"rootRelativePath":"assets/d8686f92-1a46-4121-a74e-13d371c4f1d0.png"}}};
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
    createCanvas(1200,1200) //criou a tela maior, para melhor visibilidade no computador
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Aperte "Z" para lutar quando carregado.

//Aperte "X" Para usar um item e recuperar vida quando carregado.

//Desvie dos ataques movimentando o coração com as setinhas.

//Continue com os ataques até vencer.

//Você pode ter no máximo 3 vidas.

//Tenha um bom jogo e boa sorte!

console.log("Jogo iniado com sucesso!");




playSound("assets/Puzzling--Thrashing--and-Outsmarting-.mp3", true);

var Passiva = createGroup();
var Ataque_1_engrenagens = createGroup();
var Ataque_1_parafusos = createGroup();
var Ataque_3 = createGroup();
var Ataque_4 = createGroup();
var Ataque_5 = createGroup();

var Intro = randomNumber(1, 4);
var Intro_2 = randomNumber(1, 3);
var Intro_count = 0;

var Imunidade = 0;
var Imune = 0;
var Cup_mus = 0;
var gameState = 0;
var Knockout = 0;
var Player_dead = 0;
var Play = 0;
var Power = 0;
var Fought = 0;
var Boss_hp = 10;
var Hp = 3;

var Player = createSprite(225, 250);
Player.setAnimation("Coração");
Player.scale = 0.025;

//Local dos sprites dos ataques:

//Fase 1:
var Engrenagem_5 = createSprite(randomNumber(75, 375), -200);
var Engrenagem_6 = createSprite(randomNumber(75, 375), -300);
var Engrenagem_7 = createSprite(randomNumber(75, 375), -400);
var Engrenagem_8 = createSprite(randomNumber(75, 375), -500);
var Parafuso_1 = createSprite(Player.x, -150);
var Parafuso_2 = createSprite(Player.x, -300);
var Parafuso_3 = createSprite(Player.x, -450);
Ataque_1_engrenagens.add(Engrenagem_5);
Ataque_1_engrenagens.add(Engrenagem_6);
Ataque_1_engrenagens.add(Engrenagem_7);
Ataque_1_engrenagens.add(Engrenagem_8);
Ataque_1_engrenagens.setAnimationEach("Engrenagem");
Ataque_1_engrenagens.setRotationSpeedEach(randomNumber(3, 20));
Ataque_1_parafusos.add(Parafuso_1);
Ataque_1_parafusos.add(Parafuso_2);
Ataque_1_parafusos.add(Parafuso_3);
Ataque_1_parafusos.setAnimationEach("Parafuso");

//Fase 2:
//Em construção...

//Fim dos sprites dos ataques.

var Bloco_2 = createSprite(220, 50, 400, 100);
Bloco_2.shapeColor = "black";
var Bloco_3 = createSprite(10, 400, 85, 800);
Bloco_3.shapeColor = "black";

var Boss = createSprite(100, 85);
Boss.setAnimation("Maguineton inicial");

var Charge = createSprite(10, 400, 85, 0);
Charge.shapeColor = "yellow";
var Fight = createSprite(25, 200);
Fight.setAnimation("FIGHT");
Fight.scale = 0.05;
var Item = createSprite(25, 10);
Item.setAnimation("ITEM");
Item.scale = 0.05;
var Charge_separador = createSprite(53, 400, 3, 800);
Charge_separador.shapeColor = "orange";

var Top = createSprite(227, 100, 347, 3);
Top.shapeColor = "white";
var Down = createSprite(227, 398.5, 347, 3);
Down.shapeColor = "white";
var Left = createSprite(55, 250, 3, 300);
Left.shapeColor = "white";
var Right = createSprite(398.5, 250, 3, 300);
Right.shapeColor = "white";

var Bloco_4 = createSprite(200, 200, 400, 400);
Bloco_4.shapeColor = "black";
var Tutorial = createSprite(200, 150);
Tutorial.setAnimation("Tutorial");
Tutorial.scale = 0.5;
var Botton = createSprite(200, 315);
Botton.setAnimation("Start");
Botton.scale = 0.13;

function draw() {
  if (Boss_hp <= 2 && Cup_mus == 0) {
    stopSound("assets/Railroad-Wrath.mp3");
    playSound("One-Hell-of-a-Time.mp3");
    Cup_mus = 1;
  }
  
  if ((keyDown("enter") || mousePressedOver(Botton)) && gameState == 0) {
    gameState = 1;
  }
  if (gameState == 1) {
    var Hp_hurt = createSprite(400, 25, 500, 25);
    Hp_hurt.shapeColor = "red";
    var Hp_bar = createSprite(400, 25, Hp * 166.666, 25);
    Hp_bar.shapeColor = "green";
    
    Tutorial.visible = false;
    Botton.visible = false;
    Bloco_4.visible = false;
    stopSound("assets/Puzzling--Thrashing--and-Outsmarting-.mp3");
  }
  
  //Zona draw dos ataques:
  
  //Fase 1:
  if (Boss_hp >= 9) {
    if (Engrenagem_5.y >= 500) {
      Engrenagem_5.y = 50;
      Engrenagem_5.x = randomNumber(75, 375);
    }
    if (Engrenagem_6.y >= 500) {
      Engrenagem_6.y = 50;
      Engrenagem_6.x = randomNumber(75, 375);
    }
    if (Engrenagem_7.y >= 500) {
      Engrenagem_7.y = 50;
      Engrenagem_7.x = randomNumber(75, 375);
    }
    if (Engrenagem_8.y >= 500) {
      Engrenagem_8.y = 50;
      Engrenagem_8.x = randomNumber(75, 375);
    }
    if (Parafuso_1.y >= 500) {
      Parafuso_1.y = 50;
      Parafuso_1.x = Player.x;
    }
    if (Parafuso_2.y >= 500) {
      Parafuso_2.y = 50;
      Parafuso_2.x = Player.x;
    }
    if (Parafuso_3.y >= 500) {
      Parafuso_3.y = 50;
      Parafuso_3.x = Player.x;
    }
  }
  if (Play == 1) {
    Ataque_1_engrenagens.setVelocityYEach(5);
    Ataque_1_parafusos.setVelocityYEach(12.5);
  }
  if (Ataque_1_engrenagens.isTouching(Player) || Ataque_1_parafusos.isTouching(Player)) {
    Damage();
  }
  
  //Fase 2 (Em construção):
  
  //Fim do draw das fases
  
  if (keyDown("down") ) {
    //Não fazer nada
  } else if ((keyDown("up"))) {
    //Não fazer nada
  } else {
    Player.velocityY = 0;
  }
  if (keyDown("right")) {
    //Não fazer nada
  } else if ((keyDown("left"))) {
    //Não fazer nada
  } else {
    Player.velocityX = 0;
  }
  
  if (Play == 1) {
    
    var Bloco_3 = createSprite(10, 400, 85, 800);
    Bloco_3.shapeColor = "black";
    var Charge_2 = createSprite(10, 400, 85, Charge.height);
    Charge_2.shapeColor = "yellow";
    var Fight_2 = createSprite(25, 200);
    Fight_2.setAnimation("FIGHT");
    Fight_2.scale = 0.05;
    var Item_2 = createSprite(25, 10);
    Item_2.setAnimation("ITEM");
    Item_2.scale = 0.05;
    var Charge_separador_2 = createSprite(53, 400, 3, 800);
    Charge_separador_2.shapeColor = "orange";
    if (Charge.height >= 760) {
      Power = 2;
    } else if ((Charge.height >= 380)) {
      Power = 1;
    } else {
      Power = 0;
    }
    if (Boss_hp >= 5) {
      Charge.height = Charge.height + 2;
    } else if ((Boss_hp <= 4)) {
      Charge.height = Charge.height + 1.5;  
    }
    if (Charge.height >= 760) {
      Charge.height = 760;
    }
    
    if (keyDown("down") ) {
      Player.velocityY = 10;
    } else if ((keyDown("up"))) {
      Player.velocityY = -10;
    } else {
      Player.velocityY = 0;
    }
    if (keyDown("right")) {
      Player.velocityX = 10;
    } else if ((keyDown("left"))) {
      Player.velocityX = -10;
    } else {
      Player.velocityX = 0;
    }
    
    if (Imune == 1) {
      Imunidade = Imunidade + 1;
      Player.setAnimation("Coração Imune");
    } else {
      Player.setAnimation("Coração");
    }
    if (Imunidade == 20 && Knockout == 0) {
      Imune = 0;
      Imunidade = 0;
    }
    
    if (keyWentUp("z")) {
      Fought = 0;
    }
    if (keyDown("z") && (Power >= 1 && Fought == 0)) {
      Fighting();
      var Atack = createSprite(120, 80);
      Atack.setAnimation("Atack");
      Atack.scale = 0.5;
    }
    if (keyDown("x") && Power >= 2) {
      Healing();
    }
  }
  
  if (Knockout == 1) {
    var Aguarde = createSprite(200, 200);
    Aguarde.setAnimation("A Knokout!");
    Aguarde.height = 400;
    Aguarde.width = 400;
    Aguarde.scale = 5;
  }
  if (Hp <= 0) {
    Play = 0;
    Player.setAnimation("Heart broke");
    Player.scale = 0.5;
    var Gameover = createSprite(265, 100); // baixei o valor de y, para o GameOver caber na tela toda
    Gameover.setAnimation("Gameover");
    Gameover.height = 95;
    Gameover.width = 275;
  }
  if (Hp <= 0 && Player_dead == 0) {
    Player_fall();
  }
  
  if (Intro_count == 1) {
    Intro1();
  }
  if (Intro_count == 60) {
    Intro2();
  }
  if (Intro_count == 100) {
    Start();
  }
  if (gameState == 1) {
    Intro_count = Intro_count + 1;
  }
  
  Player.collide(Left);
  Player.collide(Right);
  Player.collide(Down);
  Player.collide(Top);
  
  background("black");
  drawSprites();
}

function Fighting() {
  if (Boss_hp == 1) {
    playSound("snd_heavydamage-(online-audio-converter.com).mp3", false);
  } else {
    playSound("assets/Inflicting-Damage.mp3", false);
  }
  Fought = 1;
  Boss_hp = Boss_hp - 1;
  Charge.height = Charge.height - 380;
  if (Boss_hp <= 8) {
    Play = 0;
    Knockout = 1;
    stopSound("assets/Railroad-Wrath.mp3");
    playSound("Elevator-Music---Vanoss-Gaming-Background-Music-(HD).mp3", false);
    console.log("O jogador venceu!");
  }
}
function Healing() {
  if (Hp <= 2) {
    playSound("assets/Undertale-Sound-Effect---Heal.mp3", false);
    Hp = Hp + 1;
    Charge.height = Charge.height - 760;
  }
}

function Start() {
  playSound("assets/Railroad-Wrath.mp3", true);
  Play = 1;
  Boss.setAnimation("Maguineton");
}
function Intro1() {
  if (Intro == 1) {
    playSound("assets/Wallop!-1.mp3", false);
  } else if (Intro == 2) {
    playSound("assets/Wallop!-2.mp3", false);
  } else if (Intro == 3) {
    playSound("assets/Wallop!-3.mp3", false);
  } else if (Intro == 4) {
    playSound("assets/Wallop!-4.mp3", false);
  } else {
    playSound("assets/Wallop!-5.mp3", false);
  }
}
function Intro2() {
  if (Intro_2 == 1) {
    playSound("assets/Ready--1.mp3", false);
  } else if ((Intro_2 == 2)) {
    playSound("assets/Ready-2.mp3", false);
  } else if ((Intro_2 == 3)) {
    playSound("assets/Ready--3.mp3", false);
  } else {
    playSound("assets/Ready--4.mp3", false);
  }
}

function Damage() {
  if (Imune == 0) {
    playSound("assets/Taking-Damage.mp3", false);
    Hp = Hp - 1;
    Imune = 1;
  }
}
function Player_fall() {
  Player_dead = 1;
  stopSound("assets/Railroad-Wrath.mp3");
  playSound("assets/Undertale-Game-Over-Theme.mp3", true);
  console.log("O jogador perdeu.");
}

//Fases:
//1: Engrenagens caindo e pregos semiteleguiados !
//2: Barra de metal girando !!
//3: Placa de metal quicando por aí !!
//4: Barras de metal caindo !!
//5: Um monte de coisa indo e vindo, um loucura !

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
