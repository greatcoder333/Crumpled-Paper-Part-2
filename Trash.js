class Trash {

constructor(x,y,radius){

var options ={
isStatic:false,    
restitution:0.3,
friction:0,
density:1.2
}

this.x = x
this.y = y
this.image = loadImage("paper.png")
this.body = Bodies.circle(x,y,50,options)
World.add(world,this.body)
}

display(){

var pos = this.body.position
fill("pink")
imageMode(CENTER)
image(this.image, pos.x, pos.y, 50, 50)
}
}