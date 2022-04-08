//variaveis de movimento do User
let xUser = 50;
let yUser = 366;

//variavel de colisao
let coll = false;

//variavel de pontos
let pontos = 0;

function userPng() {
  image(user, xUser, yUser, 30, 30);
}

function movUser() {
  if (keyIsDown(UP_ARROW)) {
    yUser -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()){
    yUser += 5;
    }
  }
}

function colisao() {
  for (let i = 0; i < carros.length; i = i + 1) {
    coll = collideRectCircle(xCarros[i], yCarros[i], aCarros, cCarros, xUser, yUser, 10);
    if (coll) {
      colidiu1.play()
      colidiu();
    }
  }
}

function colidiu(){
  yUser = 366;
}

function pontuacao(){
  textAlign(CENTER)
  textSize(20)
  fill(color(218,165,32))
  stroke(4)
  strokeWeight(3)
  text (pontos, width / 5 , 25)
}

function marcaPonto(){
  if (yUser < 10){
    pontos1.play()
    pontos += 1;
  }
  if (yUser < 10){
    yUser = 366
  }
  if (coll){
    pontos -= 1;
  }
  if (pontos < 0){
   return pontos += 1 ;
  }
}

function podeMover(){
  return yUser < 366
}