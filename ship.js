class ship{
  constructor(x, y, width, height, angle) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("ship.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    moveUp(){
      this.body.position.y-=5
  }
  moveDown(){
      this.body.position.y+=5
  }
}