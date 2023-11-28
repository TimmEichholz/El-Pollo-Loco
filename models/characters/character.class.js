class Character extends MovableObject {
    gameover = false
    x = 130;
    y = 030;
    ix = 15
    iy = 85
    iwidth = 100
    iheight = 200
    speed = 10;
    height = 100;
    width = 60;
    energy = 5;
    quiver = 0;
    moneybag = 0
    lastThrow = 1
    
    //
    //
    //width = 100
    //height = 200
    jumping_sound = new Audio('sounds/jump.mp3')
    damage_sound = new Audio('sounds/grunt.mp3')
    walking_sound = new Audio('sounds/walking.mp3')
    bottle_pickUp_sound = new Audio('sounds/bottle.mp3')
    coins_pickUp_sound = new Audio('sounds/coin.mp3')
    throwing_sound = new Audio('sounds/throw.mp3')
    currentImage = 0;
    IMAGES_WALKING = [
        imagepaths[20],
        imagepaths[21],
        imagepaths[22],
        imagepaths[23],
        imagepaths[24],
        imagepaths[25],
        /*
           'img/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
           'img/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
           'img/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
           'img/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
           'img/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
           'img/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
       */
    ];
    IMAGES_IDLE = [
        imagepaths[0],
        imagepaths[1],
        imagepaths[2],
        imagepaths[3],
        imagepaths[4],
        imagepaths[5],
        imagepaths[6],
        imagepaths[7],
        imagepaths[8],
        imagepaths[9],

    ]
    IMAGES_IDLE_LONG = [
        imagepaths[10],
        imagepaths[11],
        imagepaths[12],
        imagepaths[13],
        imagepaths[14],
        imagepaths[15],
        imagepaths[16],
        imagepaths[17],
        imagepaths[18],
        imagepaths[19],


    ]
    IMAGES_JUMP = [
        imagepaths[26],
        imagepaths[27],
        imagepaths[28],
        imagepaths[29],
        imagepaths[30],
        imagepaths[31],
        imagepaths[32],
        imagepaths[33],
        imagepaths[34],
        // imagepaths[35],
    ]
    IMAGES_DAMAGE = [
        imagepaths[36],
        imagepaths[37],
        imagepaths[38],
    ]
    IMAGES_DYING = [
        imagepaths[39],
        imagepaths[40],
        imagepaths[41],
        imagepaths[42],
        imagepaths[43],
        imagepaths[44],
        imagepaths[45],

    ]
    world;


    constructor() {
        super().loadImage('img/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png')
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_IDLE)
        this.loadImages(this.IMAGES_IDLE_LONG)
        this.loadImages(this.IMAGES_JUMP)
        this.loadImages(this.IMAGES_DAMAGE)
        this.loadImages(this.IMAGES_DYING)

        this.applyGravity();
        this.animate();

    }

    animate() {
        let idle = 0;
        let idlelong = 0
        setInterval(() => {



            if (this.world.keyboard.RIGHT) {
                this.otherDirection = false;
                this.moveRight(this.speed)


            }
            // && this.isAtRightWall == false
            if (this.world.keyboard.LEFT && this.x > 100) {
                this.otherDirection = true;
                this.moveRight(-this.speed)
            }
            if (this.x < 8110 && !this.bossfight) {
                this.world.camera_x = -this.x + 100;
            } else { this.bossfight = true 
            this.world.camera_x = -8000}

            
        }, 1000 / 20);

        setInterval(() => {

            this.walking_sound.pause()
            if (this.isDead()) {
                this.playAnimation(this.currentImage, this.IMAGES_DYING)

                this.y += 15


            } else if (this.isHurt(0.5, this.lastHit)) {
                this.playAnimation(this.currentImage, this.IMAGES_DAMAGE)
                this.speedY = 2;


                // this.x -= 20;
            }
            else if (this.falling == true) {//this.isOverPlattform(this.ground)

                this.playAnimation(this.currentImage, this.IMAGES_JUMP);
                idle = 0
            } else {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    idle = 0
                    //walk animation
                    this.playAnimation(this.currentImage, this.IMAGES_WALKING);
                    //this.walking_sound.play()
                }
                if (this.world.keyboard.UP && this.jumping == false && this.falling == false) {
                    // console.log(this.checkOnPlatform());
                    // if (this.checkOnPlatform()==true) {
                    //&& !this.isOverPlattform(this.ground)

                    this.jump(this.jumpPower)
                    idle = 0
                    this.jumping_sound.play()
                    // }

                }

            }

            if (this.y >= 1000){
                this.gameover = true
            }
        }, 1000 / 20);


        setInterval(() => {
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.UP && !this.world.keyboard.SPACE) {

                if (idle == this.IMAGES_IDLE.length) {
                    this.playAnimation(idlelong, this.IMAGES_IDLE_LONG)
                    idlelong++;
                } else {
                    let path = this.IMAGES_IDLE[idle]
                    this.img = this.imageCache[path];
                    idle++
                    this.currentImage++
                    idlelong = 0;
                }
            }
        }, 1000 / 2);


    }




}

/**
 wenn chicken spieler berührt = treffer
 dann Charakter erhält schaden
 animation
 und Charakter rutscht zurück



 */