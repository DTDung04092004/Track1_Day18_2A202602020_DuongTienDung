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

## Status — Trạng thái

**PASS at design and interaction level — Đạt ở mức thiết kế và tương tác.**

Gate chỉ được xác nhận hoàn toàn sau khi usability check cho thấy người thử nhận ra và dùng được các control mà không cần giải thích.
