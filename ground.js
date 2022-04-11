class Ground
{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:0.2,
            density:1.2
            
        }
      this.body = Bodies.rectangle(x,y,800,50,options)
      World.add(world,this.body);
      
      }
      display(){
        rectMode(CENTER);
        fill(0);
        rect(this.body.position.x,this.body.position.y,800,50)
      }
    
      }
    

