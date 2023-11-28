class Platforms extends MovableObject{
    
    constructor(path, posX, posY,width,height,state){
        
        super().loadImage(path)
        this.x = posX;
        this.y = posY
        this.height = height
        this.width = width
        this.iwidth = this.width
        this.iheight = this.height
        this.ground = posY//posY+20;
        this.state = state
        
        
    }
}