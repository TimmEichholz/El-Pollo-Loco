class LootableObject extends MovableObject{
height = 80;
width = 60;
otherDirection = false


    constructor(x,y,otherDirection){
        super().loadImage("img/img/6.botella/2.Botella_enterrada1.png")
        this.x = x;
        this.y = y;
        this.iwidth = this.width
        this.iheight = this.height
        this.otherDirection = otherDirection;

    }
}