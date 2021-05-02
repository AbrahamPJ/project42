
class Drop {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction':0.0001,
          'isStatic':false
      }
      this.x = x;
      this.y = y;
      this.r = 5;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      angleMode(RADIANS);
      fill("blue");
      ellipse(0, 0,this.r,this.r);
      pop();
      if (this.body.position.y > height){
      Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
    }
  };