# Gate 3 — Human Control — Quyền kiểm soát của con người

## Required Outcome — Đầu ra bắt buộc

Mỗi option phải làm rõ:

- Expectation — user biết AI sắp làm gì và giới hạn gì.
- Role & Agency — user làm gì, AI làm gì; AI Act, Ask hay Don't Act.
- Evidence & Uncertainty — output dựa vào nguồn nào và phần không chắc được hiển thị ra sao.
- Control & Recovery — user sửa, bỏ qua, từ chối, reset hoặc undo ở đâu.

## Repository Evidence — Bằng chứng trong repository

- Human–AI Decision Table nằm trong `three-option-design-sheet.md`.
- Option A có phân loại thủ công, bỏ item, gọi/bỏ qua gợi ý và làm lại.
- Option B có xác nhận, đổi phân loại, bỏ qua, sửa, lưu và làm lại.
- Option C có source, confidence thấp, sửa, từ chối, lưu, undo và quay về raw traces.
- T01 dùng radio ở B và gọi AI gợi ý ở A; T02 sửa mục ở C; T03 dùng làm lại ở A. Cả ba tự tìm được control/recovery mà không cần hướng dẫn thao tác.

## Status — Trạng thái

**PASS — ĐẠT.**

Human–AI Decision Table mô tả đầy đủ expectation, agency, evidence/uncertainty và recovery; usability evidence xác nhận các control chính có thể được tìm và sử dụng trong ba phiên.
