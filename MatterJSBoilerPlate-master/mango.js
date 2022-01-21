class Mango{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,50,options)
        this.image = loadImage("mango.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,80,80)
        
    }
}