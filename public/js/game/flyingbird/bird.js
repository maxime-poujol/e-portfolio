export class Bird{


    constructor(jump = 9, theme = 'default') {
        this.wingTop = new Image();
        this.wingTop.src = '/img/game/flyingbird/' + theme + '/bird-wings-top.png';

        this.wingMid = new Image();
        this.wingMid.src = '/img/game/flyingbird/' + theme + '/bird-wings-mid.png';

        this.wingBot = new Image();
        this.wingBot.src = '/img/game/flyingbird/' + theme + '/bird-wings-bot.png';

        this.sizeX = 51;
        this.sizeY = 36;

        this.jump = jump;
    }

    draw(ctx, canvasX, index = 0){
        switch (Math.floor((index % 9) / 3)) {
            case 1:
                ctx.drawImage(this.wingTop, 0, 0, this.sizeY, birdY, (canvas.width / 2) - (birdX / 2), flyHeight, birdX, birdY);
                break;
            case 2:
                ctx.drawImage(this.wingMid, 0, 0, birdX, birdY, (canvas.width / 2) - (birdX / 2), flyHeight, birdX, birdY);
                break;
            case 0:
                ctx.drawImage(this.wingBot, 0, 0, birdX, birdY, (canvas.width / 2) - (birdX / 2), flyHeight, birdX, birdY);
                break;
        }
    }

}
