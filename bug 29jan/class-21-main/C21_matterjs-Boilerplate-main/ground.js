class Ground
{
    constructor(x, y, w, h, color)
    {
      var options={
          isStatic: true
      }

     this.body=Bodies.rectangle(x, y, w, h, options);
     this.w=w;
     this.h=h;
     this.c=color;  //property 
      World.add(world, this.body);
     // console.log(this.body);
    }
    
    show()
    {
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill(this.c);
        
        
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}