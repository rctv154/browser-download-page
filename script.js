// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add interactive card tilt effect on mouse move
var cards = document.querySelectorAll('.app-card');

cards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        
        var rotateX = (y - centerY) / 20;
        var rotateY = (centerX - x) / 20;
        
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add download tracking and feedback
var downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        var appName = this.closest('.app-card').querySelector('.app-name').textContent;
        
        // Add visual feedback
        var originalText = this.querySelector('.btn-text').textContent;
        this.querySelector('.btn-text').textContent = '正在下载...';
        
        // Create ripple effect
        var ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        // Reset button text after delay
        var self = this;
        setTimeout(function() {
            self.querySelector('.btn-text').textContent = originalText;
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 2000);
        
        console.log('开始下载: ' + appName);
    });
});

// Add ripple animation
var style = document.createElement('style');
style.textContent = '\
    @keyframes ripple {\
        to {\
            transform: scale(4);\
            opacity: 0;\
        }\
    }\
';
document.head.appendChild(style);

// Add intersection observer for scroll animations
if ('IntersectionObserver' in window) {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(function(card) {
        observer.observe(card);
    });
}

// Add parallax effect to background
window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var pattern = document.querySelector('.background-pattern');
    if (pattern) {
        pattern.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// Prevent default download behavior and add custom handling
downloadButtons.forEach(function(button) {
    var href = button.getAttribute('href');
    button.addEventListener('click', function(e) {
        // Let the browser handle the download naturally
        // The visual feedback is already added above
        console.log('下载链接: ' + href);
    });
});
