# Prototype Feedback Note T01 — Phiếu phản hồi prototype T01

- **Người điều phối:** Hoàng Thị Thuyên
- **Thứ tự thử:** A → B → C
- **Nhiệm vụ chung:** Tạo một bản ghi chú từ các dấu vết của bài SQL JOINs mà người thử cảm thấy có thể tin tưởng và dùng khi xem lại.

> Ngày, hình thức và relevant context của T01 không có trong dữ liệu tổng hợp hiện tại nên không được tự bổ sung. Phiếu này chỉ tách lại evidence đã được nhóm ghi nhận.

## OBSERVED — Đã quan sát

| Trọng tâm | Ghi chép |
|---|---|
| Hành động đầu tiên | Ở A, đọc từng dấu vết rồi chọn dropdown cho từng dòng. |
| Chỗ dừng/do dự/hiểu sai | A cần sáu lượt chọn và được nhận xét là có quá nhiều thao tác. |
| Evidence đọc hoặc bỏ qua | Đọc mốc nguồn `03:15`; lướt qua nhãn độ tin cậy thấp ở C. |
| Control/recovery | Dùng lựa chọn radio ở B và yêu cầu AI gợi ý ở A, không cần hướng dẫn thao tác. |
| Option được chọn | **B** |
| Lý do và trade-off | Chấp nhận dừng 1–2 lần để trả lời AI nhằm tăng độ chính xác. |
| Evidence chống kỳ vọng | Cảnh báo màu cam ở C không ngăn được hành động lưu. |

Lời nói được ghi lại của T01: *“Cách B tiện nhất vì AI làm hộ phần nhiều nhưng vẫn hỏi mình đúng chỗ quan trọng, không làm mình bị lười như cách C.”*

## INTERPRETED — Diễn giải

Trong phiên này, B có thể tạo cân bằng giữa giảm thao tác và giữ quyền quyết định ở phần chưa chắc chắn. Việc T01 lướt qua cảnh báo ở C gợi ý rằng chỉ dùng màu hoặc nhãn cảnh báo có thể chưa đủ để buộc người học rà soát.

## DECIDED — NEXT CHANGE — Đề xuất mang về nhóm

Giữ cơ chế hỏi lại tại điểm chưa chắc chắn của B; yêu cầu người học xác nhận, sửa hoặc bỏ qua từng mục chưa chắc chắn trước khi lưu.

## STILL UNPROVEN — Điều chưa thể kết luận

Một phiên chưa chứng minh B sẽ được dùng lại sau nhiều ngày, hiệu quả với bài học dài, hay phù hợp với đa số sinh viên.

## Group Synthesis Input — Đầu vào tổng hợp nhóm

- Evidence chính: T01 chọn B nhưng vẫn chấp nhận 1–2 điểm dừng để bảo vệ độ chính xác.
- Khác biệt cần so: T01 lướt qua cảnh báo ở C, trong khi T02 dừng lại đọc.
