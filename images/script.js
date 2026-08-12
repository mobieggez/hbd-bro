const stickerBtn = document.getElementById('stickerBtn');

stickerBtn.addEventListener('click', () => {
  const img = stickerBtn.querySelector('.popup-sticker');
  img.classList.remove('sticker-pop');
  void img.offsetWidth;
  img.classList.add('sticker-pop');

  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 }
  });
});