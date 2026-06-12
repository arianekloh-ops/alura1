# Mona Lisa Interativa em p5.js 🎨

Uma programação interativa que recriei a famosa pintura de Leonardo da Vinci usando a biblioteca p5.js, onde os olhos da Mona Lisa seguem o cursor do mouse de forma realista!

## 🎯 Características

- **Olhos interativos**: Os olhos acompanham o movimento do mouse em tempo real usando trigonometria
- **Cores originais**: Paleta de cores baseada na obra original (tons de terra, verde e ocre)
- **Design responsivo**: Adapta-se a diferentes tamanhos de tela
- **Detalhes artísticos**: Inclui sobrancelhas, sombras, rugas faciais e o famoso sorriso misterioso
- **Efeito de luz**: Reflexos reais nos olhos para maior realismo

## 📁 Arquivos do Projeto

- `index.html` - Página HTML principal
- `style.css` - Estilos CSS da página
- `sketch.js` - Código p5.js com toda a lógica de desenho e interação
- `README.md` - Este arquivo

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador
1. Clone este repositório
   ```bash
   git clone https://github.com/arianekloh-ops/alura1.git
   cd alura1
   ```
2. Abra o arquivo `index.html` no seu navegador

### Opção 2: Usar um servidor local
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx http-server
```

Depois acesse `http://localhost:8000` no navegador.

## 💻 Linhas de Código Principal

### Seguimento do Mouse (Eye Tracking)

A interação principal está em `sketch.js` na função `drawEye()`:

```javascript
// Calcular ângulo entre o olho e a posição do mouse
let angle = atan2(mouseY - eyeY, mouseX - eyeX);

// Calcular distância máxima que a pupila pode se mover
let distance = eyeRadius * 0.6;

// Calcular nova posição da pupila baseada no ângulo
let pupilX = eyeX + cos(angle) * distance;
let pupilY = eyeY + sin(angle) * distance;

// Desenhar a pupila na nova posição
ellipse(pupilX, pupilY, eyeRadius * 0.9, eyeRadius * 1);
```

### Inicialização

```javascript
function setup() {
    let container = document.getElementById('sketch-container');
    let width = Math.min(600, container.offsetWidth - 40);
    let height = width * 1.2;
    
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
    
    // Posições dos olhos (no rosto)
    eyeLeftX = width * 0.35;
    eyeLeftY = height * 0.35;
    eyeRightX = width * 0.65;
    eyeRightY = height * 0.35;
}
```

## 🎨 Cores Utilizadas (Paleta da Mona Lisa)

| Cor | RGB | Uso |
|-----|-----|-----|
| Tom de Pele | (219, 188, 154) | Rosto e pescoço |
| Castanho Escuro | (101, 67, 33) | Cabelo e pupilas |
| Verde Claro | (124, 150, 100) | Fundo superior (céu) |
| Verde Escuro | (76, 102, 68) | Sombras no fundo |
| Sombra | (160, 140, 120) | Detalhes faciais e contornos |

## 🔧 Dependências

- **p5.js v1.7.0** - Biblioteca JavaScript para criatividade (CDN)
  - Link: https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js

## 📝 Conceitos Técnicos Utilizados

- **Trigonometria**:
  - `atan2()` - Calcula o ângulo entre dois pontos
  - `cos()` e `sin()` - Usados para movimento circular
  
- **Desenho com p5.js**:
  - `ellipse()` - Para desenhar círculos e óvalos
  - `arc()` - Para desenhar arcos (sobrancelhas, sorriso)
  - `line()` - Para linhas de expressão
  - `lerpColor()` - Para gradientes suaves
  
- **Eventos de Mouse**:
  - `mouseX` e `mouseY` - Posição atual do cursor
  
- **Responsividade**:
  - `windowResized()` - Adaptar ao redimensionamento da janela

## 🎬 Como Funciona o Eye Tracking

1. **Cálculo do Ângulo**: Usa `atan2` para descobrir o ângulo entre a posição do olho e o mouse
2. **Limite de Movimento**: A pupila só se move dentro de um raio máximo (60% do tamanho do olho)
3. **Suavidade**: A posição é recalculada a cada frame, criando movimento suave
4. **Reflexos**: Um pequeno círculo branco representa o reflexo da luz

## 🎬 Próximas Melhorias

- [ ] Adicionar animação de piscar dos olhos
- [ ] Incluir expressões faciais diferentes
- [ ] Implementar sons ao interagir
- [ ] Adicionar mais detalhes artísticos (roupas, mãos)
- [ ] Modo noturno com alteração de cores
- [ ] Controle de velocidade do seguimento dos olhos

## 📚 Referências

- [Documentação p5.js](https://p5js.org/)
- [Referência de Funções p5.js](https://p5js.org/reference/)
- [Leonardo da Vinci - Mona Lisa (Louvre)](https://www.louvre.fr/en/explore/the-collections/artwork/mona-lisa)
- [Trigonometria em Programação](https://en.wikipedia.org/wiki/Atan2)

## 📄 Licença

Este projeto é de código aberto e livre para uso educacional.

---

Criado com ❤️ usando **p5.js**

**Autor**: Ariane Kloh  
**Data**: Junho 2026
