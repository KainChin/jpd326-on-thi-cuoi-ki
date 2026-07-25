/**
 * Main App Router & Modal Handler
 * Strictly < 200 lines
 */
window.App = (function() {
  let currentLesson = 6;
  let currentSituationLesson = 6;
  let currentSpeakingLesson = 6;
  let searchKeyword = "";

  function init() {
    renderGrammarList();
    renderSituations();
    renderSpeakingList();
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }

  function showView(viewName) {
    if (window.AudioEngine) window.AudioEngine.stop();
    const vG = document.getElementById("view-grammar");
    const vS = document.getElementById("view-situations");
    const vSpk = document.getElementById("view-speaking");
    const vM = document.getElementById("view-millionaire");

    const btnG = document.getElementById("tab-btn-grammar");
    const btnS = document.getElementById("tab-btn-situations");
    const btnSpk = document.getElementById("tab-btn-speaking");

    if (vG) vG.style.display = viewName === "grammar" ? "block" : "none";
    if (vS) vS.style.display = viewName === "situations" ? "block" : "none";
    if (vSpk) vSpk.style.display = viewName === "speaking" ? "block" : "none";
    if (vM) vM.style.display = viewName === "millionaire" ? "block" : "none";

    if (btnG) btnG.classList.toggle("active", viewName === "grammar");
    if (btnS) btnS.classList.toggle("active", viewName === "situations");
    if (btnSpk) btnSpk.classList.toggle("active", viewName === "speaking");

    if (viewName === "grammar") renderGrammarList();
    if (viewName === "situations") renderSituations();
    if (viewName === "speaking") renderSpeakingList();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterLesson(lesson) {
    currentLesson = parseInt(lesson);
    document.querySelectorAll("#lesson-bar-grammar .lesson-btn").forEach(btn => {
      btn.classList.toggle("active", btn.innerText.trim() === `Bài ${lesson}`);
    });
    renderGrammarList();
  }

  function filterSituations(lesson) {
    currentSituationLesson = parseInt(lesson);
    document.querySelectorAll("#lesson-bar-situations .lesson-btn").forEach(btn => {
      btn.classList.toggle("active", btn.innerText.trim() === `Bài ${lesson}`);
    });
    renderSituations();
  }

  function filterSpeaking(lesson) {
    currentSpeakingLesson = parseInt(lesson);
    document.querySelectorAll("#lesson-bar-speaking .lesson-btn").forEach(btn => {
      btn.classList.toggle("active", btn.innerText.trim() === `Bài ${lesson}`);
    });
    renderSpeakingList();
  }

  function handleSearch(val) { searchKeyword = val.trim().toLowerCase(); renderGrammarList(); }

  function renderGrammarList() {
    const root = document.getElementById("grammar-list-root");
    if (!root || !window.GrammarStore) return;
    let items = window.GrammarStore.getGrammarByLesson(currentLesson);
    if (searchKeyword) {
      items = items.filter(g => g.title.toLowerCase().includes(searchKeyword) || g.meaning.toLowerCase().includes(searchKeyword) || g.formula.toLowerCase().includes(searchKeyword) || (g.examples && g.examples.some(ex => ex.jp.includes(searchKeyword) || ex.vi.toLowerCase().includes(searchKeyword))));
    }
    let html = `<div class="lesson-game-banner"><div><div class="banner-info-title">🏆 THỬ THÁCH AI LÀ TRIỆU PHÚ - BÀI ${currentLesson}</div><div class="banner-info-sub">Ôn tập tổng hợp ngữ pháp Bài ${currentLesson} với 15 câu hỏi tiền thưởng!</div></div><button class="btn-play-millionaire" onclick="App.startMillionaire(${currentLesson})">🎮 VÀO GAME NGAY</button></div>`;
    if (items.length === 0) { root.innerHTML = html + `<div style="text-align:center; padding:40px; color:#94a3b8;">Không tìm thấy công thức phù hợp.</div>`; return; }
    html += items.map(item => `<div class="formula-card-row" onclick="App.openModal('${item.id}')"><div class="formula-title-text"><span style="color:#fff;">${item.title}</span> <span class="formula-meaning-text">( ${item.meaning} )</span></div><button class="btn-view-detail">Xem chi tiết 🔍</button></div>`).join('');
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
          <div class="modal-header"><div class="modal-title"><span>${item.title}</span><span style="color:#f59e0b; font-size:1rem; font-weight:600; margin-left:8px;">( ${item.meaning} )</span></div><button class="modal-close-btn" onclick="App.closeModal()">✖</button></div>
          <div class="modal-body">
            <div class="section-block"><div class="block-title">⚙️ Cấu Trúc Chia / Công Thức</div><div class="formula-box">${item.formula}</div></div>
            ${item.nuance ? `<div class="section-block"><div class="block-title">💡 Sắc Thái & Lưu Ý</div><div class="nuance-box">${item.nuance}</div></div>` : ''}
            <div class="section-block"><div class="block-title">📝 6 Ví Dụ Chi Tiết (Kèm Phát Âm & Kanji)</div>
              <div class="examples-grid">
                ${item.examples ? item.examples.map((ex, exIdx) => {
                  const cleanText = ex.jp.replace(/<rt>.*?<\/rt>/g, '').replace(/<.*?>/g, '').replace(/"/g, '&quot;');
                  return `<div class="example-item"><div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;"><div class="example-jp">${ex.jp}</div><button class="kanji-detail-btn" title="Nghe phát âm" data-text="${cleanText}" onclick="event.stopPropagation(); AudioEngine.speak(this.getAttribute('data-text'))">🔊 Nghe</button></div><div class="example-vi">👉 ${ex.vi}</div>${ex.kanji && ex.kanji.length > 0 ? `<button class="kanji-detail-btn" onclick="App.toggleKanji('modal-kj-${exIdx}')">🔍 Giải thích Kanji</button><div class="kanji-box" id="modal-kj-${exIdx}">${ex.kanji.map(k => `<div class="kanji-chip"><span class="kanji-char">${k.char}</span><span>[${k.amHan}] (${k.meaning})</span></div>`).join('')}</div>` : ''}</div>`;
                }).join('') : ''}
              </div>
            </div>
            <div style="text-align:right; margin-top:20px;"><button class="btn-play-millionaire" style="background:#334155;" onclick="App.closeModal()">Đóng (✖)</button></div>
          </div>
        </div>
      </div>`;
  }

  function renderSpeakingList() {
    const root = document.getElementById("speaking-root");
    if (!root || !window.SPEAKING_DATA) return;
    let data = window.SPEAKING_DATA.filter(s => s.lesson === currentSpeakingLesson);
    if (data.length === 0) {
      root.innerHTML = `<div style="text-align:center; padding:40px; color:#94a3b8;">Chưa có câu hỏi thi nói cho bài này.</div>`;
      return;
    }
    root.innerHTML = data.map(item => `
      <div class="formula-card-row" onclick="App.openSpeakingModal('${item.id}')">
        <div>
          <div class="formula-title-text"><span style="color:#f59e0b; margin-right:6px;">[Bài ${item.lesson} - Câu ${item.qNum}]</span><span>${item.questionJp}</span></div>
          <div style="font-size:0.9rem; color:#cbd5e1; margin-top:4px;">👉 ${item.questionVi}</div>
        </div>
        <button class="btn-view-detail">Xem đáp án & Kanji 🔍</button>
      </div>`).join('');
  }

  function openSpeakingModal(id) {
    const item = (window.SPEAKING_DATA || []).find(s => s.id === id);
    if (!item) return;
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return;
    const cleanQ = item.questionJp.replace(/"/g, '&quot;');
    const cleanA = item.answerFurigana.replace(/<rt>.*?<\/rt>/g, '').replace(/<.*?>/g, '').replace(/"/g, '&quot;');

    modalRoot.innerHTML = `
      <div class="modal-overlay" onclick="if(event.target === this) App.closeModal()">
        <div class="modal-container">
          <div class="modal-header"><div class="modal-title">📌 Bài ${item.lesson} - Câu hỏi thi nói ${item.qNum}</div><button class="modal-close-btn" onclick="App.closeModal()">✖</button></div>
          <div class="modal-body">
            <div class="section-block">
              <div class="block-title">❓ Câu Hỏi Tiếng Nhật (Kèm Phát Âm & Furigana)</div>
              <div class="formula-box" style="font-family:inherit; font-size:1.15rem; display:flex; justify-content:space-between; align-items:flex-start; gap:10px;">
                <div>${item.questionFurigana}</div>
                <button class="kanji-detail-btn" data-text="${cleanQ}" onclick="event.stopPropagation(); AudioEngine.speak(this.getAttribute('data-text'))">🔊 Nghe Câu Hỏi</button>
              </div>
              <div style="font-size:0.95rem; color:#fef08a; margin-top:6px;">👉 ${item.questionVi}</div>
            </div>
            <div class="section-block">
              <div class="block-title">💬 Gợi Ý Câu Trả Lời Mẫu (Kèm Phát Âm & Furigana)</div>
              <div class="nuance-box" style="font-size:1.05rem; line-height:1.9;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:8px;">
                  <div>${item.answerFurigana}</div>
                  <button class="kanji-detail-btn" style="background:#0f172a;" data-text="${cleanA}" onclick="event.stopPropagation(); AudioEngine.speak(this.getAttribute('data-text'))">🔊 Nghe Câu Trả Lời</button>
                </div>
                <div style="font-size:0.95rem; color:#e2e8f0; border-top:1px dashed rgba(255,255,255,0.2); padding-top:8px;">👉 ${item.answerVi}</div>
              </div>
            </div>
            ${item.kanjiNotes && item.kanjiNotes.length > 0 ? `
              <div class="section-block">
                <div class="block-title">🔍 Chú Thích Từ Vựng & Kanji Khó</div>
                <div class="kanji-box show">
                  ${item.kanjiNotes.map(k => `<div class="kanji-chip"><span class="kanji-char">${k.char}</span><span>[${k.amHan}] (${k.meaning})</span></div>`).join('')}
                </div>
              </div>` : ''}
            <div style="text-align:right; margin-top:20px;"><button class="btn-play-millionaire" style="background:#334155;" onclick="App.closeModal()">Đóng (✖)</button></div>
          </div>
        </div>
      </div>`;
  }

  function closeModal() {
    if (window.AudioEngine) window.AudioEngine.stop();
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) modalRoot.innerHTML = "";
  }

  function toggleKanji(boxId) { const el = document.getElementById(boxId); if (el) el.classList.toggle("show"); }
  function renderSituations() {
    const root = document.getElementById("situations-root"); if (!root) return;
    
    if (!window._selectedBamen) window._selectedBamen = 1;
    const currentBamen = window._selectedBamen;

    let bamenButtonsHtml = `
      <div style="display: flex; gap: 10px; margin-bottom: 20px; justify-content: center; flex-wrap: wrap;">
        <button class="lesson-btn ${currentBamen === 1 ? 'active' : ''}" onclick="App.selectBamen(1)">場面 1</button>
        <button class="lesson-btn ${currentBamen === 2 ? 'active' : ''}" onclick="App.selectBamen(2)">場面 2</button>
        <button class="lesson-btn ${currentBamen === 3 ? 'active' : ''}" onclick="App.selectBamen(3)">場面 3</button>
        <button class="lesson-btn ${currentBamen === 4 ? 'active' : ''}" onclick="App.selectBamen(4)">場面 4</button>
      </div>
    `;

    if (currentBamen === 1 && window.BamenHelper) {
      root.innerHTML = bamenButtonsHtml + window.BamenHelper.renderBamen1();
    } else if (currentBamen === 2 && window.BamenHelper) {
      root.innerHTML = bamenButtonsHtml + window.BamenHelper.renderBamen2();
    } else {
      root.innerHTML = bamenButtonsHtml + `
        <div class="situation-card" style="text-align: center; padding: 40px; color: #94a3b8;">
          <div style="font-size: 1.5rem; margin-bottom: 10px;">📌 場面 ${currentBamen}</div>
          <div>Nội dung 場面 ${currentBamen} đang được hoàn thiện. Vui lòng quay lại sau!</div>
        </div>
      `;
    }
  }

  function selectBamen(num) {
    window._selectedBamen = num;
    renderSituations();
  }

  function toggleBamenImg(bamenNum = 1) {
    if (bamenNum === 1) window._showImgBamen1 = !window._showImgBamen1;
    if (bamenNum === 2) window._showImgBamen2 = !window._showImgBamen2;
    renderSituations();
  }

  function toggleBamenScript(bamenNum = 1) {
    if (bamenNum === 1) window._showScriptBamen1 = !window._showScriptBamen1;
    if (bamenNum === 2) window._showScriptBamen2 = !window._showScriptBamen2;
    renderSituations();
  }

  function openImageModal(imgSrc, title) {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return;
    modalRoot.innerHTML = `
      <div class="modal-overlay" onclick="App.closeModal()" style="display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.92); z-index: 9999; padding: 10px;">
        <div style="position: relative; max-width: 95vw; max-height: 95vh; overflow: auto; text-align: center;" onclick="event.stopPropagation()">
          <button onclick="App.closeModal()" style="position: fixed; top: 15px; right: 15px; background: #f43f5e; color: white; border: none; font-size: 1.3rem; font-weight: bold; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; z-index: 10000; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">✕</button>
          <div style="color: #38bdf8; font-weight: 700; margin-bottom: 8px; font-size: 1.1rem; text-align: center;">🔍 ${title} - Phóng to toàn màn hình</div>
          <img src="${imgSrc}" alt="${title}" style="width: 100%; height: auto; max-height: 85vh; object-fit: contain; border-radius: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.8);">
        </div>
      </div>
    `;
  }

  function startMillionaire(lesson = 6) { showView("millionaire"); if (window.MillionaireGame) window.MillionaireGame.init(lesson); }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); } else { init(); }

  return { showView, filterLesson, filterSituations, filterSpeaking, handleSearch, openModal, openSpeakingModal, openImageModal, closeModal, toggleKanji, startMillionaire, selectBamen, toggleBamenImg, toggleBamenScript };
})();
