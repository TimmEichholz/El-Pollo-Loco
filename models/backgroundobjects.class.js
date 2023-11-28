class BackgroundObject extends MovableObject{
    height= 600;
    width = 800;
    x=0;
    y=0;
    ix=0
    iy=0
    iwidth;
    iheight;
    
    constructor(path, posX){
        
        super().loadImage(path)
        this.x = posX;
        this.iwidth = this.width
        this.iheight = this.height
      
        
        
        
    }
}

