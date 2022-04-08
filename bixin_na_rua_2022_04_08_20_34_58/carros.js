//variaveis x , y e velocidade
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 150, 213, 263, 320];
let velCarros = [6.8, 5.5 , 4.9, 8 , 4.7, 6.4];
let aCarros = 50;
let cCarros = 40;

function imagenCarro() {
  for (let i = 0; i < carros.length; i = i + 1) {
    image(carros[i], xCarros[i], yCarros[i], aCarros, cCarros);
  }
}
function movCarro() {
  for (let i = 0; i < carros.length; i = i + 1) {
    xCarros[i] -= velCarros[i];
  }
}
function loopCarro() {
  for (let i = 0; i < carros.length; i = i + 1) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}
