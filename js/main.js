"use strict"
let cvs = document.getElementById("canvas");//Обращаэмся к ID

let ctx = cvs.getContext("2d");//выбираем тип игры

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();

//Добавляем звук в игру
let fly =  new Audio();
let score =  new Audio();

    fly.src = "audio/fly.mp3";
    score.src = "audio/score.mp3";

//Рисуем картинки
    bird.src = "images/bird.png";
    bg.src = "images/background.png";
    fg.src = "images/flappy_fg.png";
    pipeUp.src = "images/pipeUp.png";
    pipeDown.src = "images/pipeDown.png";

    let gap = 90;

//При нажатии на клавишу
document.addEventListener('keydown', moveUp);

function moveUp () {
    yPos -= 25;
    fly.play();
}

//Создание блоков
let pipe [];

pipe[0] = {
    x : cvs.width,
    y : 0
}

let score = 0;
//Позицыя птички!
let xPos = 10;
let yPos = 150;
let grav = 1.5;

    function draw() {
        ctx.drawImage(bg, 0, 0);

        for (let i = 0; i < pipe.length; i++) {
            ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);          
            ctx.drawImage(pipeDown, pipe[i].x, pipe[i].y + pipeUp.height + gap);

            pipe[i].x--;

            if(pipe[i].x == 125) {
                pipe.push({
                    X : cvs.width,
                    y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
                });

                //Отслеживание столкновения
            if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
            location.reload();//reload Game
          }

        if(pipe[i].x ==5) {
            score++;
            score.play();
        }
    }


        ctx.drawImage(fg, 0, cvs.height - fg.height);
        ctx.drawImage(bird, xPos, yPos);

        yPos += grav;


        requestAnimationFrame(draw);// Вызов функции постоянно
        
        ctx.fillStyle = "#000";
        ctx.dont = "20px Arial";
        ctx.fillText("Счет: " + score, 10, cvs.height - 20);
    }

    pipeDown.onload = draw;