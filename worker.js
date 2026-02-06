// Cloudflare Worker for App Download Page
// Base64-encoded app icons
const MOMO_ICON_BASE64 = 'data:image/png;base64,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';

const KUAKE_ICON_BASE64 = 'data:image/png;base64,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';

// CSS Content
const CSS_CONTENT = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --momo-primary: #ff6b6b;
    --momo-secondary: #ff8787;
    --momo-glow: rgba(255, 107, 107, 0.4);
    
    --kuake-primary: #4c6ef5;
    --kuake-secondary: #748ffc;
    --kuake-glow: rgba(76, 110, 245, 0.4);
    
    --bg-dark: #0a0e27;
    --bg-card: rgba(255, 255, 255, 0.05);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-muted: rgba(255, 255, 255, 0.5);
}

body {
    font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* Background Effects */
.background-gradient {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
    z-index: -2;
}

.background-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(76, 110, 245, 0.1) 0%, transparent 50%);
    z-index: -1;
    animation: patternFloat 20s ease-in-out infinite;
}

@keyframes patternFloat {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, 20px); }
}

/* Container */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 20px;
}

/* Header */
.header {
    text-align: center;
    margin-bottom: 80px;
    animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.main-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    margin-bottom: 20px;
    letter-spacing: -1px;
}

.title-gradient {
    background: linear-gradient(135deg, #ff6b6b 0%, #4c6ef5 50%, #ff6b6b 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 5s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    font-weight: 400;
}

/* Apps Grid */
.apps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: 40px;
    margin-bottom: 60px;
}

/* App Card */
.app-card {
    position: relative;
    background: var(--bg-card);
    backdrop-filter: blur(20px);
    border-radius: 32px;
    padding: 50px 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 0.8s ease-out backwards;
}

.app-card:nth-child(1) {
    animation-delay: 0.1s;
}

.app-card:nth-child(2) {
    animation-delay: 0.2s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.app-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.2);
}

#momo-card:hover {
    box-shadow: 0 20px 60px rgba(255, 107, 107, 0.3);
}

#kuake-card:hover {
    box-shadow: 0 20px 60px rgba(76, 110, 245, 0.3);
}

/* Card Glow */
.card-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 32px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    filter: blur(20px);
}

.momo-glow {
    background: linear-gradient(135deg, var(--momo-primary), var(--momo-secondary));
}

.kuake-glow {
    background: linear-gradient(135deg, var(--kuake-primary), var(--kuake-secondary));
}

.app-card:hover .card-glow {
    opacity: 0.6;
}

/* Card Content */
.card-content {
    position: relative;
    z-index: 1;
}

/* App Icon */
.app-icon-wrapper {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 0 auto 30px;
}

.icon-ring {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
}

.momo-ring {
    background: linear-gradient(135deg, var(--momo-primary), var(--momo-secondary));
}

.kuake-ring {
    background: linear-gradient(135deg, var(--kuake-primary), var(--kuake-secondary));
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 0.3;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.5;
    }
}

.app-icon {
    width: 140px;
    height: 140px;
    border-radius: 32px;
    object-fit: cover;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.app-card:hover .app-icon {
    transform: scale(1.05) rotate(2deg);
}

/* App Name */
.app-name {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
}

/* App Description */
.app-description {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 25px;
}

.feature-tag {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 0.75rem;
    margin: 5px 4px;
    font-weight: 500;
    transition: all 0.3s ease;
}

#momo-card .feature-tag:hover {
    background: var(--momo-glow);
    color: var(--momo-primary);
}

#kuake-card .feature-tag:hover {
    background: var(--kuake-glow);
    color: var(--kuake-primary);
}

/* Features List */
.features-list {
    display: grid;
    gap: 15px;
    margin-bottom: 35px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.feature-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

.feature-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}

#momo-card .feature-icon {
    color: var(--momo-primary);
}

#kuake-card .feature-icon {
    color: var(--kuake-primary);
}

.feature-item span {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Download Button */
.download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 18px 32px;
    border-radius: 16px;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.momo-btn {
    background: linear-gradient(135deg, var(--momo-primary), var(--momo-secondary));
}

.kuake-btn {
    background: linear-gradient(135deg, var(--kuake-primary), var(--kuake-secondary));
}

.download-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.download-btn:hover::before {
    left: 100%;
}

.download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.momo-btn:hover {
    box-shadow: 0 10px 30px var(--momo-glow);
}

.kuake-btn:hover {
    box-shadow: 0 10px 30px var(--kuake-glow);
}

.download-btn:active {
    transform: translateY(0);
}

.btn-icon {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
}

.download-btn:hover .btn-icon {
    transform: translateY(3px);
    animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(3px); }
    50% { transform: translateY(6px); }
}

/* Footer */
.footer {
    text-align: center;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 40px 20px;
    }
    
    .header {
        margin-bottom: 50px;
    }
    
    .apps-grid {
        gap: 30px;
        margin-bottom: 40px;
    }
    
    .app-card {
        padding: 40px 30px;
    }
    
    .app-icon-wrapper {
        width: 120px;
        height: 120px;
    }
    
    .app-icon {
        width: 120px;
        height: 120px;
    }
    
    .app-name {
        font-size: 1.75rem;
    }
}

@media (max-width: 480px) {
    .app-card {
        padding: 30px 20px;
        border-radius: 24px;
    }
    
    .app-icon-wrapper {
        width: 100px;
        height: 100px;
    }
    
    .app-icon {
        width: 100px;
        height: 100px;
        border-radius: 24px;
    }
    
    .download-btn {
        padding: 16px 28px;
        font-size: 1rem;
    }
}
`;

// JavaScript Content
const JS_CONTENT = `// Add smooth scroll behavior
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
style.textContent = '\\
    @keyframes ripple {\\
        to {\\
            transform: scale(4);\\
            opacity: 0;\\
        }\\
    }\\
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
`;

// HTML Content
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="下载陌陌浏览器和夸克浏览器 - 快速、安全、流畅的移动浏览体验">
    <title>浏览器下载 - 陌陌浏览器 & 夸克浏览器</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>${CSS_CONTENT}</style>
</head>
<body>
    <div class="background-gradient"></div>
    <div class="background-pattern"></div>
    
    <div class="container">
        <header class="header">
            <h1 class="main-title">
                <span class="title-gradient">免费翻墙浏览器</span>
            </h1>
            <p class="subtitle">体验极速、安全、流畅的移动浏览</p>
        </header>

        <div class="apps-grid">
            <!-- 陌陌浏览器 -->
            <div class="app-card" id="momo-card">
                <div class="card-glow momo-glow"></div>
                <div class="card-content">
                    <div class="app-icon-wrapper">
                        <div class="icon-ring momo-ring"></div>
                        <img src="${MOMO_ICON_BASE64}" alt="陌陌浏览器图标" class="app-icon">
                    </div>
                    
                    <h2 class="app-name">陌陌浏览器</h2>
                    <p class="app-description">
                        极速浏览，智能省流<br>
                        <span class="feature-tag">广告拦截</span>
                        <span class="feature-tag">隐私保护</span>
                        <span class="feature-tag">夜间模式</span>
                    </p>
                    
                    <div class="features-list">
                        <div class="feature-item">
                            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                            <span>极速加载</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                            <span>安全防护</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                            </svg>
                            <span>智能省流</span>
                        </div>
                    </div>
                    
                    <a href="https://Hw6gXI6S.fd.amekd.xyz/apk/5n1pR1d/96b3640716eb26f5/apk-bobo.apk" class="download-btn momo-btn" download>
                        <span class="btn-text">立即下载</span>
                        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- 夸克浏览器 -->
            <div class="app-card" id="kuake-card">
                <div class="card-glow kuake-glow"></div>
                <div class="card-content">
                    <div class="app-icon-wrapper">
                        <div class="icon-ring kuake-ring"></div>
                        <img src="${KUAKE_ICON_BASE64}" alt="夸克浏览器图标" class="app-icon">
                    </div>
                    
                    <h2 class="app-name">夸克浏览器</h2>
                    <p class="app-description">
                        轻快简洁，高效搜索<br>
                        <span class="feature-tag">AI搜索</span>
                        <span class="feature-tag">无痕浏览</span>
                        <span class="feature-tag">资源嗅探</span>
                    </p>
                    
                    <div class="features-list">
                        <div class="feature-item">
                            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <span>智能搜索</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                            <span>轻量快速</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                            </svg>
                            <span>资源下载</span>
                        </div>
                    </div>
                    
                    <a href="https://Hw6gXI6S.fd.amekd.xyz/apk/2ym5RdU/c898eb2bb6f5619b/apk-bobo.apk" class="download-btn kuake-btn" download>
                        <span class="btn-text">立即下载</span>
                        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <footer class="footer">
            <p class="footer-text">支持 Android 5.0 及以上版本</p>
        </footer>
    </div>

    <script>${JS_CONTENT}</script>
</body>
</html>`;

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Return the HTML page for all requests
        return new Response(HTML_CONTENT, {
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
                'Cache-Control': 'public, max-age=3600',
            },
        });
    },
};
