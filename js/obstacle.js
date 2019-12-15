var obstacle1 = new Image();
//obstacle .src

var myObstacle = [
    new obstacle (getRandom(0, 600), ((Math.random() * canvas.height - 410)), obstacle1, false, 50, 50),
    new obstacle (getRandom(0, 600), ((Math.random() * canvas.height - 410)), obstacle1, false, 50, 50),
    new obstacle (getRandom(0, 600), ((Math.random() * canvas.height - 410)), obstacle1, false, 50, 50),
    new obstacle (getRandom(0, 600), ((Math.random() * canvas.height - 410)), obstacle1, false, 50, 50),
  ];
 
class obstacle {
constructor(x, y, image, width, height) {
    this.x = x
    this.y = y
    this.image = image;
    this.isLoaded = false;
    this.width = width;
    this.height = height;
    this.angle = 0;
  }
 
  draw(){
    ctx.save();
    // ctx.rotate(this.angle += .01);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.restore();
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  
   getObstacle() {
    for (var i=0; i < 1; i++ ) {
    myObstacle.push(new obstacle(getRandom(0, 600), ((Math.random() * canvas.height - 410)), obstacle1, false, 40, 40));
  //mirar
    }
  
  }


}