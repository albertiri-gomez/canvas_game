class player {
  //pintar a Peter
  constructor() {
    this.peter = {
      spedd: 400,
      x: 240,
      y: 350
    };
    this.regalo = {};
    this.recogidaRegalo = 0;
    this.keysDown = {};

    this.getPeter();
    this.getRegalo();
    this.setListeners();
    this.getUpdate();

  }

  //PETER

  getPeter() {
    this.peterDraw = false;
    this.peterImage = new Image();
    this.peterImage.onload = function() {
      this.peterDraw = true;
    };
    // pintar imagen con src
  }

  //REGALO

  getRegalo() {
    this.regaloDraw = false;
    this.regaloImage = new Image();
    this.regaloImage.onload = function() {
      this.regaloDraw = true;
    };
    //pintar imagen con src
  }

  // CONTROLES DEL TECLADO

  setListeners() {
    document.addEventListener(
      "keydown",
      function(key) {
        keysDown[key.keyCode] = true;
      },
      false
    );
    document.addEventListener(
      "keyup",
      function(key) {
        delete keysDown[key.keyCode];
      },
      false
    );
  }

  //RESET DE LOS REGALOS (MIRAR)
  getReset(){
    this.reset = function () {
        regalo.x = 32 + (Math.random() * (canvas.width - 70)); //subtract from canvas height so regalo dont leave canvas
        regalo.y = 32 + (Math.random() * (canvas.height - 70));
      }
  }
  //METOD DE CONTROLES PARA EL TECLADO
  getUpdate() {
    this.update = function(actualizar) {
      if (38 in keysDown) {
        this.peter.y -= peter.speed * actualizar;
        if (this.peter.y < 0) {
          peter.y = 0;
        }
      }
      if (40 in keysDown) {
        peter.y += peter.speed * actualizar;
        if (peter.y > 380) {
          peter.y = 380;
        }
      }
      if (37 in keysDown) {
        peter.x -= peter.speed * actualizar;
        if (peter.x <= 0) {
          peter.x = 0;
        }
      }
      if (39 in keysDown) {
        peter.x += peter.speed * actualizar;
        if (peter.x >= 600) {
          peter.x = canvas.width - peter.x;
        }
      }
      //COLISIONES ENTRE PETER Y EL REGALO
      if (
        peter.x <= (regalo.x + 32)
        && regalo.x <= (peter.x + 50)
        && peter.y <= (regalo.y + 50)
        && regalo.y <= (peter.y + 120)
      ) {
        ++recogidaRegalo;
        this.getReset();
      }
    };
  }








}
