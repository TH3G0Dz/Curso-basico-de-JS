//variaveis da bola
let xBola = 300;
let yBola = 200;
let diaBola = 20;
let ray = diaBola / 2;

//variaveis de velocidade
let velXbola = 8;
let velYbola = 8;

let velYbot;

//variaveis da raquete
let xRaq = 5;
let yRaq = 150;
let cRaq = 10;
let aRaq = 90;

//variavel da colisao
let colidiu = false;

//variaveis do oponente
let xRaq1 = 585;
let yRaq1 = 150;

//variaveis de pontos
let pontosUser = 0;
let pontosBot = 0;

//variaveis de som
let raquetada;
let ponto;

//chance de erro do bot
let chanceDeErrar = 0;

function preload() {
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  bolinha();
  movimentoBola();
  colisaoBorda();
  movRaquete();
  //movRaquete2();
  bot();
  mostraPontos();
  pontos();
  calculaChanceDeErrar();
  raqueteUsers(xRaq, yRaq);
  raqueteUsers(xRaq1, yRaq1);
  colisaoRaquete(xRaq, yRaq);
  colisaoRaquete(xRaq1, yRaq1);

  function bolinha() {
    circle(xBola, yBola, diaBola);
  }
  function movimentoBola() {
    xBola += velXbola;
    //yBola += velYbola;
  }
  function colisaoBorda() {
    if (xBola + ray > width || xBola - ray < 0) {
      velXbola *= -1;
    }
    if (yBola + ray > height || yBola - ray < 0) {
      velYbola *= -1;
    }
  }
  function raqueteUsers(x, y) {
    rect(x, y, cRaq, aRaq);
  }
  function movRaquete() {
    if (keyIsDown(87)) {
      yRaq = yRaq - 10;
    }
    if (keyIsDown(83)) {
      yRaq = yRaq + 10;
    }
  }
  function movRaquete2() {
    if (keyIsDown(UP_ARROW)) {
      yRaq1 = yRaq1 - 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaq1 = yRaq1 + 10;
    }
  }
  function colisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, cRaq, aRaq, xBola, yBola, ray);
    if (colidiu) {
      velXbola *= -1;
      raquetada.play();
    }
  }
  function bot() {
    velYbot = yBola - yRaq1 - cRaq / 2 - 30;
    yRaq1 += velYbot + chanceDeErrar;
    calculaChanceDeErrar();
  }
  function mostraPontos() {
    stroke(255);
    textSize(25);
    textAlign(CENTER);
    fill(color(255, 140, 0));
    rect(130, 5, 40, 26);
    fill(255);
    text(pontosUser, 150, 26);
    fill(color(255, 140, 0));
    rect(430, 5, 40, 26);
    fill(255);
    text(pontosBot, 450, 26);
  }
  function pontos() {
    if (xBola < 5) {
      pontosBot += 1;
      ponto.play();
    }
    if (xBola > 585) {
      pontosUser += 1;
      ponto.play();
    }
  }
  function calculaChanceDeErrar() {
    if (pontosBot >= pontosUser) {
      chanceDeErrar += 1;
      if (chanceDeErrar >= 39) {
        chanceDeErrar = 40;
      }
    } else {
      chanceDeErrar -= 1;
      if (chanceDeErrar <= 35) {
        chanceDeErrar = 35;
      }
    }
  }
}
