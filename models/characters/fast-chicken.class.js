class FastChicken extends MovableObject{

    height = 45;
    width = 50;
    y = 465;
    ix = 10
    iy =00
    iwidth=60
    iheight=55
    currentImage = 0;
    energy = 5;
    speed = -3
  //  damage_sound = new Audio('sounds/chickenSqeak1.mp3')
    IMAGES_WALKING = [
'img/img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
'img/img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
'img/img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
]
IMAGES_DYING =['img/img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png']



    constructor(x,y){
        super().loadImage('img/img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING)
        this.x = x;
        this.y = y
        this.animate();
    }

    animate(){
        setInterval(() => {
            if (this.isHurt(0.5, this.lastHit)) {
              
       //         this.damage_sound.play()

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
            this.playAnimation(this.currentImage,this.IMAGES_WALKING) 
        }, 1000/8);

    }
}