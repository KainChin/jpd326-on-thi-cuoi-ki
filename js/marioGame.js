/**
 * Mario Gem Quiz Quest Engine
 * < 200 lines per file requirement
 */
class MarioQuizGame {
  constructor() {
    this.coins = 0;
    this.score = 0;
    this.lives = 3;
    this.combo = 0;
    this.currentLesson = 6;
    this.questions = [];
    this.currentIndex = 0;
    this.bowserHp = 100;
    this.isPlaying = false;
  }

  startLessonGame(lessonNum) {
    this.currentLesson = lessonNum;
    this.questions = (window.ALL_QUIZ_DATA || []).filter(q => q.lesson === lessonNum);
    if (!this.questions || this.questions.length === 0) {
      alert("Chưa có câu hỏi cho bài này!");
      return;
    }
    // Shuffle
    this.questions = [...this.questions].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.coins = 0;
    this.score = 0;
    this.lives = 3;
    this.combo = 0;
    this.bowserHp = 100;
    this.isPlaying = true;

    this.renderGameUI();
    this.loadQuestion();
  }

  renderGameUI() {
    const container = document.getElementById('mario-game-container');
    if (!container) return;

    container.innerHTML = `
      <div class="mario-header">
        <div class="mario-stat"><span class="mario-icon">🍄</span> BÀI ${this.currentLesson} QUEST</div>
        <div class="mario-stat"><span class="mario-icon">🪙</span> <span id="mario-coins">0</span></div>
        <div class="mario-stat"><span class="mario-icon">⭐</span> <span id="mario-score">0</span></div>
        <div class="mario-stat"><span class="mario-icon">❤️</span> <span id="mario-lives">❤️❤️❤️</span></div>
      </div>

      <div class="bowser-bar-container">
        <div class="bowser-label">👹 BOWSER BOSS HP</div>
        <div class="bowser-hp-bg"><div id="bowser-hp-fill" class="bowser-hp-fill" style="width: 100%;"></div></div>
      </div>

      <div class="mario-stage-area">
        <div id="mario-character" class="mario-char">🏃‍♂️</div>
        <div id="mystery-block" class="mystery-block">❓</div>
        <div id="boss-character" class="boss-char">👹</div>
      </div>

      <div id="mario-question-card" class="mario-question-card"></div>
    `;
  }

  loadQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.victoryScreen();
      return;
    }
    const q = this.questions[this.currentIndex];
    const card = document.getElementById('mario-question-card');
    if (!card) return;

    card.innerHTML = `
      <div class="mario-q-num">CÂU ${this.currentIndex + 1} / ${this.questions.length}</div>
      <div class="mario-q-text">${q.question}</div>
      <div class="mario-options-grid">
        ${q.options.map((opt, i) => `
          <button class="mario-opt-btn" onclick="marioGame.submitAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="mario-feedback" class="mario-feedback"></div>
    `;
  }

  submitAnswer(chosenIdx) {
    const q = this.questions[this.currentIndex];
    const feedbackEl = document.getElementById('mario-feedback');
    const marioChar = document.getElementById('mario-character');
    const block = document.getElementById('mystery-block');
    const bowserFill = document.getElementById('bowser-hp-fill');

    if (chosenIdx === q.answer) {
      // Correct!
      window.audioManager.playJumpSound();
      setTimeout(() => window.audioManager.playCoinSound(), 150);

      this.combo++;
      const earnedCoins = q.coins + (this.combo * 20);
      this.coins += earnedCoins;
      this.score += earnedCoins * 2;
      this.bowserHp = Math.max(0, this.bowserHp - Math.floor(100 / this.questions.length));

      if (marioChar) marioChar.classList.add('jump-anim');
      if (block) block.classList.add('hit-anim');

      feedbackEl.className = 'mario-feedback correct';
      feedbackEl.innerHTML = `✨ CHÍNH XÁC! +${earnedCoins} 🪙 | COMBO x${this.combo}<br><small>${q.explanation}</small>`;

      this.updateStats();

      setTimeout(() => {
        if (marioChar) marioChar.classList.remove('jump-anim');
        if (block) block.classList.remove('hit-anim');
        this.currentIndex++;
        this.loadQuestion();
      }, 1400);

    } else {
      // Wrong!
      window.audioManager.playWrongSound();
      this.combo = 0;
      this.lives--;
      this.updateStats();

      feedbackEl.className = 'mario-feedback wrong';
      feedbackEl.innerHTML = `💥 SAI RỒI! ĐÁP ÁN: <strong>${q.options[q.answer]}</strong><br><small>${q.explanation}</small>`;

      if (this.lives <= 0) {
        setTimeout(() => this.gameOverScreen(), 1200);
        return;
      }

      setTimeout(() => {
        this.currentIndex++;
        this.loadQuestion();
      }, 1800);
    }
  }

  updateStats() {
    const coinsEl = document.getElementById('mario-coins');
    const scoreEl = document.getElementById('mario-score');
    const livesEl = document.getElementById('mario-lives');
    const hpFill = document.getElementById('bowser-hp-fill');

    if (coinsEl) coinsEl.innerText = this.coins;
    if (scoreEl) scoreEl.innerText = this.score;
    if (livesEl) livesEl.innerText = '❤️'.repeat(Math.max(0, this.lives));
    if (hpFill) hpFill.style.width = `${this.bowserHp}%`;
  }

  victoryScreen() {
    window.audioManager.playClearSound();
    const card = document.getElementById('mario-question-card');
    if (!card) return;

    card.innerHTML = `
      <div class="victory-box">
        <h2>🎉 LEVEL CLEAR! BÀI ${this.currentLesson} COMPLETED!</h2>
        <p>🪙 Tổng Xu Nhận Được: <strong>${this.coins}</strong></p>
        <p>⭐ Tổng Điểm: <strong>${this.score}</strong></p>
        <p>👹 Trùm Bowser Đã Bị Đánh Bại!</p>
        <button class="mario-btn-start" onclick="marioGame.startLessonGame(${this.currentLesson})">🔄 Chơi Lại</button>
      </div>
    `;
  }

  gameOverScreen() {
    const card = document.getElementById('mario-question-card');
    if (!card) return;

    card.innerHTML = `
      <div class="gameover-box">
        <h2>💀 GAME OVER</h2>
        <p>Bạn đã hết trái tim!</p>
        <button class="mario-btn-start" onclick="marioGame.startLessonGame(${this.currentLesson})">🎮 Thử Lại</button>
      </div>
    `;
  }
}

window.marioGame = new MarioQuizGame();
