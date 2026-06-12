// Cores originais da Mona Lisa (tons de terra e verde)
const SKIN_TONE = { r: 219, g: 188, b: 154 };      // Tom de pele (ocre/bege)
const DARK_BROWN = { r: 101, g: 67, b: 33 };       // Castanho escuro (cabelo)
const LIGHT_GREEN = { r: 124, g: 150, b: 100 };    // Verde claro (fundo)
const DARK_GREEN = { r: 76, g: 102, b: 68 };       // Verde escuro (sombras)
const SHADOW = { r: 160, g: 140, b: 120 };         // Tom de sombra
const HIGHLIGHT = { r: 240, g: 220, b: 200 };      // Tom claro

let eyeLeftX, eyeLeftY;
let eyeRightX, eyeRightY;
let mouseTrackingX, mouseTrackingY;

function setup() {
    // Criar canvas no container
    let container = document.getElementById('sketch-container');
    let width = Math.min(600, container.offsetWidth - 40);
    let height = width * 1.2;
    
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
    
    // Posições dos olhos
    eyeLeftX = width * 0.35;
    eyeLeftY = height * 0.35;
    eyeRightX = width * 0.65;
    eyeRightY = height * 0.35;
}

function draw() {
    // Fundo com gradiente
    drawGradientBackground();
    
    // Desenhar rosto
    drawFace();
    
    // Desenhar cabelo
    drawHair();
    
    // Desenhar olhos com tracking do mouse
    drawEyes();
    
    // Desenhar boca
    drawMouth();
    
    // Desenhar detalhes faciais
    drawDetails();
}

function drawGradientBackground() {
    // Gradiente do fundo (céu e paisagem)
    let bgHeight = height * 0.5;
    for (let i = 0; i < bgHeight; i++) {
        let inter = map(i, 0, bgHeight, 0, 1);
        let c = lerpColor(
            color(LIGHT_GREEN.r, LIGHT_GREEN.g, LIGHT_GREEN.b),
            color(DARK_GREEN.r, DARK_GREEN.g, DARK_GREEN.b),
            inter
        );
        stroke(c);
        line(0, i, width, i);
    }
    
    // Parte inferior (corpo)
    for (let i = bgHeight; i < height; i++) {
        let inter = map(i, bgHeight, height, 0, 1);
        let c = lerpColor(
            color(SHADOW.r, SHADOW.g, SHADOW.b),
            color(DARK_BROWN.r * 0.8, DARK_BROWN.g * 0.8, DARK_BROWN.b * 0.8),
            inter
        );
        stroke(c);
        line(0, i, width, i);
    }
}

function drawFace() {
    fill(SKIN_TONE.r, SKIN_TONE.g, SKIN_TONE.b);
    noStroke();
    
    // Rosto oval
    ellipse(width / 2, height * 0.45, width * 0.35, height * 0.5);
    
    // Pescoço
    fill(SKIN_TONE.r - 10, SKIN_TONE.g - 10, SKIN_TONE.b - 10);
    rect(width * 0.42, height * 0.65, width * 0.16, height * 0.3);
}

function drawHair() {
    fill(DARK_BROWN.r, DARK_BROWN.g, DARK_BROWN.b);
    noStroke();
    
    // Cabelo topo
    arc(width / 2, height * 0.25, width * 0.38, height * 0.3, PI, TWO_PI);
    
    // Cabelo lateral esquerdo
    fill(DARK_BROWN.r - 20, DARK_BROWN.g - 20, DARK_BROWN.b - 20);
    arc(width * 0.25, height * 0.4, width * 0.2, height * 0.35, 0, PI);
    
    // Cabelo lateral direito
    arc(width * 0.75, height * 0.4, width * 0.2, height * 0.35, 0, PI);
}

function drawEyes() {
    // Olho esquerdo
    drawEye(eyeLeftX, eyeLeftY);
    
    // Olho direito
    drawEye(eyeRightX, eyeRightY);
}

function drawEye(eyeX, eyeY) {
    let eyeRadius = width * 0.04;
    
    // Branco do olho
    fill(240, 240, 235);
    stroke(SHADOW.r, SHADOW.g, SHADOW.b);
    strokeWeight(1.5);
    ellipse(eyeX, eyeY, eyeRadius * 2, eyeRadius * 2.2);
    
    // Calcular posição da pupila seguindo o mouse
    let angle = atan2(mouseY - eyeY, mouseX - eyeX);
    let distance = eyeRadius * 0.6;
    let pupilX = eyeX + cos(angle) * distance;
    let pupilY = eyeY + sin(angle) * distance;
    
    // Pupila
    fill(DARK_BROWN.r - 30, DARK_BROWN.g - 30, DARK_BROWN.b - 30);
    noStroke();
    ellipse(pupilX, pupilY, eyeRadius * 0.9, eyeRadius * 1);
    
    // Reflexo luz
    fill(255, 255, 255);
    ellipse(pupilX - eyeRadius * 0.25, pupilY - eyeRadius * 0.25, eyeRadius * 0.3);
    
    // Sobrancelha
    stroke(DARK_BROWN.r - 40, DARK_BROWN.g - 40, DARK_BROWN.b - 40);
    strokeWeight(2);
    noFill();
    arc(eyeX, eyeY - eyeRadius * 1.2, eyeRadius * 2.2, eyeRadius * 0.8, PI, 0);
}

function drawMouth() {
    // Boca com sorriso misterioso
    stroke(SHADOW.r - 30, SHADOW.g - 30, SHADOW.b - 30);
    strokeWeight(2);
    noFill();
    
    let mouthX = width / 2;
    let mouthY = height * 0.55;
    let mouthWidth = width * 0.12;
    let mouthHeight = height * 0.08;
    
    // Sorriso em arco
    arc(mouthX, mouthY, mouthWidth, mouthHeight, 0, PI);
    
    // Sombra embaixo da boca
    stroke(SHADOW.r, SHADOW.g, SHADOW.b, 150);
    strokeWeight(1);
    arc(mouthX, mouthY + 2, mouthWidth * 0.95, mouthHeight * 0.4, 0, PI);
}

function drawDetails() {
    // Rugas faciais subtis
    stroke(SHADOW.r, SHADOW.g, SHADOW.b, 100);
    strokeWeight(0.5);
    noFill();
    
    // Linha do nariz
    let noseX = width / 2;
    let noseY = height * 0.4;
    line(noseX, noseY, noseX, height * 0.52);
    
    // Sombras nas bochechas
    fill(SHADOW.r, SHADOW.g, SHADOW.b, 80);
    noStroke();
    ellipse(width * 0.25, height * 0.48, width * 0.08, height * 0.1);
    ellipse(width * 0.75, height * 0.48, width * 0.08, height * 0.1);
    
    // Detalhes do rosto
    fill(SKIN_TONE.r - 30, SKIN_TONE.g - 30, SKIN_TONE.b - 30, 80);
    
    // Linhas de expressão (ao redor dos olhos)
    stroke(SHADOW.r, SHADOW.g, SHADOW.b, 60);
    strokeWeight(0.8);
    
    // Pés de galinha esquerdo
    line(eyeLeftX - width * 0.08, eyeLeftY + width * 0.03, 
         eyeLeftX - width * 0.1, eyeLeftY + width * 0.05);
    line(eyeLeftX - width * 0.08, eyeLeftY + width * 0.03, 
         eyeLeftX - width * 0.12, eyeLeftY + width * 0.03);
    
    // Pés de galinha direito
    line(eyeRightX + width * 0.08, eyeRightY + width * 0.03, 
         eyeRightX + width * 0.1, eyeRightY + width * 0.05);
    line(eyeRightX + width * 0.08, eyeRightY + width * 0.03, 
         eyeRightX + width * 0.12, eyeRightY + width * 0.03);
}

// Redimensionar canvas ao mudar janela
function windowResized() {
    let container = document.getElementById('sketch-container');
    if (container) {
        let newWidth = Math.min(600, container.offsetWidth - 40);
        let newHeight = newWidth * 1.2;
        resizeCanvas(newWidth, newHeight);
        
        // Atualizar posições dos olhos
        eyeLeftX = newWidth * 0.35;
        eyeLeftY = newHeight * 0.35;
        eyeRightX = newWidth * 0.65;
        eyeRightY = newHeight * 0.35;
    }
}
