class MovableObject extends DrawableObject {
bossfight=false
    speed = 0.15;
    otherDirection = false;
    ground = 500
    onGround = true;
    speedY = 0;
    acceleration = 1.5;
    lastHit = 1;
    isAtLeftWall = false;
    isAtRightWall = false;
    //onPlatform = false;
    jumpPower = 22
    jumping = false
    falling = false
    onPlatformTimer = 1

    isFighting(enemy) {
        if (this.isColliding(enemy, 0, -this.speedY)) {
            if (this.isJumpingOn(enemy)) {
                this.isThrown("up", 0);
                enemy.hit(5);
                this.boost()
                this.jump(this.jumpPower)

            } else if (this.isLeftFrom(enemy)) {
                if (!this.isHurt(1, this.lastHit)) {
                    this.hit(1);
                    world.statusbar.setPercentage(this.energy*20)
                    this.moveRight(-this.speed * 5)
                    this.jump(this.jumpPower)
                    enemy.moveRight(this.speed * 5)
                }
            } else { // this is Right from Object
                if (!this.isHurt(1, this.lastHit)) {
                    this.hit(1);
                    world.statusbar.setPercentage(this.energy*20)
                    this.moveRight(-this.speed * 5)
                    this.jump(this.jumpPower)
                    enemy.moveRight(-this.speed * 5)

                }
            }
        }
    }
boost(){
    this.jumpPower+=0.05
    if(this.speed>0){
        this.speed +=0.1}else{this.speed-=0.1}
}

    pickUp(items, beutel, bar) {
        for (let bindex = 0; bindex < items.length; bindex++) {
            let item = items[bindex];
            if (this.isColliding(item, 0, 0)) {
                items.splice(bindex, 1)
                this.boost()
                if (item instanceof Coins){
                    this[beutel] += 1;
                this.coins_pickUp_sound.currentTime=0;
                this.coins_pickUp_sound.play()
            }
            if (item instanceof LootableObject){
                this[beutel] += 3;
                this.bottle_pickUp_sound.currentTime=0;
                this.bottle_pickUp_sound.play()
            }
                //   world[bar].setPercentage(this.beutel);

            }

        }
    }

    shatteringOn(object) {
        if (this.isColliding(object, 0, 0)) {
            if (!this.isHurt(5, this.lastHit)) {
                this.hit(1)
                setTimeout(() => {
                    world.throwableobjects.splice(0, 1)
                }, 6600 / 30);
                object.hit(1)

            }
        }
    }


    groundDetection(platform) { // console.log(platform.y);
        if (this.isColliding(platform, 0, -this.speedY) && this.energy > 0) {
            if (this.isJumpingOn(platform) && this.y < platform.y && this.y + this.height < platform.y + (platform.height / 2)) {
                this.y += platform.y - (this.y + this.height + 0.1)
                this.speedY = 0;
                this.falling = false
                this.jumping = false
            } else {
                if (!this.isLeftFrom(platform) && ((platform.state == "solid" || platform.state == "barrier"))) {
                    if (this instanceof Chicken || this instanceof FastChicken || this instanceof Boss) {
                        this.speed = -this.speed;
                        this.moveRight(this.speed)
                    }
                }
                if (this.isLeftFrom(platform) == true &&
                    (platform.state == "solid" || platform.state == "barrier")
                ) {
                    if (this instanceof Character && platform.state != "barrier" && platform.state != "top") {
                        if (this.world.keyboard.RIGHT) {
                            this.x += platform.x - (this.x + this.width);
                        }
                    }
                    if (this instanceof Chicken || this instanceof FastChicken  || this instanceof Boss) {
                        this.x += platform.x - (this.x + this.width + 0.1);
                        this.otherDirection = false
                        this.speed = -this.speed
                    } 
                }else {if (this instanceof Character && platform.state != "barrier" && platform.state != "top") {
                    if (this.world.keyboard.LEFT) {
                        this.x += platform.x +platform.width- (this.x );
                    }
                }}
            }
        }
    }


    /*************************************************************************************************************************************
     * ***********************************************************************************************************************************
     *                 
     *  Physic 
     * 
     * ***********************************************************************************************************************************
     * ************************************************************************************************************************************/

    /**
         * 
         * @param {*} object 
         */
    checkGravity(object) {
        let ground = this.definePlatformHeights(object)
        this.applyGravity(ground)
    }

    /**
              * 
              * @param {*OBJECT} objects 
              * @returns array with all x from objects
              */
    definePlatformHeights(objects) {
        let ground = []
        objects.forEach((platform) => {
            if ((this.x + this.width / 2) > platform.x - 1 && (this.x + this.width / 2) < platform.x + platform.width) {
                ground.push(platform.ground)
            }
        })
        return ground
    }

    /**
     * 
     * @param {*} platform 
     */
    applyGravity(platform) {
        this.ground = platform;
        this.y -= this.speedY;
        if (this.speedY < -1.5) { this.falling = true }
        this.speedY -= this.acceleration

    }

    /**
     * 
     * @param {*} ground 
     * @returns 
    
    isOverPlattform(ground) {
        for (let index = 0; index < ground.length; index++) {
            if (index == 0) {console.log(this.speedY, " ", this.y + this.height," ", ground[index]);
                if (this.y + this.height +0.2-this.speedY< ground[index]) {
                    return true
                };
            } else if
                (this.y + this.height > ground[index - 1] +0.2 && this.y + this.height < ground[index]) {
                return true
            }
        }
        return false
    }
 */


    /*************************************************************************************************************************************
    * ***********************************************************************************************************************************
    * 
    * Collision
    * 
    * ***********************************************************************************************************************************
    * ************************************************************************************************************************************/


    /**
     * 
     * @param {*} mo 
     * @returns 
     */
    isAtWallLeft(mo) {
        return this.x + this.width == mo.x - 1
    }

    /**
     * 
     * @param {*} mo 
     * @returns 
     */
    isColliding(mo, speed, speedY) {
        return this.x + speed < mo.x + mo.width &&
            this.x + this.width + speed > mo.x &&
            this.y + speedY < mo.y + mo.height &&
            this.y + this.height + speedY > mo.y
    }

    /**
     * 
     * @param {*} mo 
     * @returns 
     */
    isJumpingOn(mo) {
        return this.contactWidthWith(mo, "x", "width") > this.contactWidthWith(mo, "y", "height")

    }

    /**
            * 
            * @param {*} mo 
            * @returns 
            */
    isLeftFrom(mo) {

        return this.x < mo.x
    }
    isRightFrom(mo) {
        return this.x + this.width - this.speed / 2 > mo.x + mo.width
    }


    /**
     * 
     * @param {*} mo 
     * @param {*} coordinate 
     * @param {*} coordinateLength 
     * @returns 
     */
    contactWidthWith(mo, coordinate, coordinateLength) {
        if (this[coordinate] >= mo[coordinate] &&
            this[coordinate] + this[coordinateLength] <= mo[coordinate] + mo[coordinateLength] &&
            this[coordinateLength] <= mo[coordinateLength]) {
            return this[coordinateLength]
        }
        if (this[coordinate] <= mo[coordinate] &&
            this[coordinate] + this[coordinateLength] >= mo[coordinate] + mo[coordinateLength] &&
            this[coordinateLength] > mo[coordinateLength]) {
            return mo[coordinateLength]
        }
        if (this[coordinate] < mo[coordinate] &&
            this[coordinate] + this[coordinateLength] < mo[coordinate] + mo[coordinateLength]) {
            return this[coordinate] + this[coordinateLength] - mo[coordinate]
        }
        if (this[coordinate] > mo[coordinate] &&
            this[coordinate] + this[coordinateLength] > mo[coordinate] + mo[coordinateLength]) {
            return mo[coordinate] + mo[coordinateLength] - this[coordinate]
        }
    }

    /*************************************************************************************************************************************
   * ***********************************************************************************************************************************
   * 
   * Movement
   * 
   * ***********************************************************************************************************************************
   * ************************************************************************************************************************************/
    /**
         * 
         * @param {*} side 
         * @param {*} wide 
         */
    isThrown(side, wide) {
        switch (side) {
            case 'left': this.x -= wide;
            case 'right': this.x += wide;


        }
    }
    /**
     * 
     * @param {*} speed 
     */
    moveRight(speed) {
        this.x += speed
    }

    /**
     * 
     */
    jump(jumpPower) {
        this.speedY = jumpPower;
        this.jumping = true;
    }

    /*************************************************************************************************************************************
  * ***********************************************************************************************************************************
  * 
  * objectstatus
  * 
  * ***********************************************************************************************************************************
  * ************************************************************************************************************************************/

    /**
     * 
     */
    isOnGround() {
        this.onGround == true
    }

    hit(damage) {
        this.energy -= damage;
        if(this instanceof Character){
        this.damage_sound.play()}
        if (this instanceof ThrowableObject){world.bottle_damage_sound.play()}
        if (this instanceof Chicken||this instanceof Boss||this instanceof FastChicken) {world.chicken_damage_sound.play()}
            
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * 
     * @param {*} time 
     * @returns 
     */
    isHurt(time, lastHit) {
        let timepassed = new Date().getTime() - lastHit; //Difference in ms
        timepassed = timepassed / 1000 //Difference in s
        return timepassed < time;
    }
    /**
     * 
     * @returns 
     */
    isDead() {
        return this.energy == 0
    }



}