/**
 * Main Application Router & Render Logic
 * Strictly < 200 lines
 */
window.App = (function() {
  let currentLesson = "all";
  let currentSituationLesson = "all";
  let searchKeyword = "";

  function init() {
    renderGrammarList();
    renderSituations();
  }

  function showView(viewName) {
    const vGrammar = document.getElementById("view-grammar");
    const vSituations = document.getElementById("view-situations");
    const vMillionaire = document.getElementById("view-millionaire");

    const btnG = document.getElementById("tab-btn-grammar");
    const btnS = document.getElementById("tab-btn-situations");

    if (vGrammar) vGrammar.style.display = viewName === "grammar" ? "block" : "none";
    if (vSituations) vSituations.style.display = viewName === "situations" ? "block" : "none";
    if (vMillionaire) vMillionaire.style.display = viewName === "millionaire" ? "block" : "none";

    if (btnG) btnG.classList.toggle("active", viewName === "grammar");
    if (btnS) btnS.classList.toggle("active", viewName === "situations");

    if (viewName === "grammar") renderGrammarList();
    if (viewName === "situations") renderSituations();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterLesson(lesson) {
    currentLesson = lesson;
    document.querySelectorAll("#lesson-bar-grammar .lesson-btn").forEach(btn => {
      const btnText = btn.innerText.trim();
      const isAct = (lesson === 'all' && btnText.includes('Tất Cả')) ||
                    (lesson !== 'all' && btnText === `Bài ${lesson}`);
      btn.classList.toggle("active", isAct);
    });
    renderGrammarList();
  }

  function handleSearch(val) {
    searchKeyword = val.trim().toLowerCase();
    renderGrammarList();
  }

  function renderGrammarList() {
    const root = document.getElementById("grammar-list-root");
    if (!root || !window.GrammarStore) return;

    let items = window.GrammarStore.getAllGrammar();
    if (currentLesson !== "all") {
      items = items.filter(g => g.lesson === parseInt(currentLesson));
    }
    if (searchKeyword) {
      items = items.filter(g =>
        g.title.toLowerCase().includes(searchKeyword) ||
        g.meaning.toLowerCase().includes(searchKeyword) ||
        g.formula.toLowerCase().includes(searchKeyword) ||
        (g.examples && g.examples.some(ex => ex.jp.includes(searchKeyword) || ex.vi.toLowerCase().includes(searchKeyword)))
      );
    }

    const lessonText = currentLesson === "all" ? "Tất Cả Bài 6 - 10" : `Bài ${currentLesson}`;

    let html = `
      <div class="lesson-game-banner">
        <div>
          <div class="banner-info-title">🏆 THỬ THÁCH AI LÀ TRIỆU PHÚ - ${lessonText.toUpperCase()}</div>
          <div class="banner-info-sub">Ôn tập tổng hợp kiến thức ngữ pháp ${lessonText} với 15 câu hỏi tiền thưởng!</div>
        </div>
        <button class="btn-play-millionaire" onclick="App.startMillionaire('${currentLesson}')">
          🎮 VÀO GAME NGAY
        </button>
      </div>
    `;

    if (items.length === 0) {
      html += `<div style="text-align:center; padding:40px; color:#94a3b8;">Không tìm thấy công thức phù hợp.</div>`;
      root.innerHTML = html;
      return;
    }

    html += items.map(item => `
      <div class="formula-card" id="card-${item.id}">
        <div class="formula-card-header" onclick="App.toggleCard('${item.id}')">
          <div class="formula-title-group">
            <span class="formula-badge">Bài ${item.lesson}</span>
            <span class="formula-main-title">${item.title}</span>
            <span class="formula-meaning-preview">( ${item.meaning} )</span>
          </div>
          <span class="expand-icon">Xem chi tiết 🔽</span>
        </div>
        <div class="formula-card-body">
          <div class="section-block">
            <div class="block-title">⚙️ Cấu Trúc Chia / Công Thức</div>
            <div class="formula-box">${item.formula}</div>
          </div>
          ${item.nuance ? `
          <div class="section-block">
            <div class="block-title">💡 Sắc Thái & Lưu Ý</div>
            <div class="nuance-box">${item.nuance}</div>
          </div>` : ''}

          <div class="section-block">
            <div class="block-title">📝 6 Ví Dụ Chi Tiết (Kèm Phát Âm & Kanji)</div>
            <div class="examples-grid">
              ${item.examples ? item.examples.map((ex, exIdx) => `
                <div class="example-item">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;">
                    <div class="example-jp">${ex.jp}</div>
                    <button class="kanji-detail-btn" title="Nghe phát âm" onclick="event.stopPropagation(); AudioEngine.speak('${ex.jp.replace(/<[^>]*>/g, '')}')">🔊 Nghe</button>
                  </div>
                  <div class="example-vi">👉 ${ex.vi}</div>
                  ${ex.kanji && ex.kanji.length > 0 ? `
                    <button class="kanji-detail-btn" onclick="event.stopPropagation(); App.toggleKanji('kj-${item.id}-${exIdx}')">🔍 解釈 Kanji khó</button>
                    <div class="kanji-box" id="kj-${item.id}-${exIdx}">
                      ${ex.kanji.map(k => `
                        <div class="kanji-chip">
                          <span class="kanji-char">${k.char}</span>
                          <span>[${k.amHan}] (${k.meaning})</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('') : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    root.innerHTML = html;
  }

  function toggleCard(cardId) {
    const el = document.getElementById(`card-${cardId}`);
    if (el) el.classList.toggle("open");
  }

  function toggleKanji(boxId) {
    const el = document.getElementById(boxId);
    if (el) el.classList.toggle("show");
  }

  function filterSituations(lesson) {
    currentSituationLesson = lesson;
    document.querySelectorAll("#lesson-bar-situations .lesson-btn").forEach(btn => {
      const btnText = btn.innerText.trim();
      const isAct = (lesson === 'all' && btnText.includes('Tất Cả')) ||
                    (lesson !== 'all' && btnText === `Bài ${lesson}`);
      btn.classList.toggle("active", isAct);
    });
    renderSituations();
  }

  function renderSituations() {
    const root = document.getElementById("situations-root");
    if (!root || !window.SITUATIONS_DATA) return;

    let data = window.SITUATIONS_DATA;
    if (currentSituationLesson !== "all") {
      data = data.filter(s => s.lesson === parseInt(currentSituationLesson));
    }

    root.innerHTML = data.map(item => `
      <div class="situation-card">
        <div class="situation-header">
          <div class="situation-title">${item.title}</div>
          <p style="color:#94a3b8; font-size:0.95rem; margin-top:4px;">${item.description}</p>
        </div>
        ${item.scenarios.map(sc => `
          <div class="scenario-box">
            <div style="font-weight:700; color:#38bdf8; margin-bottom:6px;">📌 ${sc.title}</div>
            <div style="font-size:0.9rem; color:#cbd5e1; margin-bottom:8px;"><em>Bối cảnh: ${sc.context}</em></div>
            <div style="background:#0f172a; padding:10px 14px; border-radius:8px; margin-bottom:8px;">
              <div style="font-weight:600; color:#fff;">💬 "${sc.sampleJp}"</div>
              <div style="color:#94a3b8; font-size:0.9rem; margin-top:4px;">➔ ${sc.sampleVi}</div>
            </div>
            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; font-size:0.85rem;">
              <span style="color:#f59e0b; font-weight:700;">Công thức áp dụng:</span>
              ${sc.grammarUsed.map(g => `<span style="background:#334155; padding:2px 8px; border-radius:4px; color:#fff;">${g}</span>`).join('')}
            </div>
            <div style="margin-top:6px; font-size:0.85rem; color:#a7f3d0;">💡 <strong>Mẹo:</strong> ${sc.tip}</div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  function startMillionaire(lesson = "all") {
    showView("millionaire");
    if (window.MillionaireGame) {
      window.MillionaireGame.init(lesson);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return { showView, filterLesson, handleSearch, toggleCard, toggleKanji, filterSituations, startMillionaire };
})();
