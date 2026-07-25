/**
 * Bamen 1 Render Helper
 * Strictly < 200 lines
 */
window.Bamen1 = (function() {
  function render() {
    if (window._showImgBamen1 === undefined) window._showImgBamen1 = true;
    if (window._showScriptBamen1 === undefined) window._showScriptBamen1 = true;

    const imgDisplay = window._showImgBamen1 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen1 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.3rem; font-weight: 800; color: #38bdf8;">🍵 場面 1: Lời Khuyên Sức Khỏe & Ăn Uống (健康と食生活の助言)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: #0284c7; color: white;" onclick="App.toggleBamenImg(1)">
              ${window._showImgBamen1 ? '🖼️ Ẩn Ảnh 場面 1' : '🖼️ Hiện Ảnh 場面 1'}
            </button>
            <button class="kanji-detail-btn" style="background: #d97706; color: white;" onclick="App.toggleBamenScript(1)">
              ${window._showScriptBamen1 ? '📜 Ẩn Kịch Bản' : '📜 Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
          <button class="kanji-detail-btn" style="background: #10b981; color: white;" onclick="App.toggleBamenSituations(1)">
            ${window._showSitBamen1 ? '💡 Ẩn Situations Ôn Tập N3' : '💡 Xem thêm Situations Ôn Tập N3'}
          </button>
        </div>

        <!-- SITUATIONS OVERVIEW (ĐÃ ĐẶT TRÊN BAMEN) -->
        <div id="bamen1-situations-container" style="display: ${window._showSitBamen1 ? 'block' : 'none'}; margin-bottom: 20px; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 15px; text-align: center;">
          <div style="font-weight: 700; color: #f59e0b; margin-bottom: 12px; font-size: 1rem; text-align: left;">📚 Hình ảnh Situations mở rộng (Dekiru Nihongo N3):</div>
          <img src="assets/images/situation1.jpg" alt="Situation 1" onclick="App.openImageModal('assets/images/situation1.jpg', 'Situation 1')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 2px solid #334155; cursor: pointer;">
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen1-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="assets/images/bamen1.jpg" alt="場面 1" onclick="App.openImageModal('assets/images/bamen1.jpg', '場面 1')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 2px solid #334155; cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION -->
        <div id="bamen1-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Bamen 1 (Chán ăn do giao mùa) -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              🍲 Tình huống 1: Chán ăn, mệt mỏi do giao mùa (季節が変わったため)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: B bị mệt và không có cảm giác thèm ăn do thay đổi thời tiết. A khuyên B ăn cháo (お粥).</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.6;">
              <div><strong style="color: #38bdf8;">A:</strong> Bさん、どうしたの？元気ないね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(B này, sao thế? Trông thầy/cô không được khỏe nhỉ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん、なんだか最近体の調子が良くなくて。季節が変わったために、体調を崩してしまったみたいなんだ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ, dạo này người không khỏe. Có vẻ do chuyển mùa nên tôi bị ốm mất rồi.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ええ、大丈夫？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, thầy/cô có sao không?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。それに、あまり食欲もなくて。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Với lại, cũng chẳng có cảm giác thèm ăn.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 冷（つめ）たい物ばかり飲んでいるんじゃない？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Không phải là thầy/cô cứ toàn uống đồ lạnh suốt đấy chứ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん。暑いから。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ. Tại vì trời nóng quá.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> それじゃ、体調を崩すよ。きっと夏バテだね。食欲がないときこそ、スープのような温かい物が体にいいんだよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế thì ốm mất. Chắc chắn là bị mệt mỏi do nắng hè rồi. Chính những lúc không có cảm giác thèm ăn thế này thì những thứ ấm áp như súp lại rất tốt cho cơ thể đấy.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> 温かい物ね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Những đồ ấm áp nhỉ.)</span></div>
              <div style="background: #1e293b; padding: 10px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                <strong style="color: #38bdf8;">A (Cách 2):</strong><br>
                そう。それに、日本では食欲（しょくよく）がない時の食べ物としてお粥（かゆ）をよく食べるよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Đúng vậy. Hơn nữa, ở Nhật mọi người thường ăn cháo như một món ăn khi không có cảm giác thèm ăn.)</span><br>
                お粥は体（からだ）にいいからね。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Vì cháo rất tốt cho cơ thể mà.)</span><br>
                食欲がない時はお粥に限るって言われてるんだよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Người ta hay nói khi không có cảm giác thèm ăn thì cháo là tuyệt nhất đấy.)</span>
              </div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ。じゃあ、今日はそれを食べてみるよ。ありがとう。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chà. Vậy hôm nay tôi sẽ ăn thử món đó xem sao. Cảm ơn nhé.)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Bamen 2 (Mất ngủ do bận rộn) -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              ☕ Tình huống 2: Mất ngủ, mệt mỏi do bận rộn (忙しくて、体調を崩してしまった)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: B bị ốm do bận rộn và dạo này không ngủ được. A khuyên B uống sữa nóng (ホットミルク).</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.6;">
              <div><strong style="color: #38bdf8;">A:</strong> Bさん、どうしたの？具合（ぐあい）が良くないね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(B này, sao thế? Trông tình trạng sức khỏe của thầy/cô không tốt nhỉ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん、なんだか最近あまり寝られなくて。忙しくて、体調を崩してしまったみたいなんだ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ, dạo này tôi không ngủ được mấy. Có vẻ do bận quá nên ốm mất rồi.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ええ、大丈夫？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, thầy/cô có sao không?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。それに、昼間もずっと頭がぼーっとして。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Với lại, ban ngày đầu óc cứ đờ đẫn ra.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> コーヒーばかり飲んでいるんじゃない？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Không phải là thầy/cô cứ toàn uống cà phê suốt đấy chứ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん。仕事が忙しいから。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ. Tại vì công việc bận quá.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> それじゃ、体調を崩すよ。きっとストレスだね。寝られないときこそ、ハーブティーのようなリラックスできる物が体にいいんだよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế thì ốm mất. Chắc chắn là do stress rồi. Chính những lúc không ngủ được thế này thì những thứ giúp thư giãn như trà thảo mộc lại rất tốt cho cơ thể đấy.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> リラックスできる物ね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Những thứ giúp thư giãn nhỉ.)</span></div>
              <div style="background: #1e293b; padding: 10px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                <strong style="color: #38bdf8;">A (Cách 2):</strong><br>
                そう。それに、日本では寝られない時の飲み物としてホットミルクをよく飲むよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Đúng vậy. Hơn nữa, ở Nhật mọi người thường uống sữa nóng như một thức uống khi không ngủ được.)</span><br>
                ホットミルクは心（こころ）にいいからね。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Vì sữa nóng rất tốt cho tâm trạng mà.)</span><br>
                寝られない時はホットミルクに限るって言われてるんだよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Người ta hay nói khi không ngủ được thì sữa nóng là tuyệt nhất đấy.)</span>
              </div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ。じゃあ、今夜はそれを飲んでみるよ。ありがとう。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chà. Vậy đêm nay tôi sẽ uống thử xem sao. Cảm ơn nhé.)</span></div>
            </div>
          </div>
      </div>
    `;
  }

  return { render };
})();
