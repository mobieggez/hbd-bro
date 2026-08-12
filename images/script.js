const stickerAhh = document.getElementById("stickerAhh");
const ctx = stickerAhh.getContext("2d");
const stickerbtn = document.getElementById("stickerbtn");

let confetti = [];
const colors = ["#FFC107", "#FF5722", "#4CAF50", "#2196F3", "#9C27B0"];

stickerAhh.width = window.innerWidth;
stickerAhh.height = window.innerHeight;

function createConfetti() {
    const count = 300;
    confetti = [];

    for (let i = 0; i < count; i++) {
        confetti.push({
            x: Math.random() * stickerAhh.width,
            y: Math.random() * stickerAhh.height,
            size: Math.random() * 10 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 5 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, stickerAhh.width, stickerAhh.height);

    confetti.forEach((piece) => {
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate((piece.rotation * Math.PI) / 180);
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
        ctx.restore();

        piece.x += piece.speedX;
        piece.y += piece.speedY;
        piece.rotation += piece.rotationSpeed;

        if (piece.y > stickerAhh.height) {
            piece.y = 0 - piece.size;
            piece.x = Math.random() * stickerAhh.width;
        }

        if (piece.x > stickerAhh.width) {
            piece.x = 0 - piece.size;
        }

        if (piece.x < 0 - piece.size) {
            piece.x = stickerAhh.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

stickerbtn.addEventListener("click", () => {
    createConfetti();
    drawConfetti();
});

window.addEventListener("resize", () => {
    stickerAhh.width = window.innerWidth;
    stickerAhh.height = window.innerHeight;
});