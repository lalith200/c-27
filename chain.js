class Chain{
    constructor(bodyA,bodyB){
    var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.04,
     lenght:10
   
   
    }
    this.chain=Constraint.create(options);
   
    World.add(world,this.chain);
   
    }
    display(){
   
   var pointA=this.chain.bodyA.position;
   var pointB=this.chain.bodyB.position;
   strokeWeight(4);
   fill(0);
   line(pointA.x,pointA.y,pointB.x,point.y);
   
   
    }
   
   }