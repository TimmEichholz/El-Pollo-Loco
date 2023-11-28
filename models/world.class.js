class World {
    
    bossbar = new BossBar()
    character = new Character();
    statusbar = new StatusBar();
    tabascobar = new TabascoBar()
    moneybar = new MoneyBar()
    startscreen = new Image()
    gameover = new Image()
    gameover2 = new Image()
    chicken_damage_sound = new Audio('sounds/chickenSqeak1.mp3')
    bottle_damage_sound = new Audio('sounds/shatter.mp3')
    throwableobjects = [];

    level = level1
    ctx;
    canvas;
    keyboard;
    speedY = 0;
    acceleration = 1;
    camera_x = 0;
    easy = false



    constructor(canvas, keyboard) {
        this.startscreen.src = "img/img/9.Intro _ Outro Image/Start Screen/Opción 1.png"
        this.gameover.src = "img/img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png"
        this.gameover2.src ="img/img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png"
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.ctx.font = "30px Arial";

        this.draw()
        this.setWorld();
        this.update();



    }

    setWorld() {
        this.character.world = this;
    }



    update() {
        setInterval(() => {

            this.checkThrowableObjects();

            this.character.pickUp(this.level.bottles, "quiver", "tabascobar")
            this.character.pickUp(this.level.coins, "moneybag", "moneybar")

            this.character.checkGravity(this.level.platforms)
            this.level.platforms.forEach((platform) => {
                this.character.groundDetection(platform)

            })

            this.level.platforms.forEach((platform) => {
                this.throwableobjects.forEach((bottle) => {
                    bottle.shatteringOn(platform)

                })
            })


            this.level.enemies.forEach((enemy) => {

                this.character.isFighting(enemy)

                this.throwableobjects.forEach((bottle) => {
                    bottle.shatteringOn(enemy)
                })
                this.level.platforms.forEach((platform) => {
                    this.level.enemies.forEach((enemy) => {
                        enemy.groundDetection(platform)

                    })
                })
                enemy.checkGravity(this.level.platforms)
            })
            if (this.character.x >= 6075) {
                world.level.platforms[22].y += 50;

            }
            /*
            if (this.character.x > 7990){

            world.level.platforms[30].state ="solid"
            }
           */

        }, 1000 / 60);

    }



    checkThrowableObjects() {
        if (this.keyboard.SPACE && this.character.quiver > 0 && !this.character.isHurt(1, this.character.lastThrow)) {
            this.character.quiver--;
            let tabasco = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);

            this.throwableobjects.push(tabasco);
            this.character.lastThrow = new Date().getTime();
            this.character.throwing_sound.currentTime = 0;
            this.character.throwing_sound.play()
        }
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (document.getElementById("start").classList.contains('d-none')) {
            this.ctx.translate(this.camera_x, 0);

        this.drawEach(this.level.backgroundobjects)

        this.drawEach(this.level.platforms)

        this.ctx.translate(-this.camera_x, 0);
        //this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);


        if (this.character.gameover == true || this.level.enemies[0].won == true) {
            if (this.character.gameover == true) {
               // this.ctx.fillText("GAME OVER", this.ctx.canvas.width / 2 - 100, this.ctx.canvas.height / 2);
               document.getElementById("restart").classList.remove('d-none')
                this.ctx.drawImage(this.gameover, 0, 0, this.canvas.width, this.canvas.height)
            }

            if (this.level.enemies[0].won == true) {
                setTimeout(()=>{
                    document.getElementById("restart").classList.remove('d-none')
                   
                },2000)
                this.ctx.drawImage(this.gameover2, 0, 0, this.canvas.width, this.canvas.height)
             //   this.ctx.fillText("!!YOU WON!!", this.ctx.canvas.width / 2 - 100, this.ctx.canvas.height / 2);

            }
        } else {
            this.drawMirror(this.statusbar)
            this.drawMirror(this.tabascobar)
            this.drawMirror(this.moneybar)
            if (this.character.x > 8000) {
                this.drawMirror(this.bossbar)
            }



            this.ctx.fillText(this.character.quiver, 60, 97);
            this.ctx.fillText(this.character.moneybag, 165, 97);
            //  this.ctx.fillText("!!YOU WON!!", this.ctx.canvas.width/2-100, this.ctx.canvas.height/2);
            //if(this.character.x < 8100){
            this.ctx.translate(this.camera_x, 0);
            //  }else{  this.ctx.translate(-8100, 0);}
            this.drawMirror(this.character)


            this.drawEach(this.level.enemies)
            this.drawEach(this.level.clouds)
            this.drawEach(this.level.bottles)
            this.drawEach(this.level.coins)
            this.drawEach(this.throwableobjects)
       
        // if(this.character.x < 8100){
        this.ctx.translate(-this.camera_x, 0);
        // }else{this.ctx.translate(8100, 0);}
        // draw wird wieder aufgerufen nachdem alles gezeichnet wurde
    }
        }else{

            this.ctx.drawImage(this.startscreen, 0, 0, this.canvas.width, this.canvas.height)
        }

        
        let self = this;
        requestAnimationFrame(function () { self.draw() });

    }

    drawEach(objects) {
        objects.forEach(worldobject => {
            this.drawMirror(worldobject)
        });
    }

    drawMirror(object) {

        object.flipImage(this.ctx)
        object.drawPic(this.ctx)
        //   object.drawFrame(this.ctx)
        object.flipImageBack(this.ctx)
    }



}


