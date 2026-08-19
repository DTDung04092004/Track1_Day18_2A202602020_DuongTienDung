# Prototype Feedback Note T02 — Phiếu phản hồi prototype T02

- **Người điều phối:** Dương Tiến Dũng
- **Thứ tự thử:** B → C → A
- **Nhiệm vụ chung:** Tạo một bản ghi chú từ các dấu vết của bài SQL JOINs mà người thử cảm thấy có thể tin tưởng và dùng khi xem lại.

> Ngày, hình thức và relevant context của T02 không có trong dữ liệu tổng hợp hiện tại nên không được tự bổ sung. Phiếu này chỉ tách lại evidence đã được nhóm ghi nhận.

## OBSERVED — Đã quan sát

| Trọng tâm | Ghi chép |
|---|---|
| Hành động đầu tiên | Ở B, bấm “Bắt đầu tạo ghi chú cùng AI” khi thấy nút hành động chính. |
| Chỗ dừng/do dự/hiểu sai | Dừng khoảng 10 giây khi chọn cách phân loại câu hỏi ở B. |
| Evidence đọc hoặc bỏ qua | Đọc khung hỏi của B; ở C nhìn thấy cảnh báo và dừng lại đọc. |
| Control/recovery | Dùng “Sửa mục này” ở C để sửa câu hỏi, không cần hướng dẫn thao tác. |
| Option được chọn | **C** |
| Lý do và trade-off | Chấp nhận tự rà soát bản nháp kỹ để đổi lấy tốc độ tạo nháp nhanh. |
| Evidence chống kỳ vọng | Muốn C khóa lưu cho tới khi người học xử lý hết cảnh báo. |

Không có exact quote đã được đối chiếu trong dữ liệu nguồn của phiên này.

## INTERPRETED — Diễn giải

Trong phiên này, người thử có thể tận dụng tốc độ của C vì đã dừng lại tại cảnh báo và dùng được chức năng sửa. Tuy vậy, đề xuất khóa lưu cho thấy chính người thử cũng cần một rào chắn mạnh hơn nhãn cảnh báo đơn thuần.

## DECIDED — NEXT CHANGE — Đề xuất mang về nhóm

Thêm Gated Confirmation: nút lưu chỉ hoạt động sau khi mỗi mục chưa chắc chắn đã được xác nhận, sửa hoặc bỏ qua.

## STILL UNPROVEN — Điều chưa thể kết luận

Một phiên chưa chứng minh người thử sẽ luôn rà soát kỹ trong sử dụng thật, khi số mục tăng, hoặc khi đang vội.

## Group Synthesis Input — Đầu vào tổng hợp nhóm

- Evidence chính: T02 đọc cảnh báo, sửa được mục ở C và chọn C vì tốc độ.
- Khác biệt cần so: khác T01 và T03 ở việc dừng lại xử lý cảnh báo của C.
