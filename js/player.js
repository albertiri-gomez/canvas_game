class Player {
  //pintar a Peter
  constructor(ctx, width, height, image, keys) {
    
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = 240;
    this.posY = 350;
    this.vx = 400;
    this.vy = 400;
    this.keys = keys;
    // this.setListeners();
  }

  //PETER

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  //REGALO

  // drawRegalo() {
  //   this.regaloDraw = false;
  //   this.regaloImage = new Image();
  //   this.regaloImage.onload = function() {
  //     this.regaloDraw = true;
  //   };
  //   this.regaloImage.src = '../img/Family-Guy-PNG-Photos.png'
  //   //pintar imagen con src
  // }

  // CONTROLES DEL TECLADO

  // setListeners() {
  //   document.addEventListener(
  //     "keydown",
  //     function(key) {
  //       keysDown[key.keyCode] = true;
  //     },
  //     false
  //   );
  //   document.addEventListener(
  //     "keyup",
  //     function(key) {
  //       delete keysDown[key.keyCode];
  //     },
  //     false
  //   );
  // }

  // //RESET DE LOS REGALOS (MIRAR)
  // getReset(){
  //   this.reset = function () {
  //       regalo.x = 32 + (Math.random() * (canvas.width - 70)); //subtract from canvas height so regalo dont leave canvas
  //       regalo.y = 32 + (Math.random() * (canvas.height - 70));
  //     }
  // }
  // //METOD DE CONTROLES PARA EL TECLADO
  // getUpdate() {
  //   this.update = function(actualizar) {
  //     if (38 in keysDown) {
  //       this.peter.y -= peter.speed * actualizar;
  //       if (this.peter.y < 0) {
  //         peter.y = 0;
  //       }
  //     }
  //     if (40 in keysDown) {
  //       peter.y += peter.speed * actualizar;
  //       if (peter.y > 380) {
  //         peter.y = 380;
  //       }
  //     }
  //     if (37 in keysDown) {
  //       peter.x -= peter.speed * actualizar;
  //       if (peter.x <= 0) {
  //         peter.x = 0;
  //       }
  //     }
  //     if (39 in keysDown) {
  //       peter.x += peter.speed * actualizar;
  //       if (peter.x >= 600) {
  //         peter.x = canvas.width - peter.x;
  //       }
  //     }
  //     //COLISIONES ENTRE PETER Y EL REGALO
  //     if (
  //       peter.x <= (regalo.x + 32)
  //       && regalo.x <= (peter.x + 50)
  //       && peter.y <= (regalo.y + 50)
  //       && regalo.y <= (peter.y + 120)
  //     ) {
  //       ++recogidaRegalo;
  //       this.getReset();
  //     }
  //   };
  // }








}
