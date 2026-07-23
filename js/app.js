/**
 * Main App Router & Modal Handler
 * Strictly < 200 lines
 */
window.App = (function() {
  let currentLesson = 6;
  let currentSituationLesson = 6;
  let searchKeyword = "";

  function init() {
    renderGrammarList();
    renderSituations();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
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
    currentLesson = parseInt(lesson);
    document.querySelectorAll("#lesson-bar-grammar .lesson-btn").forEach(btn => {
      btn.classList.toggle("active", btn.innerText.trim() === `Bài ${lesson}`);
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

    let items = window.GrammarStore.getGrammarByLesson(currentLesson);
    if (searchKeyword) {
      items = items.filter(g =>
        g.title.toLowerCase().includes(searchKeyword) ||
        g.meaning.toLowerCase().includes(searchKeyword) ||
        g.formula.toLowerCase().includes(searchKeyword) ||
        (g.examples && g.examples.some(ex => ex.jp.includes(searchKeyword) || ex.vi.toLowerCase().includes(searchKeyword)))
      );
    }

    let html = `
      <div class="lesson-game-banner">
        <div>
          <div class="banner-info-title">🏆 THỬ THÁCH AI LÀ TRIỆU PHÚ - BÀI ${currentLesson}</div>
          <div class="banner-info-sub">Ôn tập tổng hợp ngữ pháp Bài ${currentLesson} với 15 câu hỏi tiền thưởng!</div>
        </div>
        <button class="btn-play-millionaire" onclick="App.startMillionaire(${currentLesson})">
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
      <div class="formula-card-row" onclick="App.openModal('${item.id}')">
        <div class="formula-title-text">
          <span style="color:#fff;">${item.title}</span>
          <span class="formula-meaning-text">( ${item.meaning} )</span>
        </div>
        <button class="btn-view-detail">Xem chi tiết 🔍</button>
      </div>
    `).join('');

    root.innerHTML = html;
  }

  function openModal(id) {
    const all = window.GrammarStore.getAllGrammar();
    const item = all.find(g => g.id === id);
    if (!item) return;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return;

    modalRoot.innerHTML = `
      <div class="modal-overlay" onclick="if(event.target === this) App.closeModal()">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-title">
              <span>${item.title}</span>
              <span style="color:#f59e0b; font-size:1rem; font-weight:600; margin-left:8px;">( ${item.meaning} )</span>
            </div>
            <button class="modal-close-btn" onclick="App.closeModal()">✖</button>
          </div>
          <div class="modal-body">
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
                      <button class="kanji-detail-btn" title="Nghe phát âm" onclick="AudioEngine.speak('${ex.jp.replace(/<[^>]*>/g, '')}')">🔊 Nghe</button>
                    </div>
                    <div class="example-vi">👉 ${ex.vi}</div>
                    ${ex.kanji && ex.kanji.length > 0 ? `
                      <button class="kanji-detail-btn" onclick="App.toggleKanji('modal-kj-${exIdx}')">🔍 Giải thích Kanji</button>
                      <div class="kanji-box" id="modal-kj-${exIdx}">
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
            <div style="text-align:right; margin-top:20px;">
              <button class="btn-play-millionaire" style="background:#334155;" onclick="App.closeModal()">Đóng (✖)</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function closeModal() {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) modalRoot.innerHTML = "";
  }

  function toggleKanji(boxId) {
    const el = document.getElementById(boxId);
    if (el) el.classList.toggle("show");
  }

  function filterSituations(lesson) {
    currentSituationLesson = parseInt(lesson);
    document.querySelectorAll("#lesson-bar-situations .lesson-btn").forEach(btn => {
      btn.classList.toggle("active", btn.innerText.trim() === `Bài ${lesson}`);
    });
    renderSituations();
  }

  function renderSituations() {
    const root = document.getElementById("situations-root");
    if (!root || !window.SITUATIONS_DATA) return;

    let data = window.SITUATIONS_DATA.filter(s => s.lesson === currentSituationLesson);

    root.innerHTML = data.map(item => `
      <div class="situation-card">
        <div style="font-size:1.2rem; font-weight:800; color:#f59e0b; margin-bottom:12px;">${item.title}</div>
        ${item.scenarios.map(sc => `
          <div class="scenario-box">
            <div style="font-weight:700; color:#38bdf8; margin-bottom:4px;">📌 ${sc.title}</div>
            <div style="font-size:0.9rem; color:#cbd5e1; margin-bottom:8px;"><em>${sc.context}</em></div>
            <div style="background:#0f172a; padding:10px 14px; border-radius:8px; margin-bottom:8px;">
              <div style="font-weight:600; color:#fff;">💬 "${sc.sampleJp}"</div>
              <div style="color:#94a3b8; font-size:0.9rem; margin-top:4px;">➔ ${sc.sampleVi}</div>
            </div>
            <div style="margin-top:6px; font-size:0.85rem; color:#a7f3d0;">💡 <strong>Mẹo:</strong> ${sc.tip}</div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  function startMillionaire(lesson = 6) {
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

  return { showView, filterLesson, handleSearch, openModal, closeModal, toggleKanji, filterSituations, startMillionaire };
})();
