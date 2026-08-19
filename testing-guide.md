# A/B/C Testing Guide — Hướng dẫn tổ chức phiên thử A/B/C

## 1. Public Prototype — Link prototype công khai

Sau khi bật GitHub Pages theo `prototype-link.md`, gửi tester link:

```text
https://dtdung04092004.github.io/Track1_Day18_2A202602020_DuongTienDung/
```

Trước khi gửi, mở link bằng cửa sổ ẩn danh và tự thử A/B/C.

## 2. Tester Assignment — Phân công người thử

| Tester | Test order — Thứ tự thử |
|---|---|
| T01 | A → B → C |
| T02 | B → C → A |
| T03 | C → A → B |

Không cần công khai tên thật trong repository. Giữ thông tin liên hệ ở ghi chép cá nhân nếu cần.

## 3. Invitation Message — Tin nhắn mời

> Chào bạn, mình đang test ba cách thiết kế tính năng ghi chú học tập cho một bài Lab. Bạn có thể dành giúp mình khoảng 15–20 phút không? Đây là test thiết kế, không phải kiểm tra kiến thức của bạn. Bạn sẽ thử cả ba phương án A/B/C và nói to suy nghĩ trong khi thao tác. Mình chỉ ghi chép để cải thiện thiết kế.

Nếu muốn ghi âm, phải hỏi và nhận được đồng ý trước.

## 4. Relevant Context — Bối cảnh liên quan · 2 phút

Hỏi:

> Gần đây bạn có từng ghi chú, highlight, chụp màn hình hoặc lưu lại một phần nội dung học để xem lại sau không?

Nếu có, hỏi thêm:

> Lần gần nhất là khi nào và bạn lưu bằng cách nào?

## 5. Opening — Lời mở đầu

> Mình đang thử ba cách thiết kế khác nhau, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to những gì bạn đang nghĩ. Mình sẽ cố gắng không hướng dẫn.

## 6. Outcome Task — Nhiệm vụ dùng chung

> Bạn vừa hoàn thành bài SQL JOINs và có một số đoạn đánh dấu, câu hỏi và phần chưa hiểu. Hãy dùng từng phương án để tạo một bản ghi chú mà bạn cảm thấy có thể tin tưởng và sử dụng khi xem lại bài sau.

Không chỉ nút, không giải thích mechanism và không nói option nào tốt hơn.

## 7. Rescue Prompts — Câu hỗ trợ trung lập

Chỉ dùng khi cần:

> Bạn cứ nói to suy nghĩ của mình nhé.

> Bạn sẽ làm gì tiếp theo?

> Theo bạn, nó nên hoạt động như thế nào?

> Bạn đang mong đợi điều gì xảy ra ở bước này?

## 8. Observation Focus — Trọng tâm quan sát

Với mỗi option, ghi:

- hành động đầu tiên;
- chỗ dừng, do dự hoặc hiểu sai;
- source/timestamp/confidence được đọc hay bỏ qua;
- cách edit, skip, reject, reset hoặc undo;
- lúc tester cần facilitator trợ giúp;
- hành vi trái với kỳ vọng của nhóm.

Ghi hành vi trước, diễn giải sau. Ví dụ đúng:

> T01 đọc hai mục đầu, không đọc nhãn độ tin cậy thấp và bấm Lưu.

Không ghi diễn giải như một observation:

> T01 không quan tâm độ chính xác.

## 9. Comparison Questions — Câu hỏi sau A/B/C

Hỏi đủ năm câu:

1. Trong tình huống này, bạn chọn A, B hay C? Vì sao?
2. Bạn muốn tự làm phần nào và giao cho AI phần nào?
3. Điều gì ở phương án đã chọn khiến bạn vẫn chưa thoải mái?
4. Bạn chấp nhận đánh đổi điều gì để có lợi ích của phương án này?
5. Trước khi lưu, bạn cần xem thông tin gì để tin bản ghi chú này?

## 10. Session Capture — Mẫu ghi nhanh

Sao chép khối sau cho T01, T02 và T03:

```text
TESTER:
Relevant context:
Test order:

OPTION A
- First action:
- Hesitation/misunderstanding:
- Evidence read/ignored:
- Control/recovery:
- Help needed:

OPTION B
- First action:
- Hesitation/misunderstanding:
- Evidence read/ignored:
- Control/recovery:
- Help needed:

OPTION C
- First action:
- Hesitation/misunderstanding:
- Evidence read/ignored:
- Control/recovery:
- Help needed:

Chosen option:
Reason:
Trade-off:
Remaining concern:
Exact quote, if captured accurately:
Evidence against team expectation:
```

Sau ba phiên, đưa ba khối ghi chép này vào `prototype-feedback-note.md` và `group-feedback-synthesis.md`. Không dùng AI tạo observation hoặc quote không tồn tại.
