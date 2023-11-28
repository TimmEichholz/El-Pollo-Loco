class Barriers extends MovableObject{
    height= 100;
    width = 50;
    x=200;
    y=200;
    
    constructor(path, posX, posY, width, height){
        
        super().loadImage(path)
        this.x = posX;
        this.y = posY;
        this.width = width;
        this.height = height;
        this.iwidth = this.width
        this.iheight = this.height
        
    }
}