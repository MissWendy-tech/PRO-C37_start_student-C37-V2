class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>espera a que otro jugador se una...`;
      this.greeting.html(message);

      //Un objeto de la clase player llamará a un método addPlayer() para agregar información en la BD 
      playerCount +=1;
      //leer la entrada del usuario y la asiganamos a playername
      player.name = this.input.value();
      //identificacion unica para los jugadores
      player.index = playerCount;
      //almacenamos todos los datod en la BD
      player.addPlayer();
      //updateCount() para aumentar el campo 'playerCount' en la BD
      player.updateCount(playerCount);

    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
