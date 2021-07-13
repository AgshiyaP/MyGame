class Beat{
    constructor(x,y,radius){
        this.Visiblity = 255;
        var options={
            isStatic:false,
            friction: 0.5,
            density:0.1,
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Images/Beats.png")
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        if(this.body !== null){
         push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
        } else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visibilty - 10;
            tint(255, this.Visiblity);
            image(this.image,0,0,this.radius*2,this.radius*2)
            pop();
        }
    }
} 
