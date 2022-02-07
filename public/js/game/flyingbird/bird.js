class Bird{


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

}
