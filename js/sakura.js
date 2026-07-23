/**
 * Sakura Petal Canvas Animation System
 * < 200 lines per file requirement
 */
class SakuraCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.petals = [];
    this.numPetals = 35;
    
    this.resize();
    this.initPetals();
    
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initPetals() {
    this.petals = [];
    for (let i = 0; i < this.numPetals; i++) {
      this.petals.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 1.5 - 0.75,
        speedY: Math.random() * 1.2 + 0.8,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: Math.random() * 0.02 - 0.01,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
  }

  drawPetal(p) {
    this.ctx.save();
    this.ctx.translate(p.x, p.y);
    this.ctx.rotate(p.angle);
    this.ctx.globalAlpha = p.opacity;

    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(p.size, -p.size, p.size * 1.5, p.size / 2, 0, p.size * 1.8);
    this.ctx.bezierCurveTo(-p.size * 1.5, p.size / 2, -p.size, -p.size, 0, 0);
    
    // Sakura soft gradient
    const grad = this.ctx.createLinearGradient(0, 0, 0, p.size * 1.8);
    grad.addColorStop(0, '#FFF0F5');
    grad.addColorStop(0.6, '#FFB7C5');
    grad.addColorStop(1, '#FF69B4');
    
    this.ctx.fillStyle = grad;
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.petals.forEach(p => {
      p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
      p.y += p.speedY;
      p.angle += p.angularSpeed;

      if (p.y > this.canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * this.canvas.width;
      }
      if (p.x > this.canvas.width + 20) p.x = -20;
      if (p.x < -20) p.x = this.canvas.width + 20;

      this.drawPetal(p);
    });

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SakuraCanvas('sakura-canvas');
});
