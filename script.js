function openLetter() {
    const letterContainer = document.getElementById('letter-container');
    const content = document.getElementById('content');
    const bgMusic = document.getElementById('bg-music');

    letterContainer.style.display = 'none';
    content.classList.remove('hidden');
    bgMusic.play();

    explodeHearts();
}

function explodeHearts() {
    const container = document.getElementById('hearts-container');

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
