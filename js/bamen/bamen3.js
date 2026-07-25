/**
 * Bamen 3 Render Helper
 * Strictly < 200 lines
 */
window.Bamen3 = (function() {
  function render() {
    if (window._showImgBamen3 === undefined) window._showImgBamen3 = true;
    if (window._showScriptBamen3 === undefined) window._showScriptBamen3 = true;

    const imgDisplay = window._showImgBamen3 ? 'block' : 'none';
    const scriptDisplay = window._showScriptBamen3 ? 'block' : 'none';

    return `
      <div class="situation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div style="font-size: 1.3rem; font-weight: 800; color: #38bdf8;">📦 場面 3: Để Quên Đồ Ở Quán (置き忘れ)</div>
          <div style="display: flex; gap: 8px;">
            <button class="kanji-detail-btn" style="background: #0284c7; color: white;" onclick="App.toggleBamenImg(3)">
              ${window._showImgBamen3 ? '🖼️ Ẩn Ảnh 場面 3' : '🖼️ Hiện Ảnh 場面 3'}
            </button>
            <button class="kanji-detail-btn" style="background: #d97706; color: white;" onclick="App.toggleBamenScript(3)">
              ${window._showScriptBamen3 ? '📜 Ẩn Kịch Bản' : '📜 Hiện Kịch Bản'}
            </button>
          </div>
        </div>

        <!-- IMAGES SECTION -->
        <div id="bamen3-img-container" style="display: ${imgDisplay}; text-align: center; margin-bottom: 20px;">
          <img src="assets/images/bamen3.jpg" alt="場面 3" onclick="App.openImageModal('assets/images/bamen3.jpg', '場面 3')" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 2px solid #334155; cursor: pointer;">
        </div>

        <!-- SCRIPTS SECTION -->
        <div id="bamen3-scripts-container" style="display: ${scriptDisplay};">
          <!-- Tình huống 1: Để quên Ví ở quán Cafe -->
          <div class="scenario-box" style="margin-bottom: 20px; border-left: 4px solid #38bdf8; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              👛 Tình huống 1: Để quên Ví ở quán Cafe (喫茶店サクラ)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) gọi điện cho nhân viên quán Cafe Sakura (B) nhờ tìm và gửi trả chiếc ví màu xám có họa tiết hoa bị quên trên bàn.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.6;">
              <div><strong style="color: #f43f5e;">B:</strong> はい、喫茶店（きっさてん）サクラです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, xin nghe. Quán cafe Sakura xin nghe ạ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> もしもし、今日（きょう）そちらに行（い）った者（もの）なんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Alo, tôi là người đã đến quán hôm nay ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng ạ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> そちらに財布（さいふ）を忘（わす）れてしまったようなんです。かばんに入（い）れたつもりだったんですが、なかったもので……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hình như tôi đã để quên ví ở đó. Tôi cứ đinh ninh là đã cất vào túi rồi, nhưng kiểm tra lại thì không thấy...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> そうですか。どんな財布（さいふ）ですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế ạ. Chiếc ví đó như thế nào vậy ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 四角（しかく）くて、色（いろ）はグレーで、花模様（はなもよう）があって、名前（なまえ）もつけてあります。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Nó hình vuông, màu xám, có họa tiết hoa và có ghi cả tên tôi trên đó nữa ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> どの辺（あた）りに座（すわ）っていらっしゃいましたか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Anh/chị đã ngồi ở khoảng khu vực nào ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 右（みぎ）の窓側（まどがわ）の席（せき）です。テーブルの上（うえ）に置（お）いたように思（おも）うんですが、はっきり覚（おぼ）えていません。もしかしたら、下（した）に落（お）ちているかもしれません。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Là chỗ ngồi phía bên phải gần cửa sổ ạ. Tôi nhớ hình như đã để trên bàn, nhưng không nhớ rõ lắm. Có thể nó rơi xuống dưới chăng.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> わかりました。少々（しょうしょう）お待（ま）ちください。……お待（ま）たせいたしました。こちらにございます。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Tôi hiểu rồi. Xin vui lòng chờ một chút. ...Cảm ơn quý khách đã đợi, chiếc ví đang ở đây ạ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ああ、よかったです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ôi may quá!)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> どうしましょうか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Bây giờ anh/chị muốn xử lý thế nào ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> あ、実（じつ）は今（いま）は帰（かえ）りのバスの中（なか）なんです。すみませんが、着払（ちゃくばら）いの宅配便（たくはいびん）で送（おく）ってもらってもいいですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(À, thực ra hiện tại tôi đang trên xe xe buýt về nhà rồi ạ. Xin lỗi nhưng quán có thể gửi chuyển phát nhanh trả phí người nhận giúp tôi được không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい、わかりました。では、お名前（なまえ）とご住所（じゅうしょ）を……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, tôi hiểu rồi. Vậy xin vui lòng cho biết tên và địa chỉ của anh/chị...)</span></div>
            </div>
          </div>

          <!-- Tình huống 2: Để quên áo khoác Cardigan ở nhà hàng -->
          <div class="scenario-box" style="border-left: 4px solid #10b981; background: #0f172a; padding: 16px; border-radius: 10px;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #f59e0b; margin-bottom: 6px;">
              🧥 Tình huống 2: Để quên áo khoác Cardigan ở nhà hàng (レストランみやび)
            </div>
            <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px;">
              <em>Bối cảnh: Bạn (A) gọi điện cho nhân viên nhà hàng Miyabi (B) nhờ tìm chiếc áo cardigan màu xám có logo chim cánh cụt vắt trên ghế.</em>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.6;">
              <div><strong style="color: #f43f5e;">B:</strong> はい、レストランみやびです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, xin nghe. Nhà hàng Miyabi xin nghe ạ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> もしもし、今日（きょう）そちらに行（い）った者（もの）なんですが。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Alo, tôi là người đã đến nhà hàng hôm nay ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng ạ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> そちらにカーディガンを忘（わす）れてしまったようなんです。持（も）って帰（かえ）ったつもりだったんですが、なかったもので……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Hình như tôi đã để quên chiếc áo khoác cardigan ở đó. Tôi cứ đinh ninh là đã mang về rồi, nhưng kiểm tra lại thì không thấy...)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> そうですか。どんなカーディガンですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Thế ạ. Chiếc áo cardigan đó như thế nào vậy ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 色（いろ）はグレーで、胸（むね）の所（ところ）にペンギンのマークが付（つ）いているんです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Nó màu xám, và ở phần ngực có gắn ký hiệu chim cánh cụt ạ.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> どの辺（あた）りに座（すわ）っていらっしゃいましたか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Anh/chị đã ngồi ở khoảng khu vực nào ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> 窓側（まどがわ）の奥（おく）の席（せき）です。いすにかけたように思（おも）うんですが、はっきり覚（おぼ）えていません。もしかしたら、下（した）に落（お）ちているかもしれません。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Là chỗ ngồi phía trong cùng bên cửa sổ ạ. Tôi nhớ hình như đã vắt trên ghế, nhưng không nhớ rõ lắm. Có thể nó rơi xuống dưới chăng.)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> わかりました。少々（しょうしょう）お待（ま）ちください。……お待（ま）たせいたしました。こちらにございます。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Tôi hiểu rồi. Xin vui lòng chờ một chút. ...Cảm ơn quý khách đã đợi, chiếc áo đang ở đây ạ.)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> ああ、よかったです。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Ôi may quá!)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> どうしましょうか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Bây giờ anh/chị muốn xử lý thế nào ạ?)</span></div>
              <div><strong style="color: #38bdf8;">A:</strong> あ、実（じつ）は今（いま）は帰（かえ）りの新幹線（しんかんせん）の中（なか）なんです。すみませんが、着払（ちゃくばら）いの宅配便（たくはいびん）で送（おく）ってもらってもいいですか。<br><span style="color: #94a3b8; font-size: 0.88rem;">(À, thực ra hiện tại tôi đang trên tàu Shinkansen về nhà rồi ạ. Xin lỗi nhưng nhà hàng có thể gửi chuyển phát nhanh trả phí người nhận giúp tôi được không ạ?)</span></div>
              <div><strong style="color: #f43f5e;">B:</strong> はい、わかりました。では、お名前（なまえ）とご住所（じゅうしょ）を……。<br><span style="color: #94a3b8; font-size: 0.88rem;">(Vâng, tôi hiểu rồi. Vậy xin vui lòng cho biết tên và địa chỉ của anh/chị...)</span></div>
            </div>
          </div>
        <div style="display: flex; justify-content: flex-end; margin-top: 15px;">
          <button class="kanji-detail-btn" style="background: #10b981; color: white;" onclick="App.toggleBamenSituations(3)">
            ${window._showSitBamen3 ? '💡 Ẩn Situations Ôn Tập N3' : '💡 Xem thêm Situations Ôn Tập N3'}
          </button>
        </div>

        <!-- SITUATIONS OVERVIEW -->
        <div id="bamen3-situations-container" style="display: ${window._showSitBamen3 ? 'block' : 'none'}; margin-top: 15px; border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 15px;">
          <div style="font-weight: 700; color: #f59e0b; margin-bottom: 10px; font-size: 1rem;">📚 Mẫu Situations mở rộng (Dekiru Nihongo N3):</div>
          <div style="background: #0f172a; padding: 12px; border-radius: 8px; margin-bottom: 10px;">
            <div style="color: #38bdf8; font-weight: 600;">📌 Tình huống 1: Xin phép nghỉ làm một cách khiêm tốn</div>
            <div style="color: #fff; font-size: 0.95rem; margin-top: 4px;">💬 "熱が出たものだから、本日休ませていただけませんか。"</div>
            <div style="color: #94a3b8; font-size: 0.85rem; margin-top: 2px;">➔ Vì em bị sốt nên anh cho phép em nghỉ hôm nay được không ạ?</div>
          </div>
          <div style="background: #0f172a; padding: 12px; border-radius: 8px;">
            <div style="color: #38bdf8; font-weight: 600;">📌 Tình huống 2: Khuyến khích & Trấn an bạn bè</div>
            <div style="color: #fff; font-size: 0.95rem; margin-top: 4px;">💬 "毎日練習したんだから合格するに決まっているよ。"</div>
            <div style="color: #94a3b8; font-size: 0.85rem; margin-top: 2px;">➔ Cậu tập luyện hàng ngày rồi thì chắc chắn sẽ đỗ thôi.</div>
          </div>
        </div>
      </div>
    `;
  }

  return { render };
})();
