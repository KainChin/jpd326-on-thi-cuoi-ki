/**
 * Japanese Grammar SPA Controller & Navigation Router
 * < 200 lines per file requirement
 */
class AppController {
  constructor() {
    this.currentLesson = 6;
    this.searchQuery = "";
    this.bookmarks = JSON.parse(localStorage.getItem('jpd326_favs') || '[]');
    this.flashcardIndex = 0;
    this.flashcardList = [];
    
    document.addEventListener('DOMContentLoaded', () => this.init());
  }

  init() {
    this.bindEvents();
    this.renderCurrentLesson();
  }

  bindEvents() {
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderCurrentLesson();
      });
    }
  }

  setLesson(lessonNum) {
    this.currentLesson = lessonNum;
    document.querySelectorAll('.nav-tab-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(`nav-btn-${lessonNum}`);
    if (targetBtn) targetBtn.classList.add('active');

    const mainArea = document.getElementById('main-content-area');
    const marioArea = document.getElementById('mario-game-container');
    const flashcardArea = document.getElementById('flashcard-container');

    if (lessonNum === 'mario') {
      mainArea.style.display = 'none';
      flashcardArea.style.display = 'none';
      marioArea.style.display = 'block';
      window.marioGame.startLessonGame(6);
    } else if (lessonNum === 'flashcards') {
      mainArea.style.display = 'none';
      marioArea.style.display = 'none';
      flashcardArea.style.display = 'block';
      this.initFlashcards();
    } else {
      marioArea.style.display = 'none';
      flashcardArea.style.display = 'none';
      mainArea.style.display = 'grid';
      this.renderCurrentLesson();
    }
  }

  getFilteredData() {
    let list = window.ALL_GRAMMAR_DATA || [];
    if (typeof this.currentLesson === 'number') {
      list = list.filter(item => item.lesson === this.currentLesson);
    }
    if (this.searchQuery) {
      const q = this.searchQuery;
      list = (window.ALL_GRAMMAR_DATA || []).filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.romaji.toLowerCase().includes(q) ||
        item.formula.toLowerCase().includes(q)
      );
    }
    return list;
  }

  renderCurrentLesson() {
    const container = document.getElementById('main-content-area');
    if (!container) return;

    const data = this.getFilteredData();
    if (data.length === 0) {
      container.innerHTML = `<div class="no-results">🌸 Không tìm thấy mẫu ngữ pháp nào phù hợp với từ khóa!</div>`;
      return;
    }

    container.innerHTML = data.map((item, idx) => `
      <div class="grammar-card" id="card-${item.id}">
        <div class="card-header">
          <div class="card-badge">BÀI ${item.lesson} • ${item.part}</div>
          <button class="speak-btn" onclick="audioManager.speakJapanese('${item.title}')" title="Nghe phát âm">🔊 Nghe</button>
        </div>

        <h3 class="card-title">${item.title} <small>(${item.romaji})</small></h3>
        <div class="card-meaning">💡 <strong>Ý nghĩa:</strong> ${item.meaning}</div>
        <div class="card-formula">⚙️ <strong>Cấu trúc:</strong> <code>${item.formula}</code></div>
        <div class="card-nuance">📌 <strong>Sử dụng:</strong> ${item.nuance}</div>

        <div class="examples-section">
          <h4>📝 Ví dụ minh họa (${item.examples.length} ví dụ):</h4>
          <div class="examples-list">
            ${item.examples.map((ex, exIdx) => `
              <div class="example-item">
                <div class="ex-jp">
                  <span class="ex-num">${exIdx + 1}.</span> ${ex.jp}
                  <button class="mini-speak-btn" onclick="audioManager.speakJapanese('${ex.jp.replace(/<\/?[^>]+(>|$)/g, "")}')">🔊</button>
                </div>
                <div class="ex-vi">➜ ${ex.vi}</div>
                ${ex.kanji && ex.kanji.length > 0 ? `
                  <details class="kanji-accordion">
                    <summary>🔍 Giải thích Kanji khó (${ex.kanji.length} từ)</summary>
                    <div class="kanji-grid">
                      ${ex.kanji.map(k => `
                        <div class="kanji-box">
                          <span class="k-char">${k.char}</span>
                          <span class="k-han">[${k.amHan}]</span>
                          <span class="k-meaning">${k.meaning}</span>
                        </div>
                      `).join('')}
                    </div>
                  </details>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  initFlashcards() {
    this.flashcardList = (window.ALL_GRAMMAR_DATA || []).sort(() => Math.random() - 0.5);
    this.flashcardIndex = 0;
    this.renderFlashcard();
  }

  renderFlashcard() {
    const container = document.getElementById('flashcard-container');
    if (!container || this.flashcardList.length === 0) return;

    const item = this.flashcardList[this.flashcardIndex];
    container.innerHTML = `
      <div class="flashcard-wrapper">
        <div class="flashcard-counter">Thẻ ${this.flashcardIndex + 1} / ${this.flashcardList.length}</div>
        <div class="flashcard-inner" id="fc-inner" onclick="this.classList.toggle('flipped')">
          <div class="flashcard-front">
            <div class="fc-badge">Bài ${item.lesson}</div>
            <div class="fc-title">${item.title}</div>
            <div class="fc-hint">💡 Nhấp để xem mặt sau</div>
          </div>
          <div class="flashcard-back">
            <div class="fc-meaning">${item.meaning}</div>
            <div class="fc-formula"><code>${item.formula}</code></div>
            <div class="fc-ex">${item.examples[0].jp}</div>
          </div>
        </div>
        <div class="fc-nav-btns">
          <button onclick="app.prevFlashcard()">⬅️ Thẻ Trước</button>
          <button onclick="audioManager.speakJapanese('${item.title}')">🔊 Nghe</button>
          <button onclick="app.nextFlashcard()">Thẻ Tiêp ➡️</button>
        </div>
      </div>
    `;
  }

  nextFlashcard() {
    this.flashcardIndex = (this.flashcardIndex + 1) % this.flashcardList.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    this.flashcardIndex = (this.flashcardIndex - 1 + this.flashcardList.length) % this.flashcardList.length;
    this.renderFlashcard();
  }
}

window.app = new AppController();
