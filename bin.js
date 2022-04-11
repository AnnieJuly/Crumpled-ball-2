class Bin
{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:0.2,
            density:1.2
            
        }
        this.width = width;
        this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body);
     
      
      }
      display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
  
      }
    
      }