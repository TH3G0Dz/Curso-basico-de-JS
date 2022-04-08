function setup() {
  trilha.loop()
  createCanvas(500, 400);
}

function draw() {
  background(estradaImg);
  imagenCarro();
  userPng();
  movCarro();
  movUser();
  loopCarro();
  colisao();
  pontuacao();
  marcaPonto();

}
