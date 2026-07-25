/**
 * Bamen 1 Render Helper with Furigana (<ruby><rt>)
 * Clean & Modular
 */
window.Bamen1 = (function() {
  function render() {
    if (window._showImgBamen1 === undefined) window._showImgBamen1 = true;
    if (window._showScriptBamen1 === undefined) window._showScriptBamen1 = true;
    if (window._showSitBamen1 === undefined) window._showSitBamen1 = true;

    const imgDisplay = window._showImgBamen1 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen1 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.25rem; font-weight: 700; color: #38bdf8;">場面 1: Lời Khuyên Sức Khỏe & Ăn Uống (健康と食生活の助言)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8;" onclick="App.toggleBamenImg(1)">
              ${window._showImgBamen1 ? 'Ẩn Ảnh 場面 1' : 'Hiện Ảnh 場面 1'}
            </button>
            <button class="kanji-detail-btn" style="background: rgba(217, 119, 6, 0.2); border-color: #f59e0b; color: #fbbf24;" onclick="App.toggleBamenScript(1)">
              ${window._showScriptBamen1 ? 'Ẩn Kịch Bản' : 'Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
          <button class="kanji-detail-btn" style="background: rgba(16, 185, 129, 0.2); border-color: #34d399; color: #34d399;" onclick="App.toggleBamenSituations(1)">
            ${window._showSitBamen1 ? 'Ẩn Situations Ôn Tập N3' : 'Xem Situations Ôn Tập N3'}
          </button>
        </div>

        <!-- SITUATIONS OVERVIEW (ĐÃ ĐẶT TRÊN BAMEN) -->
        <div id="bamen1-situations-container" style="display: ${window._showSitBamen1 ? 'block' : 'none'}; margin-bottom: 20px; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 15px; text-align: center;">
          <div style="font-weight: 600; color: #fbbf24; margin-bottom: 12px; font-size: 0.95rem; text-align: left;">Bản Dịch Đề Bài Thi Nói (Đồ Họa Trong Ảnh Situation 1 - Bài 6 N3):</div>
          <img src="assets/images/situation1.jpg" alt="Situation 1" onclick="App.openImageModal('assets/images/situation1.jpg', 'Situation 1')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer; margin-bottom: 12px;">
          
          <div style="text-align: left; background: rgba(15, 23, 42, 0.8); padding: 14px; border-radius: 10px; line-height: 1.7; border: 1px solid rgba(255,255,255,0.08);">
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 8px;">場面 1 (Bài 6): Khuyên bạn chán ăn do giao mùa</div>
            <div style="margin-bottom: 10px; background: rgba(30, 41, 69, 0.6); padding: 8px 12px; border-radius: 6px;">
              <strong style="color: #f43f5e;">Vai A (Bạn):</strong> Bạn thấy B người không được khỏe. Hãy lắng nghe câu chuyện, đưa ra lời khuyên xem nên làm thế nào, đồng thời hãy nói về đồ ăn tốt cho sức khỏe mà mọi người hay khuyên dùng.<br>
              <strong style="color: #38bdf8;">Vai B (Người bệnh):</strong> Dạo này bạn không có cảm giác thèm ăn. Có vẻ do thời tiết chuyển mùa nên bạn bị ốm. Hãy lắng nghe lời khuyên từ A.
            </div>
            
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 8px; margin-top: 12px;">場面 2 (Bài 6): Khuyên bạn mất ngủ do bận rộn</div>
            <div style="background: rgba(30, 41, 69, 0.6); padding: 8px 12px; border-radius: 6px;">
              <strong style="color: #f43f5e;">Vai A (Bạn):</strong> Bạn thấy B tình trạng sức khỏe không tốt. Hãy lắng nghe câu chuyện, đưa ra lời khuyên xem nên làm thế nào, đồng thời hãy nói về phương pháp tốt để có thể ngủ được.<br>
              <strong style="color: #38bdf8;">Vai B (Người bệnh):</strong> Dạo này bạn không ngủ được mấy. Có vẻ do công việc bận rộn nên bạn bị ốm. Hãy lắng nghe lời khuyên từ A.
            </div>
          </div>
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen1-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="assets/images/bamen1.jpg" alt="場面 1" onclick="App.openImageModal('assets/images/bamen1.jpg', '場面 1')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION (BỔ SUNG ĐẦY ĐỦ FURIGANA RUBY/RT) -->
        <div id="bamen1-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Bamen 1 (Chán ăn do giao mùa) -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 700; font-size: 1.05rem; color: #f59e0b; margin-bottom: 6px;">
              Tình huống 1: Chán ăn, mệt mỏi do giao mùa (<ruby>季節<rt>きせつ</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったため)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: B bị mệt và không có cảm giác thèm ăn do thay đổi thời tiết. A khuyên B ăn cháo (お<ruby>粥<rt>かゆ</rt></ruby>).</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> Bさん、どうしたの？<ruby>元気<rt>げんき</rt></ruby>ないね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(B này, sao thế? Trông thầy/cô không được khỏe nhỉ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん、なんだか<ruby>最近<rt>さいきん</rt></ruby><ruby>体<rt>からだ</rt></ruby>の<ruby>調子<rt>ちょうし</rt></ruby>が<ruby>良<rt>よ</rt></ruby>くなくて。<ruby>季節<rt>きせつ</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったために、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>してしまったみたいなんだ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ, dạo này người không khỏe. Có vẻ do chuyển mùa nên tôi bị ốm mất rồi.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ええ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, thầy/cô có sao không?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。それに、あまり<ruby>食欲<rt>しょくよく</rt></ruby>もなくて。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Với lại, cũng chẳng có cảm giác thèm ăn.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>冷<rt>つめ</rt></ruby>たい<ruby>物<rt>もの</rt></ruby>ばかり<ruby>飲<rt>の</rt></ruby>んでいるんじゃない？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Không phải là thầy/cô cứ toàn uống đồ lạnh suốt đấy chứ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん。<ruby>暑<rt>あつ</rt></ruby>いから。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ. Tại vì trời nóng quá.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> それじゃ、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>すよ。きっと<ruby>夏<rt>なつ</rt></ruby>バテだね。<ruby>食欲<rt>しょくよく</rt></ruby>がないときこそ、スープのような<ruby>温<rt>あたた</rt></ruby>かい<ruby>物<rt>もの</rt></ruby>が<ruby>体<rt>からだ</rt></ruby>にいいんだよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế thì ốm mất. Chắc chắn là bị mệt mỏi do nắng hè rồi. Chính những lúc không có cảm giác thèm ăn thế này thì những thứ ấm áp như súp lại rất tốt cho cơ thể đấy.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> <ruby>温<rt>あたた</rt></ruby>かい<ruby>物<rt>もの</rt></ruby>ね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Những đồ ấm áp nhỉ.)</span></div>
              <div style="background: rgba(30, 41, 69, 0.6); padding: 10px 14px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                <strong style="color: #38bdf8;">A (Cách 2):</strong><br>
                そう。それに、<ruby>日本<rt>にほん</rt></ruby>では<ruby>食欲<rt>しょくよく</rt></ruby>がない<ruby>時<rt>とき</rt></ruby>の<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>としてお<ruby>粥<rt>かゆ</rt></ruby>をよく<ruby>食<rt>た</rt></ruby>べるよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Đúng vậy. Hơn nữa, ở Nhật mọi người thường ăn cháo như một món ăn khi không có cảm giác thèm ăn.)</span><br>
                お<ruby>粥<rt>かゆ</rt></ruby>は<ruby>体<rt>からだ</rt></ruby>にいいからね。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Vì cháo rất tốt cho cơ thể mà.)</span><br>
                <ruby>食欲<rt>しょくよく</rt></ruby>がない<ruby>時<rt>とき</rt></ruby>はお<ruby>粥<rt>かゆ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>るって<ruby>言<rt>い</rt></ruby>われているんだよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Người ta hay nói khi không có cảm giác thèm ăn thì cháo là tuyệt nhất đấy.)</span>
              </div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ。じゃあ、<ruby>今日<rt>きょう</rt></ruby>はそれを<ruby>食<rt>た</rt></ruby>べてみるよ。ありがとう。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chà. Vậy hôm nay tôi sẽ ăn thử món đó xem sao. Cảm ơn nhé.)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Bamen 2 (Mất ngủ do bận rộn) -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 700; font-size: 1.05rem; color: #f59e0b; margin-bottom: 6px;">
              Tình huống 2: Mất ngủ, mệt mỏi do bận rộn (<ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>してしまった)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: B bị ốm do bận rộn và dạo này không ngủ được. A khuyên B uống sữa nóng (ホットミルク).</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> Bさん、どうしたの？<ruby>具合<rt>ぐあい</rt></ruby>が<ruby>良<rt>よ</rt></ruby>くないね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(B này, sao thế? Trông tình trạng sức khỏe của thầy/cô không tốt nhỉ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん、なんだか<ruby>最近<rt>さいきん</rt></ruby>あまり<ruby>寝<rt>ね</rt></ruby>られなくて。<ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>してしまったみたいなんだ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ, dạo này tôi không ngủ được mấy. Có vẻ do bận quá nên ốm mất rồi.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ええ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, thầy/cô có sao không?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。それに、<ruby>昼間<rt>ひるま</rt></ruby>もずっと<ruby>頭<rt>あたま</rt></ruby>がぼーっとして。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Với lại, ban ngày đầu óc cứ đờ đẫn ra.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> コーヒーばかり<ruby>飲<rt>の</rt></ruby>んでいるんじゃない？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Không phải là thầy/cô cứ toàn uống cà phê suốt đấy chứ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うん。<ruby>仕事<rt>しごと</rt></ruby>が<ruby>忙<rt>いそが</rt></ruby>しいから。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừ. Tại vì công việc bận quá.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> それじゃ、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>すよ。きっとストレスだね。<ruby>寝<rt>ね</rt></ruby>られないときこそ、ハーブティーのようなリラックスできる<ruby>物<rt>もの</rt></ruby>が<ruby>体<rt>からだ</rt></ruby>にいいんだよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế thì ốm mất. Chắc chắn là do stress rồi. Chính những lúc không ngủ được thế này thì những thứ giúp thư giãn như trà thảo mộc lại rất tốt cho cơ thể đấy.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> リラックスできる<ruby>物<rt>もの</rt></ruby>ね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Những thứ giúp thư giãn nhỉ.)</span></div>
              <div style="background: rgba(30, 41, 69, 0.6); padding: 10px 14px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                <strong style="color: #38bdf8;">A (Cách 2):</strong><br>
                そう。それに、<ruby>日本<rt>にほん</rt></ruby>では<ruby>寝<rt>ね</rt></ruby>られない<ruby>時<rt>とき</rt></ruby>の<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>としてホットミルクをよく<ruby>飲<rt>の</rt></ruby>むよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Đúng vậy. Hơn nữa, ở Nhật mọi người thường uống sữa nóng như một thức uống khi không ngủ được.)</span><br>
                ホットミルクは<ruby>心<rt>こころ</rt></ruby>にいいからね。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Vì sữa nóng rất tốt cho tâm trạng mà.)</span><br>
                <ruby>寝<rt>ね</rt></ruby>られない<ruby>時<rt>とき</rt></ruby>はホットミルクに<ruby>限<rt>かぎ</rt></ruby>るって<ruby>言<rt>い</rt></ruby>われているんだよ。<br>
                <span style="color: #94a3b8; font-size: 0.88rem;">(Người ta hay nói khi không ngủ được thì sữa nóng là tuyệt nhất đấy.)</span>
              </div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ。じゃあ、<ruby>今夜<rt>こんや</rt></ruby>はそれを<ruby>飲<rt>の</rt></ruby>んでみるよ。ありがとう。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chà. Vậy đêm nay tôi sẽ uống thử xem sao. Cảm ơn nhé.)</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return { render };
})();
