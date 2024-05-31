function openLetter() {
    const letterContainer = document.getElementById('letter-container');
    const content = document.getElementById('content');
    const bgMusic = document.getElementById('bg-music');

    letterContainer.style.display = 'none';
    content.classList.remove('hidden');
    bgMusic.play();

    setInterval(createHeart, 500); // Create new heart every 0.5 seconds
}

function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    container.appendChild(heart);
}
