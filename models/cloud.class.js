class Cloud extends MovableObject {
    height = 400;
    width = 800;

    constructor() {
        super().loadImage('img/img/5.Fondo/Capas/4.nubes/2.png')

        this.x = Math.random() * 10000
        this.y = 50;
        this.iwidth = this.width
        this.iheight = this.height
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.moveRight(-0.2)
        }, 1000/60);
        
    }


}