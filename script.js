document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti');
    const cakeContainer = document.createElement('div');
    cakeContainer.id = 'cake-emoji';
    cakeContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999;';
    document.body.appendChild(cakeContainer);

    // Cake emoji fall animation CSS
    const cakeStyle = document.createElement('style');
    cakeStyle.textContent = `
        @keyframes cake-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(cakeStyle);

    // Enhanced confetti colors for birthday theme
    const colors = ['#ff6b9d', '#a8e6cf', '#ffd93d', '#ff6b6b', '#4ecdc4', '#ffeaa7', '#dda0dd', '#98d8c8', '#f7dc6f', '#bb8fce'];

    // Confetti function
    function createConfetti(count = 100) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -10px;
                width: ${Math.random() * 10 + 5}px;
                height: ${confetti.style.width};
                background-color: ${colors[Math.floor(Math.random() * colors.length)]};
                pointer-events: none;
                z-index: 1001;
                animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
                border-radius: 50%;
            `;
            confettiContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }
    }

    // Add confetti animation CSS
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confetti-fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);

// Auto confetti on load
    setTimeout(() => createConfetti(150), 1000);

    // Falling cake emojis on sides
    function createCakeEmoji() {
        const side = Math.random() < 0.5 ? 'left' : 'right';
        const cake = document.createElement('div');
        cake.textContent = '🍰';
        cake.style.cssText = `
            position: fixed;
            ${side}: ${side === 'left' ? Math.random() * 30 : 70 + Math.random() * 30}vw;
            font-size: ${3 + Math.random() * 3}rem;
            animation: cake-fall ${3 + Math.random() * 3}s linear infinite;
            z-index: 999;
        `;
        cakeContainer.appendChild(cake);
        setTimeout(() => cake.remove(), 9000);
    }

    // Spawn cakes continuously
    setInterval(createCakeEmoji, 2000);
    createCakeEmoji(); // Initial one

    // Additional confetti on scroll
    let scrollCount = 0;
    window.addEventListener('scroll', () => {
        scrollCount++;
        if (scrollCount % 3 === 0) { // Every 3rd scroll
            createConfetti(50);
        }
    });

    // Confetti on click
    document.addEventListener('click', () => {
        createConfetti(75);
    });

    // Photo hover animation
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            frame.style.transform = 'scale(1.05) rotate(1deg)';
        });
        frame.addEventListener('mouseleave', () => {
            frame.style.transform = 'scale(1)';
        });
    });
});
