class Game {
    constructor() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.width = innerWidth;
      this.height = innerHeight;
      this.fps = 60;
      this.framesCounter = 0;
    }
    init() {
      this.reset();
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.start();
    }
    reset() {
      this.background = new Background(this.ctx, this.width, this.height);
      this.player = new Player(
        this.ctx,
        this.width,
        this.height,
        "img/Family-Guy-PNG-Transparent-Picture.png",
        // this.playerKeys
      );
    }
    start() {
      this.interval = setInterval(() => {
        this.framesCounter++;
        this.clear();
        this.drawAll();

        // this.moveAll();
        if (this.framesCounter > 1000) this.framesCounter = 0;
      }, 1000 / this.fps);
    }
    clear() {
      // this.ctx.clearRect(0, 0, this.width, this.height);
    }
    drawAll() {
      this.background.draw();
      this.player.draw();
    }
  }