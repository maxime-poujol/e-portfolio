import {Bird} from "./bird";

export class Canvas {

    /**
     *
     * @param {String} theme
     * @param bird
     */
    constructor(theme = 'default') {

        this.bg = new Image();
        this.bg.src = '/img/game/flyingbird/' + theme + '/background.png';

        this.bird = new Bird();

        /**
         *
         * @type {HTMLCanvasElement}
         */
        this.canvas = document.getElementById("canvas");
        this.canvas.width = this.bg.width;  //431
        this.canvas.height = this.bg.height //768

        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = 'bold 30px courier';
    }

    /**
     *
     * @param {HTMLImageElement} wing
     * @param {Number} sizeX
     * @param {Number} sizeY
     * @param {Number} flyHeight
     * @param {Number} positionXInCanvas
     */
    drawBird(wing, flyHeight, positionXInCanvas) {
        this.ctx.drawImage(wing, 0, 0, this.bird.sizeX, this.bird.sizeY, positionXInCanvas, flyHeight, this.bird.sizeX, this.bird.sizeY);
    }

    /**
     *
     * @param {Bird} bird
     * @param {Number} flyHeight
     * @param {Number} positionXInCanvas
     * @param {Number} index
     */
    drawBirdWithMovement(flyHeight, positionXInCanvas, index) {
        switch (Math.floor((index % 9) / 3)) {
            case 1:
                this.drawBird(this.bird.wingTop, flyHeight, positionXInCanvas);
                break;
            case 2:
                this.drawBird(this.bird.wingMid, flyHeight, positionXInCanvas);
                break;
            case 0:
                this.drawBird(this.bird.wingBot, flyHeight, positionXInCanvas);
                break;
        }
    }

    /**
     *
     * @param {Number} index
     * @param {Number} bgSpeed
     */
    drawBackground(index, bgSpeed) {
        //console.log(this.bg)
        this.ctx.drawImage(this.bg, 0, 0, this.canvas.width, this.canvas.height, -((index * bgSpeed) % this.canvas.width) + this.canvas.width, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.bg, 0, 0, this.canvas.width, this.canvas.height, -((index * bgSpeed) % this.canvas.width), 0, this.canvas.width, this.canvas.height)

    }

    drawText(text, x, y) {
        this.ctx.fillText(text, x, y);
    }

    get getHeight() {
        return this.canvas.height;
    }

    get getWidth() {
        return this.canvas.width;
    }


}








