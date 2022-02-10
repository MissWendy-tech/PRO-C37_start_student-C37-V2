class Game {
  constructor() {}

  getState() {          //en lugar de escribir una función separada para leer el valor, continuamos escribiendo en .on(). Esto nos
                                                                                  //permite vincular la función para leer 'gameState'
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
//update() para actualizar gameState

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

  //Creamos nuestros sprites de auto
  
  }
  //oculta los elementos 


  //Estado de Play()
  //handleElements colocamos nuestra imagen de titulo
  //Player.getPlayersInfo obtenemos la informacion de los jugadores
  //undefined no asignamos ningun valor
  //si la condicion es verdadera, mostramos la imagen de la pista
  //(-height*5 muestra la pista fuera del canvas)

}
