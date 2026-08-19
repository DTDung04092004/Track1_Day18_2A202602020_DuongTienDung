# Prototype Feedback Note T03 — Phiếu phản hồi prototype T03

- **Người điều phối:** Dương Tiến Dũng
- **Thứ tự thử:** C → A → B
- **Nhiệm vụ chung:** Tạo một bản ghi chú từ các dấu vết của bài SQL JOINs mà người thử cảm thấy có thể tin tưởng và dùng khi xem lại.

> Ngày, hình thức và relevant context của T03 không có trong dữ liệu tổng hợp hiện tại nên không được tự bổ sung. Phiếu này chỉ tách lại evidence đã được nhóm ghi nhận.

## OBSERVED — Đã quan sát

| Trọng tâm | Ghi chép |
|---|---|
| Hành động đầu tiên | Ở C, bấm “Tạo bản nháp tự động” ngay. |
| Chỗ dừng/do dự/hiểu sai | Gần lưu bản nháp mà chưa phát hiện mục AI suy đoán sai. |
| Evidence đọc hoặc bỏ qua | Đọc lướt nguồn; bỏ qua cảnh báo ở C rồi lưu. |
| Control/recovery | Dùng “Làm lại từ đầu” ở A sau khi chọn nhầm dropdown, không cần hướng dẫn thao tác. |
| Option được chọn | **B** |
| Lý do và trade-off | Chấp nhận thêm thao tác ở phần chưa rõ để tránh mất câu hỏi cần ôn. |
| Evidence chống kỳ vọng | Cho rằng A chỉ phù hợp khi có ít hơn ba mục; với bài dài có thể bỏ cuộc. |

Không có exact quote đã được đối chiếu trong dữ liệu nguồn của phiên này.

## INTERPRETED — Diễn giải

Trong phiên này, bản nháp hoàn chỉnh của C có thể khuyến khích lưu nhanh trước khi kiểm tra mục AI suy đoán. B có thể an toàn hơn cho task này vì bước xác nhận xuất hiện đúng tại nội dung chưa rõ; A có nguy cơ không mở rộng tốt khi số dấu vết tăng.

## DECIDED — NEXT CHANGE — Đề xuất mang về nhóm

Dùng B làm cơ chế chính và buộc xử lý từng mục chưa chắc chắn trước khi cho phép lưu.

## STILL UNPROVEN — Điều chưa thể kết luận

Một phiên chưa chứng minh Gated Confirmation sẽ không gây mệt khi có nhiều câu hỏi, hay B giúp người học quay lại dùng ghi chú sau nhiều ngày.

## Group Synthesis Input — Đầu vào tổng hợp nhóm

- Evidence chính: T03 bỏ qua cảnh báo ở C, gần lưu suy đoán sai và cuối cùng chọn B.
- Khác biệt cần so: T03 cho thấy rõ nguy cơ over-trust; T02 đã dừng lại đọc và sửa.
