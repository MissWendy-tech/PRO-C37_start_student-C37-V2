var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  //Cargamos nuestras imagenes de pista y autos

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  //Actualizamos gameState a 1 y preparamos para jugar
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
