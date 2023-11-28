class Boss extends MovableObject {
    won = false
    height = 160;
    width = 160;
    y = 275;
    ix = 20
    iy = 35
    iwidth = 200
    iheight = 230
    currentImage = 0;
    energy = 100;
    speed = 3
    damage_sound = new Audio('sounds/chickenSqeak1.mp3')
    IMAGES_ALERT = [
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',

    ]
    IMAGES_WALKING = [
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ]
    IMAGES_ATTACK = [
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',

    ]
    IMAGES_DAMAGE = [
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',

    ]
    IMAGES_DYING = [
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',

        'img/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',


    ]



    constructor() {
        super().loadImage('./img/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x = 8150;
        this.y = 305
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DAMAGE);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DYING)

        this.animate();
        this.applyGravity()
    }

    animate() {


        setInterval(() => {



            if (this.y >= 1000) {
                this.won = true
            }
            if (this.x < 8000) {
                this.x = 8010
            }

            if (this.isHurt(0.5, this.lastHit)) {

                this.damage_sound.play()
                if (this.energy > 50) {

                    this.moveRight(-this.speed * 3)
                    this.jump(3)
                    // this.x -= 20;    
                }
                if (this.energy < 50) {
                    this.moveRight(this.speed * 5)
                    this.jump(5)
                }

            }
           


            
            if (this.speed < 0) { this.otherDirection = false } else { this.otherDirection = true }
            if (world.character.x < 8000 && world.character.x > 7600) {
                this.otherDirection = false} else{
                if (this.energy >= 50) {
                    this.moveRight(this.speed)
                }
                if (this.energy < 50) {
                    this.moveRight(this.speed * 3)
                }
                if (this.x <= 0) {

                    this.speed = -this.speed;
                }
            }

        }, 1000 / 40);

        setInterval(() => {
            if (this.energy >= 50) {
                this.playAnimation(this.currentImage, this.IMAGES_WALKING)
            }
            if (this.energy < 50) {
                this.playAnimation(this.currentImage, this.IMAGES_ATTACK)

            }
            if (this.isDead()) {
                this.playAnimation(this.currentImage, this.IMAGES_DYING)

                this.y += 5
            }
            if (world.character.x < 8000 && world.character.x > 7600) {
                this.playAnimation(this.currentImage, this.IMAGES_ALERT)

            }
            if (this.isHurt(0.5, this.lastHit)) {
                this.playAnimation(this.currentImage, this.IMAGES_DAMAGE)
            }
        }, 1000 / 8);

    }
}