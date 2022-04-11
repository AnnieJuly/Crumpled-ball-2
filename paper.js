class Paper
{
constructor(x,y,r){
  var options={
      restitution:0.3,
      density:1.2,
      friction:0.5,
      density:1.2
  }
    this.x = x;
    this.y = y;
    this.r = r;
this.body = Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
this.image = loadImage("paper.png")

}
display(){
 push();
 imageMode(CENTER);
 image(this.image,this.body.position.x , this.body.position.y,this.r,this.r)
 pop();
}
}
