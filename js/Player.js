class Player {
  constructor() {
    this.name = null; //para guardar el nombre del jugador
    this.index = null;  //para dar una identificacion unica al jugador
    this.positionX = 0;  //para almacenar la posicion x y y de cada jugador
    this.positionY = 0;
  }

  addPlayer() {
    //creamos la jerarquia de los jugadores
    var playerIndex = "players/player" + this.index;
    //posicion de los jugadores
    if (this.index === 1){
      this.positionX = width/2-100;
    }else {
      this.positionX = width / 2 + 100;
    }
  
  //Actualizamos la base de datos

  database.ref(playerIndex).set({
    name: this.name,
    positionX: this.positionX,
    positionY: this.positionY
  })
  }
  //.ref() para dar la ubicación en la base de datos.
//.on() - para seguir escuchando los cambios que ocurren en el campo 'playerCount' de la base de datos.
//.val() - para copiar el valor de la base de datos a la variable global del código
//.update - para almacenar el valor de la variable global en el campo de la base de datos 'playerCount'.
//playerCount - para actualizar el campo en la base de datos
//playerCount - leer el número de la base de datos y guardarlo en la variable Global para usar en el código.
//updateCount - para hacer la referencia en el directorio raiz
//databaseReference.set() creara y guardara la referencia de la base de datos

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
  //getPlayersInfo es una funcion static, ya que solo almacenara los datos de los jugadores y no se adjuntaran a ningun objeto de la clase
  
}
