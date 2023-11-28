class ThrowableObject extends MovableObject {

    otherDirection = false
    speed = 20
    height = 50
    width = 40
    energy = 1
    ground = 1000;
    currentImage = 0;
    

    IMAGES_BOTTLE = [
        "img/img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png",
        "img/img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png",
        "img/img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png",
        "img/img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png",
    ]
    IMAGES_BOTTLE_SHATTERING = [
        "img/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png",
        "img/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png",
        "img/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png",
        "img/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png",
        "img/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png",
        "img/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png",
    ]
    constructor(x, y, otherDirection) {
        super().loadImage("img/img/6.botella/1.Marcador.png")
        this.x = x;
        this.y = y;
        this.iwidth = this.width
        this.iheight = this.height
        this.otherDirection = otherDirection
        this.loadImages(this.IMAGES_BOTTLE)
        this.loadImages(this.IMAGES_BOTTLE_SHATTERING)
        this.throw(x, y)
        this.animate()

        if (this.otherDirection == true){
            this.speed = -this.speed
        }


    }

    throw(x, y) {
        
        this.x = x;
        this.y = y;
        this.speedY = 10;
        if (this.otherDirection == true){
            this.speed = -this.speed
        }
        setInterval(() => {
            this.checkGravity([500])
        }, 1000 / 30);
    }

    animate() {
        


        setInterval(() => {
            
            

            if (this.isDead()) {
                
                

                //let shattering = setInterval(() => {
                    this.speedY = 0
                    this.speed = 0
    
                    this.playAnimation(this.currentImage, this.IMAGES_BOTTLE_SHATTERING)
                    
                //}, 1000 / 14);
                
            }









            if (!this.otherDirection) {
                this.moveRight(this.speed)
            } else { this.moveRight(-this.speed) }

        }, 1000/30 );

        setInterval(() => {
            this.playAnimation(this.currentImage, this.IMAGES_BOTTLE)
        }, 1000 / 10);

    }

}

