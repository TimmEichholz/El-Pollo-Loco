class DrawableObject {

    x = 120;
    y = 400;
    ix = 0
    iy =0
    iwidth 
    iheight 
    img;
    height = 100;
    width = 100;
    currentimage = 0;
    imageCache = {}

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
    playAnimation(counter, imagepath) {
        let i = counter % imagepath.length;
        let path = imagepath[i]
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    


    drawPic(ctx) {
        if (this instanceof Character|| this instanceof Chicken||this instanceof FastChicken || this instanceof Boss) {
            ctx.drawImage(this.img, this.x - this.ix, this.y - this.iy, this.iwidth, this.iheight)
        } else {ctx.drawImage(this.img, this.x, this.y, this.width, this.height)}
    }

    flipImage(ctx) {
        if (this.otherDirection) {
            ctx.save();
            ctx.translate(this.width, 0)

            ctx.scale(-1, 1);
            this.x = this.x * -1
        }
    }

    flipImageBack(ctx) {
        if (this.otherDirection) {
            this.x = this.x * -1
            ctx.restore()
        }
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Barriers || this instanceof Boss) {
            ctx.beginPath();
            ctx.lindwidth = "5";
            ctx.strokeStyle = "green";
            if (this instanceof Character) { ctx.rect(this.x, this.y, this.width, this.height); } else { ctx.rect(this.x, this.y, this.width, this.height); }

            ctx.stroke();
        }
    }
}