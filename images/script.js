document.addEventListener('DOMContentLoaded', () => {
    const stickerbtn = document.getElementById('stickerbtn');
    if (stickerbtn) {
        stickerbtn.addEventListener('click', function() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });
    }
});