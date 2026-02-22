// Bang Style Recommendations by Face Shape
const recommendations = {
    oval: {
        title: "Oval Face Shape",
        description: "Lucky you! Oval faces are the most versatile for bangs. Your balanced proportions mean you can pull off almost any bang style. The key is to highlight your natural symmetry.",
        styles: [
            {
                name: "Curtain Bangs",
                description: "The perfect frame for your face. Part them in the middle or slightly off-center to showcase your balanced features. These are low-maintenance and grow out beautifully."
            },
            {
                name: "Classic Blunt Bangs",
                description: "A bold, straight-across bang that hits just above your eyebrows. This creates a striking look without overwhelming your proportions."
            },
            {
                name: "Wispy Bangs",
                description: "Soft, textured bangs that add a romantic, effortless vibe. Great if you want bangs but don't want a high-commitment look."
            }
        ],
        proTip: "With an oval face, your biggest decision is how bold you want to go. Thicker bangs make more of a statement, while wispy or curtain bangs keep things soft and versatile.",
        brushTip: "Use the Bang Brush to create that perfect bend at the ends — it gives curtain bangs that effortless flip that looks like you woke up this way."
    },
    round: {
        title: "Round Face Shape",
        description: "Your full cheeks and soft angles are beautiful! The right bangs can add dimension and create the illusion of length. We want to elongate, not emphasize the roundness.",
        styles: [
            {
                name: "Side-Swept Bangs",
                description: "Angled bangs that sweep across the forehead create diagonal lines that slim and elongate. The asymmetry adds instant dimension."
            },
            {
                name: "Long Curtain Bangs",
                description: "Longer pieces that frame the face and blend into your layers. Keep them below the cheekbones to create a slimming vertical line."
            },
            {
                name: "Textured, Choppy Bangs",
                description: "Avoid blunt, straight-across bangs. Instead, go for textured, piece-y bangs that create movement and visual interest."
            }
        ],
        proTip: "Avoid short, blunt bangs that hit straight across — they can make your face appear wider. Length and angles are your friends!",
        brushTip: "The Bang Brush is perfect for creating that side-swept lift. The compact size gives you control to direct bangs exactly where they need to go."
    },
    oblong: {
        title: "Oblong Face Shape",
        description: "Your elegant, elongated face looks amazing with bangs that create the illusion of width and shorten the appearance of length. Bangs are actually ideal for you!",
        styles: [
            {
                name: "Full, Thick Bangs",
                description: "Straight-across bangs that cover your forehead are perfect. They visually shorten the face and create beautiful balance."
            },
            {
                name: "Arched Bangs",
                description: "Bangs that are slightly shorter in the center and longer at the sides. This soft arch adds width without looking too heavy."
            },
            {
                name: "Layered Bangs with Volume",
                description: "Build some height and volume into your bangs. This adds horizontal dimension that balances your vertical length."
            }
        ],
        proTip: "Don't be afraid to go thick and full! Unlike other face shapes, you can handle the drama of statement bangs without looking overwhelmed.",
        brushTip: "Use the Bang Brush to build volume at the roots. The key for oblong faces is lift and fullness — not flat bangs that emphasize length."
    },
    heart: {
        title: "Heart Face Shape",
        description: "Your gorgeous wide forehead and delicate chin are striking! The goal is to balance your proportions by softening the forehead and adding visual weight around the jaw.",
        styles: [
            {
                name: "Side-Swept Bangs",
                description: "Sweeping bangs to one side breaks up the width of your forehead and draws attention to your eyes and cheekbones."
            },
            {
                name: "Curtain Bangs (Longer)",
                description: "Face-framing pieces that are longer at the temples and shorter in the center. They soften the forehead without hiding your beautiful features."
            },
            {
                name: "Wispy, Feathered Bangs",
                description: "Light, airy bangs that don't create a harsh line across your forehead. The softness complements your delicate features."
            }
        ],
        proTip: "Avoid heavy, blunt bangs that emphasize your forehead width. Keep things soft, wispy, and tapered for the most flattering look.",
        brushTip: "The Bang Brush helps create those soft, feathered ends that are essential for heart-shaped faces. No harsh lines — just pretty, blended movement."
    },
    square: {
        title: "Square Face Shape",
        description: "Your strong jawline and angular features are powerful and beautiful! The right bangs can soften those angles while still celebrating your bone structure.",
        styles: [
            {
                name: "Soft, Layered Bangs",
                description: "Bangs with lots of texture and movement soften your angular features. Think piece-y, not blunt."
            },
            {
                name: "Side-Swept Bangs",
                description: "Angled bangs that sweep across the forehead create curves that balance your strong jaw. The diagonal line is very flattering."
            },
            {
                name: "Curtain Bangs with Waves",
                description: "Face-framing bangs with some wave or bend. The curves counteract the angles of your jaw and create a softer overall look."
            }
        ],
        proTip: "Stay away from super blunt, straight-across bangs that mirror your strong jawline. You want contrast — soft bangs to balance strong features.",
        brushTip: "Use the Bang Brush to create bend and movement. The goal is curves and softness, and the brush helps you shape bangs that flow rather than sit flat."
    }
};

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showIntro() {
    showScreen('intro');
}

function startQuiz() {
    showScreen('quiz');
}

// Face Shape Selection
function selectFaceShape(shape) {
    const data = recommendations[shape];
    
    // Update badge
    document.getElementById('resultBadge').textContent = data.title;
    
    // Build results content
    let stylesHTML = data.styles.map(style => `
        <div class="bang-style">
            <h4>${style.name}</h4>
            <p>${style.description}</p>
        </div>
    `).join('');
    
    const resultsHTML = `
        <h3>Recommended Bang Styles for ${data.title}</h3>
        <p>${data.description}</p>
        
        <div class="bang-styles">
            ${stylesHTML}
        </div>
        
        <div class="pro-tip">
            <strong>💡 Pro Tip from Danielle:</strong> ${data.proTip}
        </div>
        
        <div class="pro-tip" style="background: linear-gradient(135deg, #f5e6eb, #e8c9d4); margin-top: 15px;">
            <strong>🪥 Bang Brush Tip:</strong> ${data.brushTip}
        </div>
    `;
    
    document.getElementById('resultsContent').innerHTML = resultsHTML;
    
    showScreen('results');
    
    // Track selection (for future analytics)
    console.log(`User selected: ${shape}`);
}

// Share functionality
function shareResults() {
    const shareText = "I just discovered my perfect bang style with Danielle Hair Artistry! Find yours: ";
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Perfect Bangs - Danielle Hair Artistry',
            text: shareText,
            url: shareUrl
        }).catch(console.error);
    } else {
        // Fallback: copy to clipboard
        const fullText = shareText + shareUrl;
        navigator.clipboard.writeText(fullText).then(() => {
            alert('Link copied to clipboard! Share it with your friends.');
        }).catch(() => {
            alert('Share this link: ' + shareUrl);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Bang Style App initialized');
    
    // Add keyboard navigation for accessibility
    document.querySelectorAll('.face-shape-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                card.click();
            }
        });
    });
});
