class Coins extends MovableObject{

    height = 75;
    width = 75
    

    constructor(x,y){
        super().loadImage("img/img/7.Marcadores/Icono/Monedas.png")
        this.y = y;
        this.x = x;
        this.iwidth = this.width
        this.iheight = this.height
    }
}