/**
 * Who Wants to Be a Millionaire - Game Engine with Furigana & Translation
 * Strictly < 200 lines
 */
window.MillionaireGame = (function() {
  const LADDER_PRIZES = [
    "$100", "$200", "$300", "$500", "$1,000",
    "$2,000", "$4,000", "$8,000", "$16,000", "$32,000",
    "$64,000", "$125,000", "$250,000", "$500,000", "$1,000,000"
  ];
  let state = { questions: [], currentIdx: 0, used5050: false, usedHint: false, isAnswered: false, lesson: 6 };

  function init(lessonFilter = 6) {
    state.lesson = lessonFilter;
    state.currentIdx = 0;
    state.used5050 = false;
    state.usedHint = false;
    state.isAnswered = false;

    let pool = window.QuizStore ? window.QuizStore.getQuizzesByLesson(lessonFilter) : [];
    if (!pool || pool.length === 0) {
      pool = window.QuizStore ? window.QuizStore.getAllQuizzes() : [];
    }

    const freshQuestions = pool.map(item => {
      const origAnswerIdx = (typeof item.answer === 'number') ? item.answer : ((typeof item.correct === 'number') ? item.correct : 0);
      const rawOptions = Array.isArray(item.options) ? [...item.options] : ["A", "B", "C", "D"];
      const correctAnswerText = rawOptions[origAnswerIdx] || rawOptions[0];

      const shuffledOptions = [...rawOptions].sort(() => Math.random() - 0.5);
      const newCorrectIdx = shuffledOptions.indexOf(correctAnswerText);

      return {
        id: item.id,
        lesson: item.lesson,
        question: item.question,
        translation: item.translation || "",
        options: shuffledOptions,
        correctIdx: newCorrectIdx >= 0 ? newCorrectIdx : 0,
        explanation: item.explanation
      };
    });

    state.questions = freshQuestions.sort(() => Math.random() - 0.5).slice(0, 15);
    renderGame();
  }

  function renderGame() {
    const container = document.getElementById("millionaire-root");
    if (!container) return;

    if (!state.questions || state.questions.length === 0) {
      container.innerHTML = `
        <div class="millionaire-wrapper" style="text-align:center; padding:40px;">
          <h3>Chưa có câu hỏi cho bài này.</h3>
          <button class="btn-play-millionaire" style="margin-top:16px;" onclick="MillionaireGame.exitGame()">🔙 Quay Về</button>
        </div>`;
      return;
    }

    const q = state.questions[state.currentIdx];
    container.innerHTML = `
      <div class="millionaire-wrapper">
        <div class="millionaire-header">
          <div class="millionaire-title">
            <span>🏆 AI LÀ TRIỆU PHÚ (BÀI ${state.lesson})</span>
            <small style="font-size:0.85rem; color:#cbd5e1;">[Câu ${state.currentIdx + 1}/${state.questions.length}]</small>
          </div>
          <div class="lifelines-container">
            <button class="lifeline-btn" id="btn-5050" ${state.used5050 ? 'disabled' : ''} onclick="MillionaireGame.use5050()">⚡ 50:50</button>
            <button class="lifeline-btn" id="btn-hint" ${state.usedHint ? 'disabled' : ''} onclick="MillionaireGame.useHint()">💡 Gợi Ý</button>
            <button class="lifeline-btn" style="border-color:#ef4444; color:#ef4444;" onclick="MillionaireGame.exitGame()">🚪 Thoát</button>
          </div>
        </div>

        <div class="game-main-area">
          <div class="left-panel">
            <div class="question-box">
              <div class="q-jp-text">${q.question}</div>
              ${q.translation ? `<div class="q-vi-trans">👉 Dịch nghĩa: ${q.translation}</div>` : ''}
            </div>
            <div class="options-grid" id="options-grid">
              ${q.options.map((opt, i) => `
                <button class="option-btn" id="opt-btn-${i}" onclick="MillionaireGame.selectOption(${i})">
                  <span class="opt-prefix">${['A', 'B', 'C', 'D'][i]}:</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
          </div>
          <div class="ladder-container">
            ${LADDER_PRIZES.slice(0, state.questions.length).map((prize, i) => {
              let cls = "ladder-step";
              if (i === 4 || i === 9 || i === 14) cls += " milestone";
              if (i === state.currentIdx) cls += " current";
              if (i < state.currentIdx) cls += " passed";
              return `<div class="${cls}"><span>${i + 1}</span> <span>${prize}</span></div>`;
            }).join('')}
          </div>
        </div>
      </div>
      <div id="hint-modal-root"></div>
    `;
  }

  function selectOption(idx) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    const q = state.questions[state.currentIdx];
    const correctIdx = q.correctIdx;
    const btn = document.getElementById(`opt-btn-${idx}`);
    if (btn) btn.classList.add("selected");

    if (window.AudioEngine) window.AudioEngine.playCoin();

    setTimeout(() => {
      if (btn) btn.classList.remove("selected");
      if (idx === correctIdx) {
        if (btn) btn.classList.add("correct");
        if (window.AudioEngine) window.AudioEngine.playVictory();

        setTimeout(() => {
          if (state.currentIdx + 1 < state.questions.length) {
            state.currentIdx++;
            state.isAnswered = false;
            renderGame();
          } else {
            showWinModal();
          }
        }, 1200);
      } else {
        if (btn) btn.classList.add("wrong");
        const correctBtn = document.getElementById(`opt-btn-${correctIdx}`);
        if (correctBtn) correctBtn.classList.add("correct");

        setTimeout(() => { showGameOverModal(q); }, 1400);
      }
    }, 700);
  }

  function use5050() {
    if (state.used5050 || state.isAnswered) return;
    state.used5050 = true;
    if (window.AudioEngine) window.AudioEngine.playJump();

    const q = state.questions[state.currentIdx];
    const correctIdx = q.correctIdx;
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIdx).sort(() => Math.random() - 0.5).slice(0, 2);
    wrongIndices.forEach(i => {
      const b = document.getElementById(`opt-btn-${i}`);
      if (b) b.classList.add("eliminated");
    });
    const btn = document.getElementById("btn-5050");
    if (btn) btn.disabled = true;
  }

  function useHint() {
    if (state.usedHint || state.isAnswered) return;
    state.usedHint = true;
    if (window.AudioEngine) window.AudioEngine.playJump();

    const q = state.questions[state.currentIdx];
    const hintText = q.explanation || "Hãy chú ý cấu trúc ngữ pháp và ý nghĩa của câu!";

    const modalRoot = document.getElementById("hint-modal-root");
    if (modalRoot) {
      modalRoot.innerHTML = `
        <div class="hint-modal">
          <div class="hint-card">
            <h3>💡 Gợi Ý Ngữ Pháp</h3>
            <p>${hintText}</p>
            <button class="btn-play-millionaire" style="margin:0 auto;" onclick="document.getElementById('hint-modal-root').innerHTML=''">Đã Hiểu</button>
          </div>
        </div>`;
    }
    const btn = document.getElementById("btn-hint");
    if (btn) btn.disabled = true;
  }

  function showWinModal() {
    const container = document.getElementById("millionaire-root");
    const prize = LADDER_PRIZES[state.questions.length - 1] || "$1,000,000";
    container.innerHTML = `
      <div class="millionaire-wrapper" style="text-align:center; padding:40px;">
        <h2 style="font-size:2rem; color:#f59e0b; margin-bottom:12px;">🎉 BẠN LÀ TRIỆU PHÚ NGỮ PHÁP!</h2>
        <p style="font-size:1.2rem;">Phần thưởng giành được: <strong>${prize}</strong></p>
        <div style="margin-top:24px; display:flex; justify-content:center; gap:12px;">
          <button class="btn-play-millionaire" onclick="MillionaireGame.init(${state.lesson})">🔄 Chơi Lại</button>
          <button class="btn-play-millionaire" style="background:#334155;" onclick="MillionaireGame.exitGame()">🔙 Quay Về</button>
        </div>
      </div>`;
  }

  function showGameOverModal(q) {
    const container = document.getElementById("millionaire-root");
    const correctIdx = q.correctIdx;
    const prize = state.currentIdx > 0 ? LADDER_PRIZES[state.currentIdx - 1] : "$0";
    const letter = ['A', 'B', 'C', 'D'][correctIdx] || 'A';
    const correctText = q.options[correctIdx] || '';
    container.innerHTML = `
      <div class="millionaire-wrapper" style="text-align:center; padding:40px;">
        <h2 style="font-size:1.8rem; color:#ef4444; margin-bottom:12px;">❌ RẤT TIẾC, CHƯA CHÍNH XÁC!</h2>
        <p style="font-size:1.1rem; color:#e2e8f0;">Đáp án đúng là <strong>${letter}</strong>: <strong style="color:#22c55e;">${correctText}</strong></p>
        <p style="color:#94a3b8; margin-top:8px;">${q.explanation || ''}</p>
        <h3 style="font-size:1.3rem; color:#f59e0b; margin-top:16px;">Phần thưởng mang về: ${prize}</h3>
        <div style="margin-top:24px; display:flex; justify-content:center; gap:12px;">
          <button class="btn-play-millionaire" onclick="MillionaireGame.init(${state.lesson})">🔄 Chơi Lại</button>
          <button class="btn-play-millionaire" style="background:#334155;" onclick="MillionaireGame.exitGame()">🔙 Quay Về</button>
        </div>
      </div>`;
  }

  function exitGame() { if (window.App) window.App.showView("grammar"); }

  return { init, selectOption, use5050, useHint, exitGame };
})();
