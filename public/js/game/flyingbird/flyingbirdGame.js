let canvas = new Canvas();

const pipeTop = new Image();
pipeTop.src = '/img/game/flyingbird/default/pipe-top.png';

const pipeBot = new Image();
pipeBot.src = '/img/game/flyingbird/default/pipe-bot.png';

let isPlaying = false;
const gravity = 0.25;
const pipeSpeed = 3;
const birdX = 51;
const birdY = 36;
const birdJump = -7;
const canvasTenth = (canvas.getWidth / 10);

//Pipe
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.getHeight - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

let index = 0;
let bestScore = 0;
let currentScore = 0;
let pipes = [];
let flight;
let flyHeight = (canvas.getHeight / 2) - (birdY / 2);

function start() {
    currentScore = 0;
    flight = birdJump;
    flyHeight = (canvas.getHeight / 2) - (birdY / 2);

    pipes = Array(3).fill().map((a, i) => [canvas.getWidth + (i * (pipeGap + pipeWidth)), pipeLoc()]);
    //console.log(pipes)

}

function render() {
    index++;

    //background
    canvas.drawBackground(index, 2);

    if (isPlaying) {

        //bird
        canvas.drawBirdWithMovement(flyHeight, canvasTenth, index);
        flight += gravity;
        flyHeight = Math.min(flyHeight + flight, canvas.getHeight - birdY)

    } else {
        //bird
        canvas.drawBirdWithMovement(flyHeight, (canvas.getWidth / 2) - (canvas.bird.sizeX / 2), index)
        //ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * birdY, birdX, birdY, (canvas.width / 2) - (birdX / 2), flyHeight, birdX, birdY);

        //Text
        canvas.drawText(`Meilleur score ${bestScore}`, 55, 245);
        canvas.drawText(`Cliquer pour jouer`, 48, 535)
    }

    if (index === canvas.getWidth / 2) index = 0;
    //console.log(index)


    //pipe display
    if (isPlaying) {
        pipes.map(pipe => {
            pipe[0] -= pipeSpeed;

            //top
            canvas.ctx.drawImage(pipeTop, 0, pipeTop.height - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);

            //bot
            canvas.ctx.drawImage(pipeBot, 0, 0, pipeWidth, canvas.getHeight - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.getHeight - pipe[1] + pipeGap);

            if (pipe[0] <= -pipeWidth) {
                currentScore++;
                bestScore = Math.max(bestScore, currentScore);

                //remove pipe + create new one
                pipes = [...pipes.slice(1), [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()]];
            }

            if (pipe[0] <= canvasTenth + birdX && pipe[0] + pipeWidth >= canvasTenth && (pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + birdY)) {
                isPlaying = false;
                start();
            }

        })
    }

    document.getElementById('bestScore').innerText = `Meilleur score : ${bestScore}`
    document.getElementById('currentScore').innerText = `Score actuel : ${currentScore}`

    window.requestAnimationFrame(render);
}

start();
window.onload = render;
document.addEventListener('click', () => isPlaying = true);
window.onclick = () => {
    if (flyHeight > 0) flight = birdJump;
}

