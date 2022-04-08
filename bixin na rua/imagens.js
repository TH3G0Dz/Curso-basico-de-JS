//variaveis das imagens
let estradaImg;
let carro1;
let carro2;
let carro3;
let user;

//variaveis de sons
let pontos1;
let colidiu1;
let trilha;

function preload() {
  estradaImg = loadImage("imagens/estrada.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  user = loadImage("imagens/ator-1.png");
  carros = [carro1, carro2, carro3, carro2, carro3, carro1];
  pontos1 = loadSound("sons/pontos.wav");
  colidiu1 = loadSound("sons/colidiu.mp3");
  trilha = loadSound("sons/trilha.mp3");
}
