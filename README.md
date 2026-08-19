# Track 1 — Day 18: Multiple Prototypes — Human–AI Design

**Case B — Personal Learning Notes (Ghi chú học tập cá nhân)**

[Mở prototype A/B/C trên GitHub Pages](https://dtdung04092004.github.io/Track1_Day18_2A202602020_DuongTienDung/) · [Hướng dẫn chạy và chia sẻ](prototype-link.md)

## 1. Personal & Team Information — Thông tin cá nhân và nhóm

- **Chủ repository:** Dương Tiến Dũng
- **MHV:** `2A202602020`
- **Tên nhóm:** `2Member`
- **Case:** Case B — Personal Learning Notes

| Thành viên | MHV | Họ và tên |
|---|---|---|
| 1 | `2A202601910` | Hoàng Thị Thuyên |
| 2 | `2A202602020` | Dương Tiến Dũng |

Nhóm có hai thành viên nên Evidence Huddle sử dụng hai Practice Notes thật từ Day 17. Nhóm không tạo Practice Note thứ ba. Yêu cầu ba phiên thử Day 18 được đáp ứng bằng ba người thử độc lập: T01 do Thuyên điều phối; T02 và T03 do Dũng điều phối.

## 2. Hypothesis Problem — Giả thuyết vấn đề

> Khi vừa hoàn thành một bài học có nhiều nội dung và cần sử dụng lại kiến thức sau đó, học viên gặp khó khăn trong việc tập hợp các điểm quan trọng, ghi chú và phần chưa hiểu thành một tài liệu có thể dùng lại vì các dấu vết học tập nằm phân tán hoặc thiếu ngữ cảnh, dẫn đến mất thêm thời gian tìm/đọc lại nội dung, gián đoạn mạch ôn tập và có thể bỏ quên những câu hỏi chưa được giải quyết.

### Evidence Continuity — Bằng chứng từ Day 17

- Phiên của Dũng: người học dùng vở, ảnh chụp màn hình và Google Docs; một lần tìm lại nội dung mất khoảng **7–10 phút**.
- Phiên của Thuyên: người học dùng screenshot, ứng dụng ghi chú ngoài và sổ tay; việc gom/tìm lại khi ôn được ghi nhận khoảng **20–30 phút**.
- Counter-evidence: có trường hợp ghi chú đầy đủ và dễ tìm nhưng người học vẫn không quay lại vì chưa có bài tập/kiểm tra, chuyển sang bài khác hoặc quên.

Vì vậy, evidence hỗ trợ việc tiếp tục kiểm tra problem nhưng chưa chứng minh pain hay solution đã được validated.

### Still Unproven — Điều vẫn chưa được chứng minh

- Ghi chú có tổ chức và giữ ngữ cảnh tốt hơn có khiến người học thực sự quay lại dùng không.
- Mức tự động hóa nào cân bằng tốt nhất giữa giảm effort và giữ quyền kiểm soát.
- Giải pháp có cải thiện hiệu quả học tập hoặc tạo product/market value không.

Chi tiết: [Three-option Design Sheet](three-option-design-sheet.md).

## 3. Three Solution Options — Ba phương án giải pháp

A/B/C dùng chung một user, situation, task, desired outcome và bộ dữ liệu mẫu SQL JOINs. Điểm khác nhau nằm ở mechanism và cách chia quyền quyết định giữa người học với AI.

| Option | Cơ chế | Người học | AI | Trade-off chính |
|---|---|---|---|---|
| **A — Source-linked Review Board** | Người học tự sắp xếp dấu vết có liên kết nguồn | Phân loại từng mục, quyết định cấu trúc, gọi AI khi cần | Mặc định không hành động; chỉ gợi ý khi được yêu cầu | Kiểm soát cao nhưng nhiều thao tác |
| **B — Guided AI Co-creation** | AI gom phần chắc chắn và hỏi ở phần chưa chắc | Xác nhận, sửa hoặc bỏ qua; quyết định bản cuối | Act ở phần rõ, Ask ở phần chưa rõ | Giảm effort nhưng có thể tạo nhiều điểm dừng |
| **C — AI Auto-draft + Human Review** | AI tạo toàn bộ bản nháp để người học duyệt | Kiểm tra nguồn, sửa/từ chối và quyết định lưu | Tạo draft, gắn độ tin cậy | Nhanh nhưng có nguy cơ over-trust |

Prototype chung: [mở A/B/C](https://dtdung04092004.github.io/Track1_Day18_2A202602020_DuongTienDung/).

## 4. My Contribution — Đóng góp của tôi trong nhóm

Dương Tiến Dũng đã:

- tổng hợp Practice Note Day 17 của phiên do mình phỏng vấn và giữ lại counter-evidence;
- tham gia chốt Hypothesis Problem, Comparison Contract và Human–AI Decision Table;
- chịu trách nhiệm chính **Option B — Guided AI Co-creation**;
- xây dựng shared context, content fixture SQL JOINs, component/style chung và prototype HTML/CSS/JavaScript cho A/B/C;
- bổ sung expectation, evidence/uncertainty, control/recovery và reset path;
- kiểm tra kỹ thuật, cấu hình GitHub Pages và tài liệu hướng dẫn chạy trên PyCharm;
- trực tiếp điều phối hai phiên thử **T02 và T03**, ghi observation và đưa evidence vào bản tổng hợp;
- cùng nhóm chọn Next Change từ ba Feedback Notes.

## 5. Prototype Feedback & Group Synthesis — Phản hồi và tổng hợp

### Three Independent Feedback Notes — Ba phiếu độc lập

- [T01 — Hoàng Thị Thuyên điều phối](feedback/feedback-note-t01.md)
- [T02 — Dương Tiến Dũng điều phối](feedback/feedback-note-t02.md)
- [T03 — Dương Tiến Dũng điều phối](feedback/feedback-note-t03.md)
- [Trang tổng hợp phần Dũng điều phối](prototype-feedback-note.md)

### Learning — Điều học được

- B được chọn ở 2/3 phiên; C được chọn ở 1/3 phiên. Con số này chỉ mô tả ba phiên, không đại diện cho toàn bộ sinh viên.
- T01 và T03 không xử lý kỹ cảnh báo độ tin cậy thấp ở C; T03 gần lưu một mục AI suy đoán sai.
- T02 dừng đọc cảnh báo, sửa được mục ở C và chọn C vì tốc độ.
- Cả ba dùng được control/recovery mà không cần người điều phối hướng dẫn thao tác.

### One Next Change — Một thay đổi tiếp theo

> Giữ **Option B** làm cơ chế chính và bổ sung **Gated Confirmation**: không cho lưu cho tới khi từng mục chưa chắc chắn đã được **Xác nhận**, **Sửa**, hoặc **Bỏ qua**.

### Still Unproven — Điều vẫn chưa được chứng minh

- Người học có mở lại ghi chú sau 7–14 ngày nếu không có trigger hay không.
- Luồng xác nhận có gây mệt khi có 20–30 dấu vết và 5–7 câu hỏi hay không.
- Giải pháp có tạo hiệu quả học tập, product value hoặc market demand hay không.

Chi tiết: [Group Feedback Synthesis](group-feedback-synthesis.md).

## 6. AI Support Log — Nhật ký hỗ trợ của AI

AI được dùng để gợi ý cơ chế, tạo synthetic content fixture, hỗ trợ code, rà Human–AI decisions, kiểm tra kỹ thuật và tổ chức lại tài liệu từ evidence nhóm đã cung cấp. AI không tạo tester, quote, observation, lựa chọn hay feedback. Xem [AI Support Log](ai-support-log.md).

## 7. Gate Status — Trạng thái năm Gate

| Gate | Trạng thái | Evidence chính |
|---|---|---|
| **1 — Evidence Continuity** | **PASS** | Hai Practice Notes thật, Hypothesis Problem, counter-evidence và Still Unproven |
| **2 — Meaningful Options** | **PASS** | A/B/C cùng contract nhưng khác mechanism và role split |
| **3 — Human Control** | **PASS** | Expectation, agency, evidence/uncertainty và recovery rõ ở mỗi option |
| **4 — Test-ready** | **PASS** | Prototype công khai; T01/T02/T03 tự thao tác A/B/C với cùng task |
| **5 — Learning** | **PASS** | Ba Feedback Notes, pattern/difference, One Next Change và Still Unproven |

Tài liệu Gate: [Gate 1](gates/gate-1-evidence-continuity.md) · [Gate 2](gates/gate-2-meaningful-options.md) · [Gate 3](gates/gate-3-human-control.md) · [Gate 4](gates/gate-4-test-ready.md) · [Gate 5](gates/gate-5-learning.md)

## 8. Repository Map — Bản đồ bài nộp

```text
Track1_Day18_2A202602020_DuongTienDung/
├── README.md
├── three-option-design-sheet.md
├── prototype-link.md
├── prototype-feedback-note.md
├── feedback/
│   ├── feedback-note-t01.md
│   ├── feedback-note-t02.md
│   └── feedback-note-t03.md
├── group-feedback-synthesis.md
├── ai-support-log.md
├── prototype/
│   ├── index.html
│   ├── option-a.html
│   ├── option-b.html
│   ├── option-c.html
│   ├── styles.css
│   └── app.js
└── gates/
    ├── gate-1-evidence-continuity.md
    ├── gate-2-meaningful-options.md
    ├── gate-3-human-control.md
    ├── gate-4-test-ready.md
    └── gate-5-learning.md
```
