# Group Feedback Synthesis — Bản tổng hợp phản hồi nhóm

**Case B — Personal Learning Notes (Ghi chú học tập cá nhân)**

> Bản tổng hợp này dùng dữ liệu từ ba phiên thử độc lập ngoài nhóm. Mỗi người thử đều trải nghiệm cả A/B/C với cùng bối cảnh, nhiệm vụ và dữ liệu mẫu. Kết quả chỉ dùng để chọn iteration tiếp theo, không được xem là validation về product value hoặc market demand.

## 1. Test Allocation — Phân công phiên thử

| Mã người thử | Người điều phối | Thứ tự bắt đầu | Phiếu chi tiết |
|---|---|---|---|
| T01 | Hoàng Thị Thuyên | A → B → C | [Feedback Note T01](feedback/feedback-note-t01.md) |
| T02 | Dương Tiến Dũng | B → C → A | [Feedback Note T02](feedback/feedback-note-t02.md) |
| T03 | Dương Tiến Dũng | C → A → B | [Feedback Note T03](feedback/feedback-note-t03.md) |

## 2. Feedback Comparison — So sánh phản hồi

| Nội dung | T01 — Thuyên điều phối | T02 — Dũng điều phối | T03 — Dũng điều phối | Pattern hoặc khác biệt |
|---|---|---|---|---|
| **Hành động đầu tiên** | Ở A, đọc từng dấu vết rồi chọn dropdown cho từng dòng. | Ở B, bấm “Bắt đầu tạo ghi chú cùng AI” khi thấy nút hành động chính. | Ở C, bấm “Tạo bản nháp tự động” ngay. | Trong phiên tương ứng, T02 và T03 đi thẳng vào nút kích hoạt AI; T01 đọc dữ liệu trước khi phân loại thủ công. |
| **Breakdown chính** | A cần sáu lượt chọn nên tạo nhiều thao tác. | Ở B, dừng khoảng 10 giây khi chọn cách phân loại câu hỏi. | Ở C, gần lưu bản nháp mà chưa phát hiện mục AI suy đoán sai. | A tạo gánh nặng thao tác; C tạo nguy cơ bỏ sót lỗi nếu người học duyệt nhanh. |
| **Evidence được đọc/bỏ qua** | Đọc mốc nguồn `03:15`; lướt qua nhãn độ tin cậy thấp ở C. | Đọc khung hỏi của B; ở C nhìn thấy cảnh báo và dừng lại đọc. | Đọc lướt nguồn; bỏ qua cảnh báo ở C rồi lưu. | T02 dừng tại cảnh báo; T01 và T03 không xử lý kỹ cảnh báo độ tin cậy thấp. |
| **Cách lấy lại control** | Dùng lựa chọn radio ở B và yêu cầu AI gợi ý ở A. | Dùng “Sửa mục này” ở C để sửa câu hỏi. | Dùng “Làm lại từ đầu” ở A sau khi chọn nhầm dropdown. | Cả ba tự tìm và dùng được ít nhất một control/recovery mà không cần hướng dẫn thao tác. |
| **Option được chọn** | **B** | **C** | **B** | B được chọn ở 2/3 phiên; C được chọn ở 1/3 phiên. |
| **Trade-off** | Chấp nhận dừng 1–2 lần để trả lời AI nhằm tăng độ chính xác. | Chấp nhận tự rà soát kỹ để đổi lấy tốc độ tạo nháp của C. | Chấp nhận thêm thao tác ở phần chưa rõ để tránh mất câu hỏi cần ôn. | Cả ba chấp nhận một mức effort kiểm tra nếu nó giúp bảo vệ nội dung chưa hiểu hoặc độ chính xác của ghi chú. |
| **Evidence chống lại kỳ vọng** | Cảnh báo màu cam ở C không ngăn được hành động lưu. | Muốn C khóa lưu cho tới khi người học xử lý cảnh báo. | Cho rằng A chỉ phù hợp khi có ít hơn ba mục; bài dài dễ khiến người dùng bỏ cuộc. | Chỉ hiển thị cảnh báo chưa đủ; đồng thời luồng thủ công của A khó mở rộng khi có nhiều dấu vết. |

## 3. Observed Patterns — Điểm lặp lại quan sát được

1. **B tạo điểm cân bằng đáng tiếp tục kiểm tra.** B được chọn ở hai phiên vì AI gom phần rõ ràng nhưng hỏi lại ở phần chưa chắc chắn. Đây là xu hướng trong ba phiên, không phải kết luận rằng B phù hợp với mọi người học.
2. **C có nguy cơ over-trust.** T01 và T03 đã lướt qua cảnh báo độ tin cậy thấp; T03 còn gần lưu mục suy đoán sai. Một bản nháp trông hoàn chỉnh có thể khiến cảnh báo bị bỏ qua.
3. **A giảm inference nhưng tăng thao tác.** Người học giữ quyền cấu trúc ghi chú, nhưng việc phân loại từng dấu vết tạo effort rõ rệt và có thể khó dùng khi bài học dài.

## 4. Tester Differences — Khác biệt giữa các phiên

- Trong phiên T02, người thử dừng lại đọc cảnh báo ở C và chọn C để đổi lấy tốc độ, với điều kiện tự rà soát kỹ.
- Trong phiên T01 và T03, người thử không xử lý kỹ cảnh báo ở C và cuối cùng chọn B vì luồng này buộc họ xác nhận tại phần quan trọng.
- Đây là mô tả hành vi trong từng phiên; dữ liệu chưa đủ để gán T01/T02/T03 thành các “kiểu người dùng” cố định.

## 5. One Next Change — Một thay đổi tiếp theo

> **Giữ Option B — Guided AI Co-creation làm cơ chế chính và bổ sung Gated Confirmation cho mọi mục chưa chắc chắn.**

Iteration tiếp theo sẽ:

1. Giữ việc AI tự nhóm các mục có độ chắc chắn cao.
2. Với mỗi câu hỏi hoặc dấu vết chưa chắc chắn, hiển thị một bước xác nhận ngắn như ở B.
3. Vô hiệu hóa nút lưu cho tới khi người học đã chọn một trong ba hành động cho từng mục chưa chắc chắn: **Xác nhận**, **Sửa**, hoặc **Bỏ qua**.

Cơ chế này nhằm giảm nguy cơ lưu khi chưa xem phần chưa chắc chắn; nó không loại bỏ hoàn toàn lỗi hay over-trust.

## 6. Decision Evidence — Bằng chứng dẫn tới Next Change

- T01 và T03 bỏ qua hoặc lướt qua cảnh báo độ tin cậy thấp ở C.
- T03 gần lưu một mục AI suy đoán sai.
- T02 chủ động sửa mục ở C và đề xuất khóa lưu cho tới khi cảnh báo được xử lý.
- T01 và T03 chọn B; T01 chấp nhận dừng 1–2 lần, còn T03 chấp nhận thêm thao tác ở phần chưa rõ.
- Lời nói được ghi lại của T01: *“Cách B tiện nhất vì AI làm hộ phần nhiều nhưng vẫn hỏi mình đúng chỗ quan trọng, không làm mình bị lười như cách C.”*

## 7. Still Unproven — Điều vẫn chưa được chứng minh

1. Ghi chú tạo theo luồng B có khiến người học thực sự mở lại sau 7–14 ngày khi không có bài tập hoặc bài kiểm tra làm trigger hay không.
2. Gated Confirmation có còn chấp nhận được khi bài học có 20–30 dấu vết và 5–7 mục cần hỏi lại hay không.
3. Luồng mới có cải thiện hiệu quả học tập, product value hoặc market demand hay không.

## 8. Evidence Boundary — Ranh giới bằng chứng

- Ba phiên cung cấp dữ liệu usability ban đầu cho iteration kế tiếp.
- Nhóm không suy rộng tỷ lệ `2/3` thành preference của toàn bộ sinh viên.
- Ngoài câu của T01 đã được ghi trong dữ liệu nguồn, tài liệu không bổ sung exact quote mới.
