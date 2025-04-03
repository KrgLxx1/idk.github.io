document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const animationScreen = document.getElementById('animation-screen');
    const tractorContainer = document.getElementById('tractor-container');
    const movingTractor = document.getElementById('moving-tractor');
    const tractorGallery = document.getElementById('tractor-gallery');
    const jumpscareScreen = document.getElementById('jumpscare-screen');
    const backgroundMusic = document.getElementById('background-music');
    const jumpscareSound = document.getElementById('jumpscare-sound');

    // Number of tractor images to show in the gallery
    const numberOfTractors = 15;
    
    // Create tractor gallery images
    for (let i = 1; i <= numberOfTractors; i++) {
        const tractorImg = document.createElement('img');
        tractorImg.src = `images/tractor${Math.floor(Math.random() * 5) + 1}.jpg`; // Random tractor image
        tractorImg.classList.add('gallery-tractor');
        tractorImg.style.left = `${Math.random() * 80 + 10}%`;
        tractorImg.style.top = `${Math.random() * 80 + 10}%`;
        tractorImg.style.animationDelay = `${Math.random() * 2}s`;
        tractorImg.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;
        tractorGallery.appendChild(tractorImg);
    }

    // Start button click event
    startButton.addEventListener('click', () => {
        // Hide start screen and show animation screen
        startScreen.classList.add('hidden');
        animationScreen.classList.remove('hidden');
        
        // Start moving the tractor
        setTimeout(() => {
            tractorContainer.style.left = '120%';
            backgroundMusic.play();
        }, 100);
        
        // Show tractor gallery after 4 seconds
        setTimeout(() => {
            tractorGallery.classList.remove('hidden');
            
            // Fade in each tractor with delay
            document.querySelectorAll('.gallery-tractor').forEach((tractor, index) => {
                setTimeout(() => {
                    tractor.style.opacity = '1';
                }, index * 200);
            });
        }, 4000);
        
        // Show jumpscare after 10 seconds
        setTimeout(() => {
            animationScreen.classList.add('hidden');
            jumpscareScreen.classList.remove('hidden');
            backgroundMusic.pause();
            jumpscareSound.play();
        }, 10000);
    });
});
