class TabascoBar extends DrawableObject {
    otherDirection = false;
    x = 20;
    y = 60;
    //width = 200;
    height = 50
    width =50

    IMAGES = [
        'img/img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',

    ];
    //   'img/img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png'
    percentage = 100

    constructor() {
        super().loadImage( 'img/img/6.botella/1.Marcador.png',)
        this.iwidth = this.width
        this.iheight = this.height
        this.loadImages(this.IMAGES)
        //this.loadImages(this.IMAGES);
        this.animate();
    }

    animate() {
     
        setInterval(() => {


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
            this.percentage = percentage*5;
            let path = this.IMAGES[this.resolveImageIndex()];
            this.img = this.imageCache[path]
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