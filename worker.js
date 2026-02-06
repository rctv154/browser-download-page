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
                <span class="title-gradient">精选浏览器</span>
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
