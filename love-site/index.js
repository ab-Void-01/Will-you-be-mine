// Create starry background
function createStars() {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1 + 'px'; // 1px–3px (was able to be ~0px)
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        stars.appendChild(star);
    }
}

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.fontSize = Math.random() * 2 + 1 + 'rem';
    document.querySelector('.floating-hearts').appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

// Create firework effect
function createFirework(x, y) {
    const colors = ['#ff4d6d', '#ff8fa3', '#ff758f'];
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.special-effects').appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setInterval(createHeart, 300);

    const revealBtn = document.getElementById('revealBtn');
    const loveStory = document.getElementById('loveStory');

    revealBtn.addEventListener('click', () => {
        const isOpen = loveStory.classList.toggle('visible');
        revealBtn.setAttribute('aria-expanded', String(isOpen));

        const rect = revealBtn.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createFirework(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height
                );
            }, i * 100);
        }

        revealBtn.textContent = isOpen ? 'Close My Heart 💝' : 'Open My Heart ❤️';

        if (isOpen) {
            setTimeout(() => loveStory.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
        }
    });

    // Sprinkle a few hearts on mouse movement (card tilt removed)
    document.addEventListener('mousemove', () => {
        if (Math.random() < 0.1) {
            createHeart();
        }
    });
});
