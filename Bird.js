class Bird{
    constructor(x, y,r){
        
        var bird_options = {
            isStatic : true
          };

        this.body = Bodies.circle(x,y,r, bird_options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
      /*  ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);*/
        image(birdIMG,pos.x , pos.y ,200, 200);  
        pop();
    }


}