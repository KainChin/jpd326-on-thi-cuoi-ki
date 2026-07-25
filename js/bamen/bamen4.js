/**
 * Bamen 4 Render Helper with Furigana (<ruby><rt>)
 * Strictly < 250 lines
 */
window.Bamen4 = (function() {
  function render() {
    if (window._showImgBamen4 === undefined) window._showImgBamen4 = false;
    if (window._showScriptBamen4 === undefined) window._showScriptBamen4 = true;
    if (window._showSitBamen4 === undefined) window._showSitBamen4 = true;

    const imgDisplay = window._showImgBamen4 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen4 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.25rem; font-weight: 700; color: #38bdf8;">場面 4: Rủ Rê Tham Gia Hoạt Động (誘い)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8;" onclick="App.toggleBamenImg(4)">
              ${window._showImgBamen4 ? 'Ẩn Ảnh 場面 4' : 'Hiện Ảnh 場面 4'}
            </button>
            <button class="kanji-detail-btn" style="background: rgba(217, 119, 6, 0.2); border-color: #f59e0b; color: #fbbf24;" onclick="App.toggleBamenScript(4)">
              ${window._showScriptBamen4 ? 'Ẩn Kịch Bản' : 'Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
          <button class="kanji-detail-btn" style="background: rgba(16, 185, 129, 0.2); border-color: #34d399; color: #34d399;" onclick="App.toggleBamenSituations(4)">
            ${window._showSitBamen4 ? 'Ẩn Situations Ôn Tập N3' : 'Xem Situations Ôn Tập N3'}
          </button>
        </div>

        <!-- SITUATIONS OVERVIEW (ĐẶT TRÊN BAMEN) -->
        <div id="bamen4-situations-container" style="display: ${window._showSitBamen4 ? 'block' : 'none'}; margin-bottom: 20px; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 15px; text-align: center;">
          <div style="font-weight: 600; color: #fbbf24; margin-bottom: 12px; font-size: 0.95rem; text-align: left;">Bản Dịch Đề Bài Thi Nói (Đồ Họa Trong Ảnh Situation 4 - Bài 9/10 N3):</div>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 12px;">
            <img src="assets/images/situation4_1.jpg" alt="Situation 4.1" onclick="App.openImageModal('assets/images/situation4_1.jpg', 'Situation 4.1')" style="max-width: 48%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer;">
            <img src="assets/images/situation4_2.jpg" alt="Situation 4.2" onclick="App.openImageModal('assets/images/situation4_2.jpg', 'Situation 4.2')" style="max-width: 48%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer;">
          </div>
          
          <div style="text-align: left; background: rgba(15, 23, 42, 0.8); padding: 14px; border-radius: 10px; line-height: 1.7; border: 1px solid rgba(255,255,255,0.08);">
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 8px;">場面 4: Rủ bạn bè tham gia gian hàng ở Chợ đồ cũ (フリーマーケット)</div>
            <div style="background: rgba(30, 41, 69, 0.6); padding: 10px 12px; border-radius: 6px;">
              <strong style="color: #f43f5e;">Vai A (Người mời):</strong> Bạn đã quyết định mở gian hàng bán hàng ở chợ đồ cũ cùng bạn bè. Bạn muốn B - người cùng học lớp tiếng Anh với bạn đến tham gia cùng. Với B thì thỉnh thoảng bạn mới chào hỏi một chút. Khi gặp ở lớp học, hãy giải thích/giới thiệu về chợ đồ cũ, hỏi xem lịch trình/thời gian của B có tiện không và đưa ra lời rủ rê.<br>
              <em style="color: #fbbf24;">*Thông tin chợ đồ cũ:</em><br>
              - Thời gian: Từ 8h sáng thứ 7 và Chủ nhật tuần sau.<br>
              - Ở chợ đồ cũ này được phép bán đồ ăn do mình tự làm.<br>
              - 20% (2割) giá bán sản phẩm sẽ được dùng làm quỹ quyên góp cho người vô gia cư (Homeless).<br><br>
              <strong style="color: #38bdf8;">Vai B (Người được mời):</strong> Bạn đang học cùng lớp tiếng Anh với A. Với A thì thỉnh thoảng bạn mới chào hỏi một chút ở lớp. A bắt chuyện với bạn. Hãy lắng nghe kỹ câu chuyện và đón nhận/đồng ý lời rủ rê từ A.
            </div>
          </div>
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen4-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="assets/images/bamen4.jpg" alt="場面 4" onclick="App.openImageModal('assets/images/bamen4.jpg', '場面 4')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 2px solid #334155; cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION (CÓ CHÚ THÍCH RUBY KANJI TRÊN ĐẦU) -->
        <div id="bamen4-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Rủ đi chợ đồ cũ -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              🛍️ Tình huống 1: Rủ đi chợ đồ cũ (フリーマーケット)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) rủ bạn (B) cùng tham gia bán đồ ăn ở chợ đồ cũ Công viên Sakura và quyên góp 20% doanh thu.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> こんにちは。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin chào.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> こんにちは。<ruby>今日<rt>きょう</rt></ruby>は<ruby>空<rt>あ</rt></ruby>いてますね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chào bạn. Hôm nay rảnh rỗi nhỉ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> あのう、Bさんはフリーマーケットって<ruby>興味<rt>きょうみ</rt></ruby>がありますか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Này, bạn B có hứng thú với chợ đồ cũ (Flea Market) không?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> え？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>実<rt>じつ</rt></ruby>は<ruby>今度<rt>こんど</rt></ruby>、さくら<ruby>公園<rt>こうえん</rt></ruby>でフリーマーケットがあるんです。それに<ruby>参加<rt>さんか</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>ってるんですけど。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thực ra sắp tới ở công viên Sakura có tổ chức chợ đồ cũ. Tớ đang định tham gia...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ thế à.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>の<ruby>午前<rt>ごぜん</rt></ruby>８<ruby>時<rt>じ</rt></ruby>からなんですけど、もしお<ruby>時間<rt>じかん</rt></ruby>があったらBさんにも<ruby>来<rt>き</rt></ruby>てもらえるかなと<ruby>思<rt>おも</rt></ruby>って……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vào lúc 8h sáng thứ 7 và Chủ nhật tuần sau, nếu có thời gian tớ nghĩ không biết B có thể đến cùng tớ được không...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ、そうなんだ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ, ra vậy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> このフリーマーケット、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>作<rt>つく</rt></ruby>った<ruby>料理<rt>りょうり</rt></ruby>を<ruby>出<rt>だ</rt></ruby>してもいいんですよ。<ruby>色々<rt>いろいろ</rt></ruby>なものがあるって<ruby>評判<rt>ひょうばん</rt></ruby>なんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chợ đồ cũ này được phép bán đồ ăn do mình tự làm đấy. Nghe đồn là có rất nhiều đồ đa dạng lắm.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ、<ruby>面白<rt>おもしろ</rt></ruby>そう。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ, nghe thú vị đấy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> しかも、<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>値段<rt>ねだん</rt></ruby>の２<ruby>割<rt>わり</rt></ruby>がホームレスへの<ruby>寄付金<rt>きふきん</rt></ruby>になるんです。例えば、500<ruby>円<rt>えん</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>なら100円の<ruby>寄付<rt>きふ</rt></ruby>ができるんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hơn nữa, 20% giá bán sản phẩm sẽ được quyên góp cho người vô gia cư đấy. Ví dụ nếu là món ăn 500 yên thì quyên góp được 100 yên.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> ああ、いいね。あ、でも、<ruby>雨<rt>あめ</rt></ruby>だったらどうなるの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(A, hay đấy. Nhưng mà nếu trời mưa thì sao?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> あ、そのときは、<ruby>朝<rt>あさ</rt></ruby>７<ruby>時<rt>じ</rt></ruby>にホームページで<ruby>延期<rt>えんき</rt></ruby>のお<ruby>知<rt>し</rt></ruby>らせがあります。<br><span style="color: #94a3b8; font-size: 0.88rem;">(A, lúc đó thì 7h sáng sẽ có thông báo hoãn trên trang web nhé.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> そうなんだ。じゃ、<ruby>行<rt>い</rt></ruby>ってみようかな。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế à. Vậy để tớ thử đi xem sao.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> わあ、ありがとうございます！<br><span style="color: #94a3b8; font-size: 0.88rem;">(Oa, cảm ơn bạn nhiều nhé!)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Rủ đi làm tình nguyện -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              🌱 Tình huống 2: Rủ đi làm tình nguyện (ボランティア活動)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) rủ bạn (B) tham gia dạy tiếng Anh sơ cấp tại cô nhi viện địa phương và nhận suất học tiếng Anh miễn phí.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> こんにちは。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin chào.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> こんにちは。<ruby>今日<rt>きょう</rt></ruby>は<ruby>空<rt>あ</rt></ruby>いてますね。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Chào bạn. Hôm nay rảnh rỗi nhỉ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> あのう、Bさんはボランティア<ruby>活動<rt>かつどう</rt></ruby>って<ruby>興味<rt>きょうみ</rt></ruby>がありますか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Này, bạn B có hứng thú với hoạt động tình nguyện không?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> え？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>実<rt>じつ</rt></ruby>は<ruby>今度<rt>こんど</rt></ruby>、<ruby>地方<rt>ちほう</rt></ruby>の<ruby>孤児院<rt>こじいん</rt></ruby>でボランティア<ruby>活動<rt>かつどう</rt></ruby>があるんです。それに<ruby>参加<rt>さんか</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>ってるんですけど。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thực ra sắp tới ở cô nhi viện địa phương có hoạt động tình nguyện. Tớ đang định tham gia...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ thế à.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>毎週<rt>まいしゅう</rt></ruby><ruby>土曜日<rt>どようび</rt></ruby>の<ruby>午前<rt>ごぜん</rt></ruby>８<ruby>時<rt>じ</rt></ruby>から10時までなんですけど、もしお<ruby>時間<rt>じかん</rt></ruby>があったらBさんにも<ruby>来<rt>き</rt></ruby>てもらえるかなと<ruby>思<rt>おも</rt></ruby>って……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Từ 8h đến 10h sáng thứ 7 hàng tuần, nếu có thời gian tớ nghĩ không biết B có thể đến cùng tớ được không...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ、そうなんだ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ, ra vậy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> このボランティア<ruby>活動<rt>かつどう</rt></ruby>、子どもたちに<ruby>初級<rt>しょきゅう</rt></ruby>レベルの<ruby>英語<rt>えいご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えるんですよ。<ruby>楽<rt>たの</rt></ruby>しく<ruby>交流<rt>こうりゅう</rt></ruby>できるって<ruby>評判<rt>ひょうばん</rt></ruby>なんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hoạt động tình nguyện này là dạy tiếng Anh trình độ sơ cấp cho các bé đấy. Nghe đồn là có thể giao lưu rất vui vẻ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> へえ、<ruby>面白<rt>おもしろ</rt></ruby>そう。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ, nghe thú vị đấy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> しかも、<ruby>後<rt>あと</rt></ruby>で<ruby>英語<rt>えいご</rt></ruby>の<ruby>中級<rt>ちゅうきゅう</rt></ruby>コースに<ruby>無料<rt>むりょう</rt></ruby>で<ruby>参加<rt>さんか</rt></ruby>できるんです。例えば、私達もタダで<ruby>英語<rt>えいご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>ができるんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hơn nữa, sau đó bọn mình có thể tham gia khóa học tiếng Anh trung cấp miễn phí đấy. Ví dụ bọn mình cũng có thể học tiếng Anh miễn phí.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> ああ、いいね。あ、でも、<ruby>英語<rt>えいご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えたことがなくても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>？<br><span style="color: #94a3b8; font-size: 0.88rem;">(A, hay đấy. Nhưng mà chưa từng dạy tiếng Anh bao giờ có sao không?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> あ、そのときは、<ruby>初級<rt>しょきゅう</rt></ruby>レベルだし、サポートがあるから<ruby>安心<rt>あんしん</rt></ruby>です。<br><span style="color: #94a3b8; font-size: 0.88rem;">(A, lúc đó thì trình độ sơ cấp thôi và có người hỗ trợ nên cứ yên tâm nhé.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> そうなんだ。じゃ、<ruby>行<rt>い</rt></ruby>ってみようかな。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế à. Vậy để tớ thử đi xem sao.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> わあ、ありがとうございます！<br><span style="color: #94a3b8; font-size: 0.88rem;">(Oa, cảm ơn bạn nhiều nhé!)</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return { render };
})();
