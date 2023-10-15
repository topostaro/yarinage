const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let manX = -30;
let manY = 355 + 150;
let manSpeedX = 2;

let mammothX = -10;
let mammothSpeed = 5;

let imageJimen = new Image();
imageJimen.src = "assets/jimen.png";

let imagesMammoth = [new Image(), new Image(), new Image(), new Image()];
imagesMammoth[0].src = "assets/mammothL1.png";
imagesMammoth[1].src = "assets/mammothL2.png";
imagesMammoth[2].src = "assets/mammothL3.png";
imagesMammoth[3].src = "assets/mammothL4.png";


let imageMammoth = new Image();
imageMammoth.src = "assets/mammothL.png";

let animationCount = 0;


// キャンバスのサイズを設定する関数
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

const drawMan = () => {

    ctx.fillStyle = "black";
    ctx.fillRect(manX, manY, 10, 50);
};

const drawJimen = () => {
    tileScale = 80
    for (let x = 0; x < canvas.width; x += tileScale) { // 100px ごとに画像を配置
        ctx.drawImage(imageJimen, x, 500, tileScale, tileScale);
    }
};

const drawMammoth = () => {
    let i = Math.floor(animationCount / 10);

    if (mammothX > canvas.width) {
        mammothX = -300
    }

    ctx.drawImage(imagesMammoth[i % 4], mammothX, 355, 200, 200);
};

const drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMammoth();
    drawMan();
    drawJimen();
};

const timeEvolution = () => {
    mammothX += mammothSpeed;
    manX += manSpeedX

    animationCount += 1;

};

// ゲームループ
const gameLoop = () => {

    resizeCanvas();

    drawCanvas();
    timeEvolution();
    requestAnimationFrame(gameLoop);
}


// ゲーム開始
gameLoop();
