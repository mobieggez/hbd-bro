const stickerbtn = document.getElementById('stickerbtn');

stickerBtn.addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {y:0.3}
    });
});