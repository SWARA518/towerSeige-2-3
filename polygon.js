class Polygon{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.img = loadImage("sprites/polygon.jpg")
    }
    display(){
     Image(this.img,200,175)
        rectMode(CENTER);

    }
}