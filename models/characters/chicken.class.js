class Chicken extends MovableObject {
    height = 40;
    width = 60;
    y = 465;
    ix = 0
    iy = 00
    iwidth = 60
    iheight = 55
    currentImage = 0;
    energy = 5;
    speed = 1
    
    IMAGES_WALKING = [
        'img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ]
    IMAGES_DYING = ['img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png', 'img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png']



    constructor(x, y) {
        super().loadImage('./img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING)
        this.x = x;
        this.y = y
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isHurt(0.5, this.lastHit)) {
              
              //  this.damage_sound.play()

                // this.x -= 20;
            }
            if (this.isDead()) {
                this.playAnimation(this.currentImage, this.IMAGES_DYING)
               
                this.y += 5
            }

            this.moveRight(this.speed)

            if (this.x <= 0) {

                this.speed = -this.speed;
            }
            if (this.speed < 0) { this.otherDirection = false } else { this.otherDirection = true }
        }, 1000 / 40);

        setInterval(() => {
            this.playAnimation(this.currentImage, this.IMAGES_WALKING)
        }, 1000 / 8);

    }
}