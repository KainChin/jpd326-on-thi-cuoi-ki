/**
 * Bamen 2 Render Helper
 * Strictly < 200 lines
 */
window.Bamen2 = (function() {
  function render() {
    if (window._showImgBamen2 === undefined) window._showImgBamen2 = true;
    if (window._showScriptBamen2 === undefined) window._showScriptBamen2 = true;

    const imgDisplay = window._showImgBamen2 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen2 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.3rem; font-weight: 800; color: #38bdf8;">🏪 場面 2: Xin Nghỉ Làm Thêm (バイトを休む)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: #0284c7; color: white;" onclick="App.toggleBamenImg(2)">
              ${window._showImgBamen2 ? '🖼️ Ẩn Ảnh 場面 2' : '🖼️ Hiện Ảnh 場面 2'}
            </button>
            <button class="kanji-detail-btn" style="background: #d97706; color: white;" onclick="App.toggleBamenScript(2)">
              ${window._showScriptBamen2 ? '📜 Ẩn Kịch Bản' : '📜 Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen2-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="bamen2.jpg" alt="場面 2" onclick="App.openImageModal('bamen2.jpg', '場面 2')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 2px solid #334155; cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION -->
        <div id="bamen2-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Xin nghỉ đi đám cưới -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              💒 Tình huống 1: Xin nghỉ về quê dự đám cưới bạn thân (親友の結婚式)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) xin Cửa hàng trưởng (B) cho nghỉ làm 1 tuần cuối tháng để về quê dự đám cưới bạn thân và đã nhờ Tanaka-san làm thay.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.6;">
              <div><strong style="color: #38bdf8;">A:</strong> あのう、店長、今よろしいですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin lỗi Cửa hàng trưởng, bây giờ anh/chị có rảnh không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、Aさん、どうしたの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(À, A đấy à, có chuyện gì thế?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 来月（らいげつ）のシフトのことなんですが……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ, là về chuyện lịch làm ca (shift) tháng sau ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> 来月のシフト？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Lịch làm ca tháng sau sao?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。すみませんが、来月末（らいげつまつ）、１週間（いっしゅうかん）、アルバイトを休ませていただけませんか。実は、友人が結婚するので、ふるさとへ帰りたいんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng. Xin lỗi anh/chị, cuối tháng sau anh/chị cho phép em nghỉ làm 1 tuần được không ạ? Thực ra là bạn em kết hôn nên em muốn về quê ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> ああ、そう。それで、いつからいつまで？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ thế à. Thế xin nghỉ từ bao giờ đến bao giờ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 23日から30日までなんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ là từ ngày 23 đến ngày 30 ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> えっ、月末（がつまつ）？ うーん、忙しいときだねえ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, cuối tháng cơ à? Ừm, đúng đợt bận rộn đấy nhỉ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はあ……、すみません。でも、親友（しんゆう）の結婚式（けっこんしき）なものですから、私がどうしても出席（しゅっせき）しなければならなくて……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ... em xin lỗi. Nhưng vì là đám cưới của bạn thân nên em nhất định phải tham dự ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。その間、Aさんの代わりにアルバイトをやってもらう人はいるの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Trong thời gian đó có ai làm thay phần việc của A không?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。私の代わりに、田中（たなか）さんが入るって言ってくださっているんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ có ạ. Bạn Tanaka đã nhận lời làm thay ca cho em rồi ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、そうか。じゃ、大丈夫だね。休んでいいよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(À thế à. Vậy thì được rồi. Em nghỉ được đấy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ありがとうございます。ご迷惑をかけてすみません。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Em cảm ơn anh/chị rất nhiều. Em xin lỗi vì đã làm phiền ạ.)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Xin nghỉ đi phỏng vấn xin việc -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              💼 Tình huống 2: Xin nghỉ đi phỏng vấn xin việc (就職活動の最終面接)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) xin Cửa hàng trưởng (B) cho nghỉ thứ 7 tuần sau để đi phỏng vấn vòng cuối tại Tokyo và đã nhờ Suzuki-san làm thay.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.6;">
              <div><strong style="color: #38bdf8;">A:</strong> あのう、店長、今よろしいですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Xin lỗi Cửa hàng trưởng, bây giờ anh/chị có rảnh không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、Aさん、どうしたの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(À, A đấy à, có chuyện gì thế?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 来週（らいしゅう）のシフトのことなんですが……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ, là về chuyện lịch làm ca tuần sau ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> 来週のシフト？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Lịch làm ca tuần sau sao?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。すみませんが、来週の土曜日（どようび）、１日だけ、アルバイトを休ませていただけませんか。実は、東京（とうきょう）で就職活動（しゅうしょくかつどう）の最終面接（さいしゅうめんせつ）があるんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng. Xin lỗi anh/chị, Thứ 7 tuần sau anh/chị cho phép em nghỉ làm 1 ngày được không ạ? Thực ra là em có buổi phỏng vấn xin việc vòng cuối ở Tokyo ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> ああ、そう。それで、いつからいつまで？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ồ thế à. Thế xin nghỉ ngày nào?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 15日の土曜日なんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ là Thứ 7 ngày 15 ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> えっ、土曜日（どようび）？ うーん、忙しいときだねえ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hả, Thứ 7 cơ à? Ừm, đúng ngày bận rộn đấy nhỉ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はあ……、すみません。でも、最終面接（さいしゅうめんせつ）なものですから、私がどうしても行（い）かなければならなくて……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ... em xin lỗi. Nhưng vì là phỏng vấn vòng cuối nên em nhất định phải đi ạ...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> うーん。その間、Aさんの代わりにアルバイトをやってもらう人はいるの？<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ừm. Thời gian đó có ai làm thay phần việc của A không?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> はい。私の代わりに、鈴木（すずき）さんが入るって言ってくださっているんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Dạ có ạ. Bạn Suzuki đã nhận lời làm thay ca cho em rồi ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> あ、そうか。じゃ、大丈夫だね。休んでいいよ。<br><span style="color: #94a3b8; font-size: 0.88rem;">(À thế à. Vậy thì được rồi. Em nghỉ được đấy.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ありがとうございます。ご迷惑をかけてすみません。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Em cảm ơn anh/chị rất nhiều. Em xin lỗi vì đã làm phiền ạ.)</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return { render };
})();
