# Day 18 Gate & Submission Guide — Hướng dẫn làm và nộp bài theo từng Gate

> **Trạng thái repository hiện tại:** đã có đủ Design Sheet, prototype A/B/C công khai, ba Feedback Notes T01/T02/T03, Group Synthesis, One Next Change, Still Unproven và AI Support Log. Cả năm Gate đã được đối chiếu là PASS; vẫn cần kiểm link công khai lần cuối sau mỗi lần push.

## Quick Overview — Cách hiểu ngắn gọn

Day 18 không đi tìm vấn đề mới. Nhóm lấy bằng chứng Day 17, giữ một Giả thuyết vấn đề, tạo ba cách giải thật sự khác nhau về cơ chế và cách chia việc giữa người học–AI, xây ba prototype nhỏ có thể thao tác, rồi cho mỗi người thử trải nghiệm cả A/B/C. Kết quả cuối là **một thay đổi tiếp theo**, không phải tuyên bố giải pháp đã được kiểm chứng.

> **Ghi chú thuật ngữ:** “Gate” là cổng/tiêu chí đánh giá; “prototype” là sản phẩm mẫu; “feedback” là phản hồi; “Next Change” là thay đổi tiếp theo; “Still Unproven” là điều vẫn chưa được chứng minh. Tên tiếng Anh được giữ trong ngoặc để đối chiếu với đề bài.

## Gate 1 — Evidence Continuity — Tính liên tục của bằng chứng

### Workflow — Cách làm

1. Đặt các Practice Notes Day 17 cạnh nhau.
2. Tách rõ điều người dùng thực sự làm/nói khỏi diễn giải của nhóm.
3. Tìm điểm lặp lại, mâu thuẫn và bằng chứng ngược.
4. Viết Giả thuyết vấn đề theo cấu trúc: “Khi [tình huống], [người dùng] gặp khó khăn trong việc [công việc cần hoàn thành] vì [rào cản], dẫn đến [hậu quả].”
5. Ghi ít nhất một điều vẫn chưa biết.

### Submission Artifact — Tài liệu cần nộp

- Phần Tổng hợp bằng chứng và Giả thuyết vấn đề trong `three-option-design-sheet.md`.
- Bản tóm tắt trong `README.md`.

### Self-check — Tự kiểm

- Có đủ user, situation, job, barrier và consequence.
- Có ít nhất một observation Day 17 thật.
- Có bằng chứng ngược hoặc điều vẫn chưa được chứng minh.
- Không gọi hai Phiếu ghi chép là bằng chứng kiểm chứng vấn đề.

## Gate 2 — Meaningful Options — Các phương án khác biệt có ý nghĩa

### Workflow — Cách làm

1. Khóa Cam kết so sánh: cùng người dùng, tình huống, nhiệm vụ, kết quả mong muốn và bộ dữ liệu mẫu.
2. Chọn ba cơ chế khác nhau, không chỉ đổi màu, bố cục hoặc câu chữ.
3. Viết rõ user làm gì, AI làm gì, trigger và trade-off.
4. Kiểm tra độ khác biệt bằng ba câu A khác B, B khác C, A khác C mà không nhắc giao diện.

### Three Team Options — Ba phương án của nhóm

- A: người học tự tổ chức; AI chỉ gợi ý khi được gọi.
- B: AI nhóm phần chắc chắn và hỏi người học ở phần chưa chắc.
- C: AI tạo toàn bộ bản nháp; người học xem lại và quyết định sau.

### Submission Artifact — Tài liệu cần nộp

- Cam kết so sánh, Phương án A/B/C và phần Kiểm tra độ khác biệt trong `three-option-design-sheet.md`.

### Self-check — Tự kiểm

Nếu bỏ tên/màu/layout mà vẫn mô tả được sự khác nhau của A/B/C thì option có khoảng cách có ý nghĩa.

## Gate 3 — Human Control — Quyền kiểm soát của con người

### Workflow — Cách làm

Với critical interaction của từng option, trả lời bốn nhóm câu hỏi:

1. **Kỳ vọng:** người dùng biết AI sắp làm gì và có giới hạn gì bằng cách nào?
2. **Vai trò và quyền chủ động:** người dùng làm gì, AI làm gì; AI hành động, hỏi hay không hành động?
3. **Bằng chứng và độ không chắc chắn:** kết quả dựa vào nguồn nào, phần không chắc được thể hiện ra sao?
4. **Kiểm soát và khôi phục:** người dùng sửa, bỏ qua, từ chối, làm lại hoặc hoàn tác ở đâu?

### Submission Artifact — Tài liệu cần nộp

- Human–AI Decision Table trong `three-option-design-sheet.md`.
- Các cách kiểm soát/khôi phục thật sự thao tác được trong prototype.

### Self-check — Tự kiểm

Không chỉ ghi control trong tài liệu. Tester phải nhìn thấy và dùng được control trong critical interaction.

## Gate 4 — Test-ready — Sẵn sàng để thử

### Workflow — Cách làm

1. Mở `prototype/index.html`.
2. Dùng cùng bối cảnh chung và nhiệm vụ cho cả A/B/C.
3. Mỗi option chỉ cần 2–3 trạng thái quanh critical interaction.
4. Kiểm A/B/C có cùng fixture và mức hoàn thiện tương đương.
5. Nhờ một người không build thử mà không giải thích nút/icon.
6. Publish prototype và kiểm URL trong cửa sổ ẩn danh.

### Submission Artifact — Tài liệu cần nộp

- Public URL trong `prototype-link.md` và `README.md`.
- Mã nguồn prototype trong thư mục `prototype/`.
- `test-script.md` để mọi facilitator dùng cùng context/task.

### Self-check — Tự kiểm

- Tester tự mở và thao tác được A/B/C.
- Có nguồn/bằng chứng đủ để ra quyết định.
- Có reset path.
- Facilitator không cần narrate giao diện.

## Gate 5 — Learning — Bài học thu được

### Workflow — Cách làm

1. Tuyển ba người thử ngoài nhóm; mỗi người dùng cả A/B/C.
2. Mỗi phiên dùng cùng task; có thể đổi thứ tự A/B/C để giảm order effect.
3. Ghi hành động đầu tiên, chỗ do dự, bằng chứng được đọc/bỏ qua, cách sửa/khôi phục, phương án chọn và đánh đổi.
4. Tách phần ĐÃ QUAN SÁT, DIỄN GIẢI, QUYẾT ĐỊNH và ĐIỀU CHƯA ĐƯỢC CHỨNG MINH.
5. Đặt ba Phiếu phản hồi cạnh nhau, tìm điểm lặp lại và khác biệt.
6. Chốt đúng **một Thay đổi tiếp theo** có bằng chứng dẫn tới quyết định.

### Submission Artifact — Tài liệu cần nộp

- `prototype-feedback-note.md`: các phiên T02 và T03 do chính người nộp điều phối, kèm link tới từng phiếu độc lập.
- `group-feedback-synthesis.md`: ba phản hồi, điểm lặp lại/khác biệt, Thay đổi tiếp theo và điều vẫn chưa được chứng minh.

### Self-check — Tự kiểm

- Đủ ba người thử thật và ba Phiếu phản hồi.
- Không chỉ đếm option được thích.
- Thay đổi tiếp theo gắn với hành vi/đánh đổi cụ thể.
- Không tuyên bố đã kiểm chứng, có giá trị sản phẩm hay có nhu cầu thị trường.

## 20-minute Test Flow — Quy trình thử trong 20 phút

| Thời gian | Việc làm |
|---|---|
| 0–2 phút | Tạo thoải mái và hỏi relevant context |
| 2–14 phút | Tester tự dùng A/B/C, khoảng 4 phút mỗi option |
| 14–18 phút | So sánh lựa chọn, lý do và trade-off |
| 18–20 phút | Hoàn thiện Phiếu phản hồi ngay khi ký ức còn mới |

Dùng lời dẫn và câu hỗ trợ trong `test-script.md`. Không hỏi “Bạn có thích không?” làm câu hỏi chính và không giải thích giao diện hộ người thử.

## Personal Repository Submission — Nộp repository cá nhân

Tên repository phải là:

```text
Track1_Day18_2A202602020_DuongTienDung
```

Trước deadline:

1. Điền đúng đóng góp cá nhân trong `README.md`.
2. Dán public prototype URL vào `prototype-link.md` và `README.md`.
3. Kiểm lại hai Phiếu phản hồi T02/T03 từ các phiên Dũng trực tiếp điều phối.
4. Kiểm đủ ba Phiếu phản hồi T01/T02/T03 và Bản tổng hợp nhóm.
5. Giữ đúng một Thay đổi tiếp theo và các điều vẫn chưa được chứng minh đã ghi trong synthesis.
6. Cập nhật AI Support Log bằng reflection thật của Dũng.
7. Mở mọi link bằng cửa sổ ẩn danh.
8. Kiểm tra tên repo và cấu trúc file trước khi dán link GitHub/Drive/LMS.

## Do Not Pre-fill — Phần không được phép điền trước

- Lời nói/trích dẫn của người thử.
- Hành động đầu tiên, chỗ do dự hoặc hiểu sai.
- Phương án người thử chọn và lý do.
- Điểm lặp lại của ba người thử.
- Thay đổi tiếp theo của nhóm dựa trên phản hồi.

Những phần này chỉ được hoàn thiện sau các phiên test thật.
