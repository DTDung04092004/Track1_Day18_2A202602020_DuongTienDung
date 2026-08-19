# AI Support Log — Nhật ký hỗ trợ của AI · Dương Tiến Dũng

## 1. Where AI Helped — AI đã giúp tôi ở đâu?

Tôi sử dụng ChatGPT để:

- đọc và đối chiếu README cùng hai Practice Notes của Day 17;
- hệ thống hóa phần tổng hợp bằng chứng nhưng giữ tách biệt quan sát và diễn giải;
- chuyển danh sách hướng giải pháp thành ba phương án có cơ chế và cách chia vai trò Người–AI khác nhau;
- tạo content fixture giả dùng chung cho A/B/C;
- rà soát các quyết định về kỳ vọng, quyền chủ động, bằng chứng, độ không chắc chắn, kiểm soát và khôi phục;
- hỗ trợ xây dựng prototype nhỏ bằng HTML/CSS/JavaScript với kết quả AI dựng sẵn;
- rà soát lời giao nhiệm vụ để tránh chỉ nút hoặc dẫn dắt lựa chọn của người thử;
- kiểm tra kỹ thuật cấu trúc HTML/JavaScript và các liên kết nội bộ của prototype;
- tổ chức lại dữ liệu T01/T02/T03 do nhóm cung cấp thành ba Feedback Notes và Group Synthesis dễ đối chiếu, không bổ sung hành vi hoặc lời nói mới.

---

## 2. AI Limitations — AI sai, hời hợt hoặc có nguy cơ làm các option giống nhau ở đâu?

AI có xu hướng tập trung mạnh vào việc tự động tổ chức ghi chú vì đây là giải pháp gần nhất với Giả thuyết vấn đề A.

Nếu không tự rà soát, ba phương án có thể chỉ trở thành ba biến thể của cùng một feature.

AI cũng có xu hướng coi automation nhiều hơn là tốt hơn, trong khi Day 17 có counter-evidence cho thấy một ghi chú đầy đủ và dễ tìm vẫn có thể không được người học sử dụng khi thiếu trigger.

AI không thể biết trước:

- người thử sẽ làm gì;
- người thử chọn phương án nào;
- người thử hiểu sai ở đâu;
- người thử có đọc bằng chứng hay không;
- đánh đổi thực tế của người thử.

---

## 3. My Corrections & Decisions — Tôi đã tự sửa hoặc quyết định lại điều gì?

- Giữ nguyên Giả thuyết vấn đề nối từ Day 17 thay vì tạo một vấn đề mới.
- Giữ counter-evidence về việc note tốt vẫn có thể không được sử dụng.
- Chia ba option thành ba interaction model:
  - Phương án A: người học chủ động;
  - Phương án B: người học và AI cùng làm;
  - Phương án C: AI tạo trước, người học duyệt.
- Giữ cùng user, context, task, outcome và content fixture.
- Mỗi phương án đều có bằng chứng/nguồn.
- Phương án B và C thể hiện độ không chắc chắn rõ.
- Mỗi option đều có đường control hoặc recovery.
- Trực tiếp điều phối T02 và T03; giữ T01 là phiên do Hoàng Thị Thuyên điều phối.
- Phản hồi sau thử chỉ được ghi từ phiên thử thật; không dùng AI để tạo tester, observation, quote, lựa chọn hoặc feedback.
- Chọn Option B làm cơ chế chính cho iteration sau và thêm Gated Confirmation dựa trên evidence người thử bỏ qua cảnh báo ở C.

---

## 4. Technical AI-assisted Check — Kiểm tra kỹ thuật có AI hỗ trợ

AI hỗ trợ kiểm tra:

- JavaScript syntax;
- HTML parsing;
- local CSS/JS file references;
- navigation targets;
- onclick function references;
- state IDs cho A/B/C.

Kết quả:

**PASS**

Technical check không được coi là user testing.
