/**
 * Bamen 3 Render Helper with Furigana (<ruby><rt>)
 * Clean & Modular
 */
window.Bamen3 = (function() {
  function render() {
    if (window._showImgBamen3 === undefined) window._showImgBamen3 = true;
    if (window._showScriptBamen3 === undefined) window._showScriptBamen3 = true;
    if (window._showSitBamen3 === undefined) window._showSitBamen3 = true;

    const imgDisplay = window._showImgBamen3 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen3 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.25rem; font-weight: 700; color: #38bdf8;">場面 3: Để Quên Đồ Ở Quán (置き忘れ)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8;" onclick="App.toggleBamenImg(3)">
              ${window._showImgBamen3 ? 'Ẩn Ảnh 場面 3' : 'Hiện Ảnh 場面 3'}
            </button>
            <button class="kanji-detail-btn" style="background: rgba(217, 119, 6, 0.2); border-color: #f59e0b; color: #fbbf24;" onclick="App.toggleBamenScript(3)">
              ${window._showScriptBamen3 ? 'Ẩn Kịch Bản' : 'Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
          <button class="kanji-detail-btn" style="background: rgba(16, 185, 129, 0.2); border-color: #34d399; color: #34d399;" onclick="App.toggleBamenSituations(3)">
            ${window._showSitBamen3 ? 'Ẩn Situations Ôn Tập N3' : 'Xem Situations Ôn Tập N3'}
          </button>
        </div>

        <!-- SITUATIONS OVERVIEW (ĐÃ ĐẶT TRÊN BAMEN) -->
        <div id="bamen3-situations-container" style="display: ${window._showSitBamen3 ? 'block' : 'none'}; margin-bottom: 20px; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 15px; text-align: center;">
          <div style="font-weight: 600; color: #fbbf24; margin-bottom: 12px; font-size: 0.95rem; text-align: left;">Bản Dịch Đề Bài Thi Nói (Đồ Họa Trong Ảnh Situation 3 - Bài 10 N3):</div>
          <img src="assets/images/situation3.jpg" alt="Situation 3" onclick="App.openImageModal('assets/images/situation3.jpg', 'Situation 3')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer; margin-bottom: 12px;">
          
          <div style="text-align: left; background: rgba(15, 23, 42, 0.8); padding: 14px; border-radius: 10px; line-height: 1.7; border: 1px solid rgba(255,255,255,0.08);">
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 8px;">場面 6 (Bài 10): Để quên ví ở quán Cafe & Nhờ gửi bưu điện</div>
            <div style="background: rgba(30, 41, 69, 0.6); padding: 10px 12px; border-radius: 6px;">
              <strong style="color: #f43f5e;">Vai A (Khách hàng):</strong> Bạn để quên chiếc ví ở quán cafe. Khi đang trên xe buýt lượt về thì bạn mới nhận ra điều đó. Hãy gọi điện cho quán cafe. Bạn nhớ mình đã ngồi ở ghế phía bên phải gần cửa sổ, nghĩ là đã để ví ở trên bàn nhưng không nhớ rõ. Nhờ quán gửi bưu điện trả phí người nhận (chakubarai) nếu tìm thấy.<br>
              <em style="color: #fbbf24;">*Thông tin chiếc ví:</em> Hình vuông, màu xám, có họa tiết hoa, có ghi tên trên đó.<br><br>
              <strong style="color: #38bdf8;">Vai B (Nhân viên quán):</strong> Bạn là nhân viên quán cafe. Có cuộc gọi liên hệ tìm đồ thất lạc. Hãy hỏi khách về vị trí ngồi và đặc điểm đồ để quên (màu sắc, hình dáng...). Sau khi kiểm tra khu vực khách nói thì tìm thấy đồ. Hãy hỏi xem khách muốn xử lý thế nào.
            </div>
          </div>
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen3-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="assets/images/bamen3.jpg" alt="場面 3" onclick="App.openImageModal('assets/images/bamen3.jpg', '場面 3')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION (ĐẦY ĐỦ FURIGANA RUBY/RT) -->
        <div id="bamen3-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Để quên chiếc ví -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 700; font-size: 1.05rem; color: #f59e0b; margin-bottom: 6px;">
              Tình huống 1: Để quên chiếc ví ở quán cafe (<ruby>財布<rt>さいふ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れた)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) gọi điện cho quán cafe (B) tìm chiếc ví màu xám hình vuông và nhờ gửi bưu điện chakubarai về nhà.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> もしもし、すみません。そちらに<ruby>財布<rt>さいふ</rt></ruby>の<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>はございませんでしたでしょうか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Alo, xin lỗi ạ. Ở quán mình có để quên chiếc ví nào không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい、<ruby>確認<rt>かくにん</rt></ruby>いたしますので、お<ruby>座<rt>すわ</rt></ruby>りになった<ruby>場所<rt>ばしょ</rt></ruby>と<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, để em kiểm tra ạ. Anh/Chị có thể cho em biết vị trí đã ngồi và đặc điểm của ví được không ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>右<rt>みぎ</rt></ruby>の<ruby>窓側<rt>まどがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>です。<ruby>四角<rt>しかく</rt></ruby>くて、グレーの<ruby>花模様<rt>はなもよう</rt></ruby>がある<ruby>財布<rt>さいふ</rt></ruby>なんですが……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ở bàn phía bên phải gần cửa sổ ạ. Là chiếc ví hình vuông, màu xám có họa tiết hoa ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、ございます！お<ruby>手元<rt>てもと</rt></ruby>にお<ruby>届<rt>とど</rt></ruby>けしましょうか。それとも<ruby>取<rt>と</rt></ruby>に<ruby>来<rt>こ</rt></ruby>られますか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(A, có đây rồi ạ! Bên em gửi về tận nơi cho anh/chị hay anh/chị sẽ qua lấy ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> すみませんが、<ruby>遠<rt>とお</rt></ruby>くにおりますので、<ruby>着払<rt>ちゃくばら</rt></ruby>いの<ruby>宅配便<rt>たくはいびん</rt></ruby>で<ruby>送<rt>おく</rt></ruby>っていただけないでしょうか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin lỗi vì em đang ở xa, anh/chị có thể gửi bưu điện chuyển phát nhanh người nhận trả tiền phí giúp em được không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい、わかりました。では、お<ruby>名前<rt>なまえ</rt></ruby>とご<ruby>住所<rt>じゅうしょ</rt></ruby>を……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, tôi hiểu rồi. Vậy xin vui lòng cho biết tên và địa chỉ của anh/chị...)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Để quên áo khoác Cardigan -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 700; font-size: 1.05rem; color: #f59e0b; margin-bottom: 6px;">
              Tình huống 2: Để quên chiếc áo khoác Cardigan (カーディガンを<ruby>忘<rt>わす</rt></ruby>れた)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) gọi điện cho nhà hàng (B) tìm chiếc áo khoác Cardigan màu trắng và nhờ gửi bưu điện chakubarai về nhà.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> もしもし、すみません。そちらにカーディガンの<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>はございませんでしたでしょうか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Alo, xin lỗi ạ. Ở nhà hàng mình có để quên chiếc áo khoác Cardigan nào không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい、<ruby>確認<rt>かくにん</rt></ruby>いたしますので、お<ruby>座<rt>すわ</rt></ruby>りになった<ruby>場所<rt>ばしょ</rt></ruby>と<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, để em kiểm tra ạ. Anh/Chị có thể cho em biết vị trí đã ngồi và đặc điểm của áo được không ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>奥<rt>おく</rt></ruby>のソファー<ruby>席<rt>せき</rt></ruby>です。<ruby>白<rt>しろ</rt></ruby>くてウールのカーディガンなんですが……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ở bàn sofa phía trong cùng ạ. Là chiếc áo khoác Cardigan bằng len màu trắng ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、ございます！お<ruby>手元<rt>てもと</rt></ruby>にお<ruby>届<rt>とど</rt></ruby>けしましょうか。それとも<ruby>取<rt>と</rt></ruby>に<ruby>来<rt>こ</rt></ruby>られますか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(A, có đây rồi ạ! Bên em gửi về tận nơi cho anh/chị hay anh/chị sẽ qua lấy ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> すみませんが、<ruby>遠<rt>とお</rt></ruby>くにおりますので、<ruby>着払<rt>ちゃくばら</rt></ruby>いの<ruby>宅配便<rt>たくはいびん</rt></ruby>で<ruby>送<rt>おく</rt></ruby>っていただけないでしょうか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin lỗi vì em đang ở xa, anh/chị có thể gửi bưu điện chuyển phát nhanh người nhận trả tiền phí giúp em được không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい、わかりました。では、お<ruby>名前<rt>なまえ</rt></ruby>とご<ruby>住所<rt>じゅうしょ</rt></ruby>を……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, tôi hiểu rồi. Vậy xin vui lòng cho biết tên và địa chỉ của anh/chị...)</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return { render };
})();
