class BossBar extends DrawableObject {
    otherDirection = true;
    x = 570;
    y = 10;
    width = 200;
    height = 50

    IMAGES = [
        'img/img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/img/7.Marcadores/Barra/Marcador vida/Naranja/20_ .png',
        'img/img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'
    ];
    percentage = 100

    constructor() {
        super().loadImage('img/img/7.Marcadores/Elementos_barra_separados/relleno verde.png')
        
        
        this.iwidth = this.width
        this.iheight = this.height
        this.loadImages(this.IMAGES)
        //this.loadImages(this.IMAGES);
        this.animate();


        this.Icon = new Image()
        this.Icon.src = "img/img/7.Marcadores/Icono/Mesa de trabajo 130.png"
        this.background = new Image()
        this.background.src = "img/img/7.Marcadores/Elementos_barra_separados/fondo.png"
    }

    animate() {
     
        setInterval(() => {

this.width = world.level.enemies[0].energy *2
this.x =570+ (200-this.width)
            /*
                    if (this.world.keyboard.RIGHT && this.isAtLeftWall == false) {
                        this.otherDirection = false;
                        this.moveRight(this.speed)
            
                    }
                    if (this.world.keyboard.LEFT && this.x > 100 && this.isAtRightWall == false) {
                        this.otherDirection = true;
                        this.moveRight(-this.speed)
                    }
            */
           
        }, 1000 / 40);
    }
        setPercentage(percentage){
            this.percentage = percentage;
            let path = this.IMAGES[0];
            this.img = this.imageCache[path]
            this.iwidth = this.percentage*2
        }


        resolveImageIndex(){
            if (this.percentage == 100) {
                return 5
            } else if (this.percentage == 80) {
                return 4
            } else if (this.percentage == 60) {
                return 3
            } else if (this.percentage == 40) {
                return 2
            } else if (this.percentage == 20) {
                return 1
            } else if (this.percentage == 0) {
                return 0
            }
        }
    }