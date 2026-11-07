const fs = require('fs');
const sharp = require('sharp');

// ViewBox 400x400
// Original crown & monogram bounding box:
// X: ~424 to 587 (width ~163, center ~505)
// Y: ~85 to 395 (height ~310, center ~240)
// To center in 400x400 at (200, 200):
// dx = 200 - 505 = -305
// dy = 200 - 240 = -40

const badgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" fill="none">
  <!-- Circular border ring -->
  <circle cx="200" cy="200" r="184" stroke="#F5D05A" stroke-width="16" fill="none" />
  
  <g transform="translate(-305, -40)" fill="#F5D05A">
    <!-- Crown -->
    <path d="m429 111 33 26 7-48 29 22 28-30 7 54 40-29-20 54H450Z"/>
    <circle cx="428" cy="108" r="6"/>
    <circle cx="574" cy="103" r="6"/>
    <path d="M451 165Q500 153 550 165L550 173Q500 162 451 173Z"/>
    
    <!-- Monogram L & X -->
    <path d="M425 232H479V240H470Q463 240 463 249V357H515Q529 357 531 337H540L536 374H424V365H437Q445 365 445 356V250Q445 240 437 240H425Z"/>
    <path d="M444 219H511V228H501Q494 228 499 235L522 269 545 232Q547 228 539 228H529V219H577V228H566Q561 228 557 234L528 278 567 335Q572 343 580 343H587V352H519V343H529Q535 343 530 335L507 300 480 337Q476 343 485 343H497V352H446V343H457Q463 343 469 335L501 290 464 235Q459 228 449 228H444Z"/>
    
    <!-- Bottom mini LX -->
    <text x="506" y="390" text-anchor="middle" font-family="'Times New Roman', serif" font-weight="700" font-size="28" letter-spacing="1">LX</text>
  </g>
</svg>`;

fs.writeFileSync('public/branding/lien-xuan-badge.svg', badgeSvg);
console.log('Saved public/branding/lien-xuan-badge.svg');
