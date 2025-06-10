<script>
// Create cosmic background stars
function createCosmicStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'cosmic-stars';
    document.body.appendChild(starsContainer);
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Enhanced form interactions
function enhanceZohoForm() {
    const forms = document.querySelectorAll('.zs-form');
    
    forms.forEach(form => {
        // Add cosmic title if not exists
        if (!form.querySelector('.cosmic-title')) {
            const title = document.createElement('h2');
            title.className = 'cosmic-title';
            title.innerHTML = '✨ Cosmic Contact ✨';
            title.style.cssText = `
                text-align: center;
                margin-bottom: 30px;
                color: white;
                font-size: 2.5rem;
                font-weight: 700;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                animation: titlePulse 4s ease-in-out infinite;
                font-family: 'Poppins', sans-serif;
            `;
            form.insertBefore(title, form.firstChild);
        }
        
        // Add focus effects to inputs
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.2)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Enhance submit button
        const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
        if (submitBtn && !submitBtn.innerHTML.includes('🚀')) {
            submitBtn.innerHTML = '🚀 Launch Into Space 🚀';
        }
    });
}

// Add title pulse animation
const titleStyle = document.createElement('style');
titleStyle.textContent = `
    @keyframes titlePulse {
        0%, 100% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.5); }
        50% { text-shadow: 0 0 50px rgba(255, 255, 255, 0.8), 0 0 100px rgba(255, 255, 255, 0.3); }
    }
`;
document.head.appendChild(titleStyle);

// Initialize cosmic effects
function initCosmicEffects() {
    createCosmicStars();
    enhanceZohoForm();
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCosmicEffects);
} else {
    initCosmicEffects();
}

// Re-enhance forms after any dynamic loading
setTimeout(initCosmicEffects, 1000);
</script>
