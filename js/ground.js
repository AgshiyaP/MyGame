class Ground{
    constructor(x,y,w,h){
        
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.image = loadImage("Images/Bar Line.png")
  
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.w,this.h)
    }
}