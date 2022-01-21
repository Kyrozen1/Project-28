class Stone{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.image = loadImage("stone.png");
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
        image(this.image,pos.x,pos.y,100,100);
    }
}