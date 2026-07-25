/**
 * Bamen 2 Render Helper with Furigana (<ruby><rt>)
 * Clean & Modular
 */
window.Bamen2 = (function() {
  function render() {
    if (window._showImgBamen2 === undefined) window._showImgBamen2 = false;
    if (window._showScriptBamen2 === undefined) window._showScriptBamen2 = true;
    if (window._showSitBamen2 === undefined) window._showSitBamen2 = true;

    const imgDisplay = window._showImgBamen2 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen2 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.25rem; font-weight: 700; color: #38bdf8;">場面 2: Xin Nghỉ Làm Thêm (バイトを休む)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8;" onclick="App.toggleBamenImg(2)">
              ${window._showImgBamen2 ? 'Ẩn Ảnh 場面 2' : 'Hiện Ảnh 場面 2'}
            </button>
            <button class="kanji-detail-btn" style="background: rgba(217, 119, 6, 0.2); border-color: #f59e0b; color: #fbbf24;" onclick="App.toggleBamenScript(2)">
              ${window._showScriptBamen2 ? 'Ẩn Kịch Bản' : 'Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
          <button class="kanji-detail-btn" style="background: rgba(16, 185, 129, 0.2); border-color: #34d399; color: #34d399;" onclick="App.toggleBamenSituations(2)">
            ${window._showSitBamen2 ? 'Ẩn Situations Ôn Tập N3' : 'Xem Situations Ôn Tập N3'}
          </button>
        </div>

        <!-- SITUATIONS OVERVIEW (ĐÃ ĐẶT TRÊN BAMEN) -->
        <div id="bamen2-situations-container" style="display: ${window._showSitBamen2 ? 'block' : 'none'}; margin-bottom: 20px; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 15px; text-align: center;">
          <div style="font-weight: 600; color: #fbbf24; margin-bottom: 12px; font-size: 0.95rem; text-align: left;">Bản Dịch Đề Bài Thi Nói (Đồ Họa Trong Ảnh Situation 2 - Bài 8 N3):</div>
          <img src="assets/images/situation2.jpg" alt="Situation 2" onclick="App.openImageModal('assets/images/situation2.jpg', 'Situation 2')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer; margin-bottom: 12px;">
          
          <div style="text-align: left; background: rgba(15, 23, 42, 0.8); padding: 14px; border-radius: 10px; line-height: 1.7; border: 1px solid rgba(255,255,255,0.08);">
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 8px;">場面 5 (Bài 8): Xin phép Cửa hàng trưởng cho nghỉ làm thêm</div>
            <div style="background: rgba(30, 41, 69, 0.6); padding: 10px 12px; border-radius: 6px;">
              <strong style="color: #f43f5e;">Vai A (Nhân viên):</strong> Bạn đang làm công việc bán thời gian (arubaito). Bạn muốn nghỉ làm 1 tuần vào cuối tháng sau vì bạn thân của bạn kết hôn nên bạn muốn về quê. Hãy xin phép Cửa hàng trưởng một cách lịch sự để được nghỉ phép.<br><br>
              <strong style="color: #38bdf8;">Vai B (Cửa hàng trưởng):</strong> Bạn là Cửa hàng trưởng (Tencho). Quán rất bận rộn vào thời điểm cuối tháng. Hãy lắng nghe kỹ câu chuyện của A, xác nhận xem có ai làm thay ca cho A hay không, sau đó mới đưa ra sự đồng ý/cho phép nghỉ.
            </div>
          </div>
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen2-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="assets/images/bamen2.jpg" alt="場面 2" onclick="App.openImageModal('assets/images/bamen2.jpg', '場面 2')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION (ĐẦY ĐỦ FURIGANA RUBY/RT) -->
        <div id="bamen2-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Xin nghỉ đi đám cưới -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 700; font-size: 1.05rem; color: #f59e0b; margin-bottom: 6px;">
              Tình huống 1: Xin nghỉ về quê dự đám cưới bạn thân (<ruby>親友<rt>しんゆう</rt></ruby>の<ruby>結婚式<rt>けっこんしき</rt></ruby>)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) xin Cửa hàng trưởng (B) cho nghỉ làm 1 tuần cuối tháng để về quê dự đám cưới bạn thân và đã nhờ Tanaka-san làm thay.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> あのう、<ruby>店長<rt>てんちょう</rt></ruby>、<ruby>今<rt>いま</rt></ruby>よろしいですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin lỗi Cửa hàng trưởng, bây giờ anh/chị có rảnh không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、Aさん、どうしたの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(À, A đấy à, có chuyện gì thế?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>来月<rt>らいげつ</rt></ruby>のシフトのことなんですが……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ, là về chuyện lịch làm ca (shift) tháng sau ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> <ruby>来月<rt>らいげつ</rt></ruby>のシフト？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Lịch làm ca tháng sau sao?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。すみませんが、<ruby>来月末<rt>らいげつまつ</rt></ruby>、1<ruby>週間<rt>しゅうかん</rt></ruby>、アルバイトを<ruby>休<rt>やす</rt></ruby>ませていただけませんか。<ruby>実<rt>じつ</rt></ruby>は、<ruby>友人<rt>ゆうじん</rt></ruby>が<ruby>結婚<rt>けっこん</rt></ruby>するので、ふるさとへ<ruby>帰<rt>かえ</rt></ruby>りたいんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng. Xin lỗi anh/chị, cuối tháng sau anh/chị cho phép em nghỉ làm 1 tuần được không ạ? Thực ra là bạn em kết hôn nên em muốn về quê ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> ああ、そう。それで、いつからいつまで？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ thế à. Thế xin nghỉ từ bao giờ đến bao giờ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 23<ruby>日<rt>にち</rt></ruby>から30<ruby>日<rt>にち</rt></ruby>までなんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ là từ ngày 23 đến ngày 30 ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> えっ、<ruby>月末<rt>げつまつ</rt></ruby>？ うーん、<ruby>忙<rt>いそが</rt></ruby>しいときだねえ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, cuối tháng cơ à? Ừm, đúng đợt bận rộn đấy nhỉ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はあ……、すみません。でも、<ruby>親友<rt>しんゆう</rt></ruby>の<ruby>結婚式<rt>けっこんしき</rt></ruby>なものですから、<ruby>私<rt>わたし</rt></ruby>がどうしても<ruby>出席<rt>しゅっせき</rt></ruby>しなければならなくて……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ... em xin lỗi. Nhưng vì là đám cưới của bạn thân nên em nhất định phải tham dự ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。その<ruby>間<rt>あいだ</rt></ruby>、Aさんの<ruby>代<rt>か</rt></ruby>わりにアルバイトをやってもらう<ruby>人<rt>ひと</rt></ruby>はいるの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Trong thời gian đó có ai làm thay phần việc của A không?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。<ruby>私<rt>わたし</rt></ruby>の<ruby>代<rt>か</rt></ruby>わりに、<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>入<rt>はい</rt></ruby>るって<ruby>言<rt>い</rt></ruby>ってくださっているんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ có ạ. Bạn Tanaka đã nhận lời làm thay ca cho em rồi ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、そうか。じゃ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だね。<ruby>休<rt>やす</rt></ruby>んでいいよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(À thế à. Vậy thì được rồi. Em nghỉ được đấy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ありがとうございます。ご<ruby>迷惑<rt>めいわく</rt></ruby>をかけてすみません。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Em cảm ơn anh/chị rất nhiều. Em xin lỗi vì đã làm phiền ạ.)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Xin nghỉ đi phỏng vấn xin việc -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 700; font-size: 1.05rem; color: #f59e0b; margin-bottom: 6px;">
              Tình huống 2: Xin nghỉ đi phỏng vấn xin việc (<ruby>就職活動<rt>しゅうしょくかつどう</rt></ruby>の<ruby>最終面接<rt>さいしゅうめんせつ</rt></ruby>)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) xin Cửa hàng trưởng (B) cho nghỉ thứ 7 tuần sau để đi phỏng vấn vòng cuối tại Tokyo và đã nhờ Suzuki-san làm thay.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.8;">
              <div><strong style="color: #38bdf8;">A:</strong> あのう、<ruby>店長<rt>てんちょう</rt></ruby>、<ruby>今<rt>いま</rt></ruby>よろしいですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin lỗi Cửa hàng trưởng, bây giờ anh/chị có rảnh không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、Aさん、どうしたの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(À, A đấy à, có chuyện gì thế?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> <ruby>来週<rt>らいしゅう</rt></ruby>のシフトのことなんですが……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ, là về chuyện lịch làm ca tuần sau ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> <ruby>来週<rt>らいしゅう</rt></ruby>のシフト？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Lịch làm ca tuần sau sao?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。すみませんが、<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>、1<ruby>日<rt>にち</rt></ruby>だけ、アルバイトを<ruby>休<rt>やす</rt></ruby>ませていただけませんか。<ruby>実<rt>じつ</rt></ruby>は、<ruby>東京<rt>とうきょう</rt></ruby>で<ruby>就職活動<rt>しゅうしょくかつどう</rt></ruby>の<ruby>最終面接<rt>さいしゅうめんせつ</rt></ruby>があるんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng. Xin lỗi anh/chị, Thứ 7 tuần sau anh/chị cho phép em nghỉ làm 1 ngày được không ạ? Thực ra là em có buổi phỏng vấn xin việc vòng cuối ở Tokyo ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> ああ、そう。それで、いつからいつまで？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ thế à. Thế xin nghỉ ngày nào?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 15<ruby>日<rt>にち</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>なんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ là Thứ 7 ngày 15 ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> えっ、<ruby>土曜日<rt>どようび</rt></ruby>？ うーん、<ruby>忙<rt>いそが</rt></ruby>しいときだねえ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, Thứ 7 cơ à? Ừm, đúng ngày bận rộn đấy nhỉ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はあ……、すみません。でも、<ruby>最終面接<rt>さいしゅうめんせつ</rt></ruby>なものですから、<ruby>私<rt>わたし</rt></ruby>がどうしても<ruby>行<rt>い</rt></ruby>かなければならなくて……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ... em xin lỗi. Nhưng vì là phỏng vấn vòng cuối nên em nhất định phải đi ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。その<ruby>間<rt>あいだ</rt></ruby>、Aさんの<ruby>代<rt>か</rt></ruby>わりにアルバイトをやってもらう<ruby>人<rt>ひと</rt></ruby>はいるの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Thời gian đó có ai làm thay phần việc của A không?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。<ruby>私<rt>わたし</rt></ruby>の<ruby>代<rt>か</rt></ruby>わりに、<ruby>鈴木<rt>すずき</rt></ruby>さんが<ruby>入<rt>はい</rt></ruby>るって<ruby>言<rt>い</rt></ruby>ってくださっているんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ có ạ. Bạn Suzuki đã nhận lời làm thay ca cho em rồi ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、そうか。じゃ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だね。<ruby>休<rt>やす</rt></ruby>んでいいよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(À thế à. Vậy thì được rồi. Em nghỉ được đấy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ありがとうございます。ご<ruby>迷惑<rt>めいわく</rt></ruby>をかけてすみません。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Em cảm ơn anh/chị rất nhiều. Em xin lỗi vì đã làm phiền ạ.)</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return { render };
})();
