const cursor = document.querySelector('.cursor');

// 1. Position the cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Grow the cursor (Event Delegation)
// This watches the whole body and checks if you are over an interactive class
document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, .hero-title, .nav-ligns, .nav-ligns1, .image-box, .stack-box, .gallery-item');
    
    if (target) {
        cursor.style.transform = 'scale(4)';
        cursor.style.background = 'rgba(255, 95, 31, 0.3)';
    }
});

// 3. Shrink the cursor when leaving
document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, .hero-title, .nav-ligns, .nav-ligns1, .image-box, .stack-box, .gallery-item');
    
    if (target) {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#FF5F1F'; // Your solid accent color
    }
});