# 📘 JPD326 - Ôn Thi Cuối Kỳ Tiếng Nhật N3 (Bài 6 - Bài 10)

> **Ứng dụng Web Ôn Tập Ngữ Pháp, Tình Huống Giao Tiếp, 10 Câu Hỏi Thi Nói & Game Trắc Nghiệm Ai Là Triệu Phú (Dekiru Nihongo Bài 6 - 10)**

---

## 🌐 Đường Dẫn Triển Khai Trực Tuyến (Vercel Live Demo)

👉 **Link trang web chính thức:** [https://jpd326-on-thi-cuoi-ki.vercel.app](https://jpd326-on-thi-cuoi-ki.vercel.app)

---

## ✨ Các Tính Năng Nổi Bật

### 1. 📖 Kho Công Thức Ngữ Pháp Chi Tiết (Bài 6 ➔ Bài 10)
* **Tổng hợp 71 điểm ngữ pháp trọng tâm** Chuẩn Dekiru Nihongo N3.
* Danh sách hiển thị công thức và ý nghĩa gọn gàng: `～に囲まれている ( Được bao quanh bởi ~ )`.
* **Cửa sổ Pop-up Modal**: Nhấn vào công thức để xem chi tiết cấu trúc chia, sắc thái sử dụng và **6 ví dụ minh họa**.
* Tích hợp giọng đọc phát âm chuẩn tiếng Nhật **🔊 Nghe** và tra cứu từ vựng **🔍 Kanji**.

### 2. 💬 Tình Huống Giao Tiếp Thực Tế
* Phân loại tình huống ứng dụng ngữ pháp chuẩn theo từng bài học (Bài 6 ➔ Bài 10).
* Mẫu câu hội thoại kèm bản dịch Tiếng Việt và mẹo sử dụng tự nhiên trong cuộc sống.

### 3. 🗣️ 10 Câu Hỏi Thi Nói N3 (Luyện Vấn Đáp)
* **Bộ 10 câu hỏi & câu trả lời mẫu chuẩn tài liệu thi nói N3**.
* Phân loại theo từng bài học (`[Bài 6]` ➔ `[Bài 10]`).
* Cửa sổ Pop-up luyện nói: Kèm phiên âm **Furigana** trên chữ Kanji, giọng đọc **🔊 Nghe Câu Hỏi / Câu Trả Lời** và bảng chú thích **Kanji khó**.

### 4. 🏆 Game "Ai Là Triệu Phú" Ôn Tập Tổng Hợp
* Thử thách trắc nghiệm 15 câu hỏi tiền thưởng hấp dẫn từ $100 đến $1,000,000.
* **Quyền Trợ Giúp**: Trợ giúp ⚡ **50:50** và 💡 **Gợi Ý Ngữ Pháp**.
* **Cơ Chế Hồi Trợ Giúp**: Trả lời đúng **2 câu liên tiếp** để nạp lại toàn bộ quyền trợ giúp.
* **Hiệu Ứng Ăn Mừng Chiến Thắng**: Mưa pháo hoa Confetti, Cúp Vàng nẩy sóng và bản nhạc chiến thắng 8-bit hào hùng khi hoàn thành 15/15 câu.

### 5. 📱 Giao Diện Hiện Đại & Chuẩn Responsive
* Giao diện Cyberpunk Studio với hiệu ứng kính mờ (Glassmorphism), viền phát sáng dạ quang Cyan & Gold.
* Tối ưu hóa mượt mà cho mọi kích thước màn hình: Điện thoại di động, Máy tính bảng, Laptop.

---

## 🛠️ Công Nghệ Sử Dụng

* **Core**: HTML5, Vanilla JavaScript (ES6+ Modular Architecture).
* **Styling**: Vanilla CSS3 (Custom Design System, Flexbox, Grid, CSS Animations).
* **Audio Speech**: Web Speech Synthesis API (`ja-JP` Japanese TTS Reader).
* **Sound Effects**: Web Audio API (Retro 8-Bit SFX Synthesizer).
* **Hosting / Deployment**: Vercel Serverless Static Platform.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
on_thi_cuoi_ki/
├── index.html                  # Trang chủ SPA & Router
├── vercel.json                 # Cấu hình triển khai Vercel
├── README.md                   # Tài liệu hướng dẫn dự án
├── Tai_Lieu_On_Tap_Thi_Noi.md  # Tài liệu 10 câu hỏi thi nói
├── css/
│   ├── base.css                # Style chung & CSS Variables
│   ├── components.css          # Style Modal, Banner, Formula Cards
│   └── millionaire.css         # Style Game Ai Là Triệu Phú & Confetti
└── js/
    ├── app.js                  # SPA Router & Modal Manager
    ├── audio.js                # Engine âm thanh & phát âm TTS tiếng Nhật
    ├── millionaireGame.js      # Công cụ Game Ai Là Triệu Phú
    ├── data/
    │   ├── grammarStore.js     # Tổng hợp kho công thức Bài 6-10
    │   ├── situationsData.js   # Kho dữ liệu tình huống giao tiếp
    │   └── speakingData.js     # Kho 10 câu hỏi thi nói kèm Furigana
    └── quiz/
        ├── quizStore.js        # Tổng hợp kho câu hỏi trắc nghiệm
        └── quizLesson6->10.js  # Bộ câu hỏi trắc nghiệm Bài 6 đến Bài 10
```

---

## 👨‍💻 Hướng Dẫn Chạy Cục Bộ (Local Setup)

1. Clone dự án về máy:
   ```bash
   git clone https://github.com/KainChin/jpd326-on-thi-cuoi-ki.git
   cd jpd326-on-thi-cuoi-ki
   ```

2. Mở tệp `index.html` trực tiếp trên trình duyệt hoặc sử dụng extension **Live Server** trong VS Code.

---

📌 *Chúc bạn ôn tập thật tốt và đạt điểm cao trong kỳ thi JPD326 Tiếng Nhật N3!* 🚀
