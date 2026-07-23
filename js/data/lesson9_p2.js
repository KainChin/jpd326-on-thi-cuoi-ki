/**
 * Lesson 9 - Part 2 (Items 6-10)
 * Strictly < 200 lines per file
 */
window.LESSON9_P2 = [
  {
    lesson: 9, id: "g9_6", title: "～みたいなんですが", romaji: "mitai nan desu ga",
    part: "Part 2: Suy đoán & Điều kiện", meaning: "Có vẻ ~, hình như ~ (Phỏng đoán nhẹ nhàng)",
    formula: "N / V + みたいなんですが",
    nuance: "Đưa ra phỏng đoán dựa trên quan sát trực quan hoặc thông tin mơ hồ.",
    examples: [
      { jp: "電車が<ruby>遅<rt>おく</rt></ruby>れているみたいなんですが。", vi: "Hình như tàu đang bị trễ thì phải ạ.", kanji: [{ char: "遅", amHan: "TRÌ", meaning: "Trễ (おくれる)" }] },
      { jp: "熱があるみたいなんですが早退してもいいですか。", vi: "Có vẻ em bị sốt rồi, em xin phép về sớm được không ạ?", kanji: [{ char: "熱", amHan: "NHIỆT", meaning: "Sốt (ねつ)" }] },
      { jp: "雨が降り出したみたいなんですが。", vi: "Hình như trời bắt đầu đổ mưa rồi.", kanji: [{ char: "雨", amHan: "VŨ", meaning: "Mưa (あめ)" }] },
      { jp: "鍵を忘れたみたいなんですが...", vi: "Có vẻ tôi lỡ quên chìa khóa rồi...", kanji: [{ char: "鍵", amHan: "KIỆN", meaning: "Chìa khóa (かぎ)" }] },
      { jp: "彼は怒っているみたいなんですが原因は何？", vi: "Hình như anh ấy đang giận thì phải, nguyên nhân là gì vậy?", kanji: [{ char: "因", amHan: "NGUYÊN", meaning: "Nguyên nhân (いん)" }] },
      { jp: "パソコンの調子がおかしいみたいなんですが。", vi: "Có vẻ máy tính bị hỏng hóc sao đó.", kanji: [{ char: "調", amHan: "ĐIỀU", meaning: "Tình trạng (ちょう)" }] }
    ]
  },
  {
    lesson: 9, id: "g9_7", title: "～ようなんですが", romaji: "you nan desu ga",
    part: "Part 2: Suy đoán & Điều kiện", meaning: "Có vẻ như ~ (Suy đoán lịch sự, văn phong trang trọng)",
    formula: "V / A + ようなんですが",
    nuance: "Dạng trang trọng của みたい, hay dùng khi giao tiếp với sếp hoặc đối tác.",
    examples: [
      { jp: "会議はもう<ruby>終了<rt>しゅうりょう</rt></ruby>したようなんですが。", vi: "Có vẻ như cuộc họp đã kết thúc rồi ạ.", kanji: [{ char: "終", amHan: "CHUNG", meaning: "Kết thúc (しゅう)" }, { char: "了", amHan: "LIỄU", meaning: "Xong (りょう)" }] },
      { jp: "書類に不備があるようなんですが。", vi: "Có vẻ như giấy tờ có chút sai sót ạ.", kanji: [{ char: "不", amHan: "BẤT", meaning: "Không (ふ)" }, { char: "備", amHan: "BỊ", meaning: "Chuẩn bị (び)" }] },
      { jp: "部長はお出かけのようですが。", vi: "Có vẻ như trưởng phòng đã ra ngoài rồi ạ.", kanji: [{ char: "部", amHan: "BỘ", meaning: "Trưởng phòng (ぶ)" }] },
      { jp: "問題は解決したようなんですが。", vi: "Có vẻ như vấn đề đã được giải quyết xong rồi ạ.", kanji: [{ char: "解", amHan: "GIẢI", meaning: "Giải quyết (かい)" }] },
      { jp: "お客様がお待ちのようですが。", vi: "Có vẻ như khách hàng đang đợi ạ.", kanji: [{ char: "客", amHan: "KHÁCH", meaning: "Khách (きゃく)" }] },
      { jp: "道に迷ったようなんですが助けてもらえますか。", vi: "Có vẻ như tôi bị lạc đường rồi, giúp tôi được không?", kanji: [{ char: "迷", amHan: "MÊ", meaning: "Lạc đường (まよう)" }] }
    ]
  },
  {
    lesson: 9, id: "g9_8", title: "～には", romaji: "ni wa",
    part: "Part 2: Suy đoán & Điều kiện", meaning: "Để làm gì thì... (Nêu điều kiện cần thiết)",
    formula: "V辞書形 + には",
    nuance: "Nhấn mạnh các yếu tố, điều kiện cần thiết để đạt mục tiêu vế 1.",
    examples: [
      { jp: "日本語が上手になるには毎日の練習が必要だ。", vi: "Để giỏi tiếng Nhật thì việc luyện tập hàng ngày là cần thiết.", kanji: [{ char: "必", amHan: "TẤT", meaning: "Tất yếu (ひつ)" }, { char: "要", amHan: "YẾU", meaning: "Cần thiết (よう)" }] },
      { jp: "試験に合格するにはもっと勉強しなければならない。", vi: "Để đỗ kỳ thi thì phải học nhiều hơn nữa.", kanji: [{ char: "合", amHan: "HỢP", meaning: "Đỗ (ごう)" }] },
      { jp: "健康を保つにはバランスの良い食事が必要だ。", vi: "Để duy trì sức khỏe cần ăn uống cân bằng.", kanji: [{ char: "健", amHan: "KIỆN", meaning: "Khỏe (けん)" }, { char: "康", amHan: "KHANG", meaning: "Khang an (こう)" }] },
      { jp: "家を建てるには多額の費用がかかる。", vi: "Để xây nhà tốn chi phí rất lớn.", kanji: [{ char: "建", amHan: "KIẾN", meaning: "Xây dựng (たてる)" }] },
      { jp: "駅に行くにはこの道を真っ直ぐ行きます。", vi: "Để đi đến nhà ga thì đi thẳng con đường này.", kanji: [{ char: "直", amHan: "TRỰC", meaning: "Thẳng (すぐ)" }] },
      { jp: "プロになるには厳しい練習に耐えなければならない。", vi: "Để thành pro phải chịu đựng luyện tập khắc nghiệt.", kanji: [{ char: "厳", amHan: "NGHIÊM", meaning: "Khắc nghiệt (きびしい)" }] }
    ]
  },
  {
    lesson: 9, id: "g9_9", title: "～にかかわらず", romaji: "ni kakawarazu",
    part: "Part 3: Phạm vi & Hành động", meaning: "Bất kể ~, không phụ thuộc vào ~",
    formula: "N + にかかわらず",
    nuance: "Diễn tả sự việc không bị ảnh hưởng bởi điều kiện (thời tiết, tuổi tác, giới tính, Quốc tịch...).",
    examples: [
      { jp: "<ruby>年齢<rt>ねんれい</rt></ruby>にかかわらず参加できる。", vi: "Bất kể độ tuổi đều có thể tham gia.", kanji: [{ char: "齢", amHan: "TUỔI", meaning: "Độ tuổi (れい)" }] },
      { jp: "天候にかかわらず試合は行われる。", vi: "Bất kể thời tiết trận đấu vẫn diễn ra.", kanji: [{ char: "候", amHan: "HẬU", meaning: "Khí hậu (こう)" }] },
      { jp: "国籍にかかわらず採用します。", vi: "Bất kể quốc tịch chúng tôi đều tuyển dụng.", kanji: [{ char: "籍", amHan: "TỊCH", meaning: "Quốc tịch (せき)" }] },
      { jp: "昼夜にかかわらず工事が続く。", vi: "Bất kể ngày đêm công trình vẫn tiếp tục.", kanji: [{ char: "夜", amHan: "DẠ", meaning: "Ban đêm (や)" }] },
      { jp: "経験の有無にかかわらず応募歓迎。", vi: "Bất kể có kinh nghiệm hay không đều hoan nghênh nộp đơn.", kanji: [{ char: "有", amHan: "HỮU", meaning: "Có (う)" }, { char: "無", amHan: "VÔ", meaning: "Không (む)" }] },
      { jp: "好き嫌いにかかわらず食べなさい。", vi: "Bất kể thích hay ghét hãy ăn đi.", kanji: [{ char: "嫌", amHan: "HIỂM", meaning: "Ghét (きらい)" }] }
    ]
  },
  {
    lesson: 9, id: "g9_10", title: "～にかかりなく", romaji: "ni kakarinaku",
    part: "Part 3: Phạm vi & Hành động", meaning: "Bất kể ~ (Dạng văn viết vô cùng trang trọng)",
    formula: "N + にかかりなく",
    nuance: "Cách nói cổ/trang trọng hơn của にかかわらず, dùng trong văn bản chính thức.",
    examples: [
      { jp: "理由のいかんにかかりなく返金不可。", vi: "Bất kể lý do gì cũng không thể hoàn tiền.", kanji: [{ char: "由", amHan: "DO", meaning: "Lý do (ゆう)" }] },
      { jp: "性別にかかりなく評価される。", vi: "Được đánh giá bình đẳng bất kể giới tính.", kanji: [{ char: "評", amHan: "BÌNH", meaning: "Đánh giá (ひょう)" }] },
      { jp: "成績にかかりなく全員卒業できた。", vi: "Bất kể thành tích toàn bộ đều tốt nghiệp.", kanji: [{ char: "績", amHan: "TÍCH", meaning: "Thành tích (せき)" }] },
      { jp: "場所にかかりなく通信可能だ。", vi: "Có thể kết nối bất kể vị trí địa lý.", kanji: [{ char: "通", amHan: "THÔNG", meaning: "Liên lạc (つう)" }] },
      { jp: "金額の多寡にかかりなく手数料無料。", vi: "Miễn phí dịch vụ bất kể số tiền nhiều hay ít.", kanji: [{ char: "寡", amHan: "QUẢ", meaning: "Ít (か)" }] },
      { jp: "内外にかかりなく広く募集する。", vi: "Tuyển dụng rộng rãi bất kể trong hay ngoài nước.", kanji: [{ char: "募", amHan: "MỘ", meaning: "Chiêu mộ (ぼ)" }] }
    ]
  }
];
