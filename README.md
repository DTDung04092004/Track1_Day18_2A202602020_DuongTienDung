# Track 1 — Day 18: Multiple Prototypes — Nhiều phương án mẫu · Human–AI Design — Thiết kế Người–AI

## Case B — Personal Learning Notes — Ghi chú học tập cá nhân

## 1. Personal & Team Information — Thông tin cá nhân và nhóm

- **Chủ repository:** Dương Tiến Dũng
- **MHV:** `2A202602020`
- **Tên nhóm:** `2Member`
- **Case:** Case B — Personal Learning Notes

| Thành viên | MHV | Họ và tên |
|---|---|---|
| 1 | `2A202601910` | Hoàng Thị Thuyên |
| 2 | `2A202602020` | Dương Tiến Dũng |

Nhóm có hai thành viên nên phần **tổng hợp bằng chứng (Evidence Huddle)** hiện dùng hai **Phiếu ghi chép thực hành (Practice Notes)** thật từ Day 17. Nhóm không tạo Phiếu ghi chép hoặc phản hồi giả để đủ số lượng. Tuy nhiên, yêu cầu đầu ra của Day 18 vẫn là **ba người thử và ba Phiếu phản hồi (Feedback Notes)**; vì vậy nhóm cần bố trí thêm một phiên thử thật và phân công một thành viên điều phối phiên thứ ba trước khi nộp.

## 2. Hypothesis Problem — Giả thuyết vấn đề

### Evidence Continuity — Tính liên tục của bằng chứng từ Day 17

Hai Practice Notes đều ghi nhận người học lưu dấu vết học tập ở nhiều nơi hoặc nhiều định dạng, rồi phải quay lại nội dung gốc khi ghi chú không còn đủ ngữ cảnh:

- Phiên của Dương Tiến Dũng: người học dùng vở, ảnh chụp màn hình và Google Docs; một lần tìm lại nội dung mất khoảng **7–10 phút**.
- Phiên của Hoàng Thị Thuyên: người học dùng screenshot, ứng dụng ghi chú ngoài và sổ tay; việc gom/tìm lại ghi chú khi ôn có thể mất khoảng **20–30 phút**.

**Bằng chứng ngược (counter-evidence)** cần giữ lại: trong một tình huống, ghi chú đã đầy đủ và dễ tìm nhưng người học vẫn không xem lại vì chưa có bài tập/kiểm tra, chuyển sang bài khác hoặc quên. Vì vậy nhóm không coi vấn đề hay giải pháp là đã được kiểm chứng.

### Group Hypothesis Problem — Giả thuyết vấn đề nhóm tiếp tục

> Khi vừa hoàn thành một bài học có nhiều nội dung và cần sử dụng lại kiến thức sau đó, học viên gặp khó khăn trong việc tập hợp các điểm quan trọng, ghi chú và phần chưa hiểu thành một tài liệu có thể dùng lại vì các dấu vết học tập nằm phân tán hoặc thiếu ngữ cảnh, dẫn đến mất thêm thời gian tìm/đọc lại nội dung, gián đoạn mạch ôn tập và có thể bỏ quên những câu hỏi chưa được giải quyết.

### Still Unproven — Điều vẫn chưa được chứng minh

- Tổ chức note và giữ ngữ cảnh tốt hơn có khiến người học thực sự quay lại dùng note không.
- Mức tự động hóa nào cân bằng tốt nhất giữa giảm công sức và giữ quyền kiểm soát.
- Prototype được chọn có cải thiện hiệu quả học tập, tạo product value hoặc market demand không.

Xem bằng chứng, **Cam kết so sánh (Comparison Contract)** và **Bảng quyết định Người–AI (Human–AI Decision Table)** tại [three-option-design-sheet.md](three-option-design-sheet.md).

## 3. Three Solution Options — Ba phương án giải pháp

Ba phương án dùng chung người dùng, tình huống, nhiệm vụ, kết quả mong muốn và bộ dữ liệu mẫu về bài **SQL JOINs cơ bản**. Khác biệt nằm ở cơ chế và cách chia quyền quyết định giữa người học với AI.

| Phương án | Cơ chế | Người học làm gì? | AI làm gì? | Đánh đổi chính |
|---|---|---|---|---|
| **A — Source-linked Review Board — Bảng tự sắp xếp có liên kết nguồn** | Người học chủ động | Tự phân loại các dấu vết; yêu cầu AI khi cần | Mặc định không hành động; chỉ gợi ý khi được gọi | Kiểm soát cao nhưng thao tác nhiều |
| **B — Guided AI Co-creation — Đồng tạo có AI hướng dẫn** | Người học và AI cùng làm | Xác nhận, đổi phân loại hoặc bỏ qua phần chưa chắc | Nhóm phần chắc chắn và hỏi trước ở phần chưa chắc | Giảm công sức nhưng có thể hỏi gây gián đoạn |
| **C — AI Auto-draft + Human Review — AI tạo nháp, người học duyệt** | AI làm trước, người học duyệt | Kiểm tra nguồn, sửa/từ chối mục, lưu hoặc hoàn tác | Tạo toàn bộ bản nháp và báo phần có độ chắc chắn thấp | Nhanh nhưng tăng nguy cơ tin AI quá mức |

Prototype công khai: [mở A/B/C trên GitHub Pages](https://dtdung04092004.github.io/Track1_Day18_2A202602020_DuongTienDung/), sau đó thực hiện cùng một task trên A/B/C. Hướng dẫn chạy và kiểm link nằm trong [prototype-link.md](prototype-link.md).

## 4. My Contribution — Đóng góp của tôi trong nhóm

### Dương Tiến Dũng

- Mang Phiếu ghi chép thực hành Day 17 của phiên phỏng vấn P01 vào phần tổng hợp bằng chứng và tách rõ sự kiện, diễn giải, bằng chứng ngược.
- Tham gia chốt Giả thuyết vấn đề, Cam kết so sánh và Bảng quyết định Người–AI.
- Chịu trách nhiệm chính **Option B — Guided AI Co-creation — Đồng tạo có AI hướng dẫn**.
- Tích hợp shared context, content fixture và bộ prototype HTML/CSS/JavaScript A/B/C trong repository cá nhân.
- Chuẩn bị kịch bản thử và mẫu ghi quan sát cho phiên mình điều phối.
- Sau phiên thử: phải tự điền [prototype-feedback-note.md](prototype-feedback-note.md) bằng hành vi/lời nói có thật từ người thử của mình.

Phần đóng góp của các thành viên khác chỉ nên ghi trong repository của họ sau khi chính họ xác nhận. Không dùng AI viết thay reflection cá nhân.

## 5. Prototype Feedback & Group Synthesis — Phản hồi prototype và tổng hợp nhóm

### Trạng thái hiện tại

- **Phiếu phản hồi cá nhân (Feedback Note):** chưa có dữ liệu thử thật; đã có mẫu để ghi ngay sau phiên thử.
- **Bản tổng hợp phản hồi nhóm (Group Feedback Synthesis):** chưa thể kết luận trước khi nhóm có đủ ba Phiếu phản hồi thật.
- **Thay đổi tiếp theo (Next Change):** chưa chốt.
- **Điều vẫn chưa được chứng minh (Still Unproven):** chưa chốt.

Sau khi test, cập nhật:

1. [prototype-feedback-note.md](prototype-feedback-note.md) — chỉ ghi phiên do Dũng điều phối.
2. [group-feedback-synthesis.md](group-feedback-synthesis.md) — tổng hợp ba phản hồi, nêu điểm lặp lại/khác biệt, một Thay đổi tiếp theo và điều vẫn chưa được chứng minh.

Không dùng câu “người thử thích B” làm kết luận nếu thiếu hành vi, lý do và đánh đổi. Ba phản hồi đầu tiên chỉ là đầu vào cho lần cải tiến tiếp theo, không phải bằng chứng kiểm chứng giải pháp.

## 6. AI Support Log — Nhật ký hỗ trợ của AI

Việc sử dụng AI và phần Dũng tự quyết định lại được ghi tại [ai-support-log.md](ai-support-log.md). AI không được dùng để tạo lời trích dẫn, quan sát, lựa chọn hoặc phản hồi của người thử.

## 7. Five-gate Status — Trạng thái năm Gate

| Gate (cổng đánh giá) | Trạng thái | Bằng chứng trong repo | Việc còn phải làm trước khi nộp |
|---|---|---|---|
| **1 — Tính liên tục của bằng chứng** | Đạt ở mức tài liệu | Giả thuyết vấn đề, hai Phiếu ghi chép thật, bằng chứng ngược, điều chưa chứng minh | Nhóm xác nhận cách diễn đạt cuối |
| **2 — Các phương án khác biệt có ý nghĩa** | Đạt ở mức thiết kế | A/B/C cùng Cam kết so sánh và khác cách chia vai trò | Cho một người không build kiểm tra độ khác biệt |
| **3 — Quyền kiểm soát của con người** | Đạt ở mức thiết kế | Kỳ vọng, quyền chủ động, bằng chứng/độ không chắc chắn, kiểm soát/phục hồi | Kiểm tra người dùng có nhận ra các cách kiểm soát hay không |
| **4 — Sẵn sàng để thử** | Public prototype đã hoạt động; chờ kiểm tra khả năng sử dụng | GitHub Pages HTTP 200, A/B/C và đường quay lại | Một người ngoài nhóm tự thao tác A/B/C mà không được giải thích |
| **5 — Bài học thu được** | **Chưa đạt** | Mới có mẫu | Hoàn thành 3 phiên thử thật, 3 Phiếu phản hồi và 1 Thay đổi tiếp theo của nhóm |

Hướng dẫn chi tiết theo từng chặng và checklist nộp bài: [day18-submission-guide.md](day18-submission-guide.md).

## 8. Artifact List — Danh mục tài liệu nộp

- [three-option-design-sheet.md](three-option-design-sheet.md) — Gate 1–3 và annotation A/B/C.
- [prototype/index.html](prototype/index.html) — ba micro-prototype dùng chung context.
- [prototype-link.md](prototype-link.md) — cách mở/publish prototype.
- [test-script.md](test-script.md) — task, observation focus và lời dẫn test.
- [prototype-feedback-note.md](prototype-feedback-note.md) — Phiếu phản hồi cá nhân, chưa điền bằng chứng giả.
- [group-feedback-synthesis.md](group-feedback-synthesis.md) — tổng hợp nhóm sau ba test.
- [ai-support-log.md](ai-support-log.md) — khai báo sử dụng AI cá nhân.
- [day18-submission-guide.md](day18-submission-guide.md) — cách làm và nộp từng Gate.
- [testing-guide.md](testing-guide.md) — cách gửi prototype, điều phối và ghi ba phiên thử.
