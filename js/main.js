let cvs = document.getElementById("canvas");//Обращаэмся к ID

let ctx = cvs.getContext("2d");//выбираем тип игры

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();

//Рисуем картинки
    bird.src = "images/bird.png";
    bg.src = "images/background.png";
    fg.src = "images/flappy_fg.png";
    pipeUp.src = "images/pipeUp.png";
    pipeDown.src = "images/pipeDown.png";

    let gap = 90;

//При нажатии на клавишу
document.addEventListener(keydown, moveUp);

function moveUp () {
    yPos -= 20;
}

//Позицыя птички!
    let xPos = 10;
    let yPos = 150;
    let grav = 1;

    function draw() {
        ctx.drawImage(bg, 0, 0);

        ctx.drawImage(pipeUp, 100, 0);
        ctx.drawImage(pipeDown, 100, 0 + pipeUp.height + gap);

        ctx.drawImage(fg, 0, cvs.height - fg.height);
        ctx.drawImage(bird, xPos, yPos);


        yPos += grav;
        requestAnimationFrame(draw);
        
    }

    pipeDown.onload = draw;