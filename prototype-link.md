# Prototype Link — A/B/C

## Mở prototype trên máy

Mở file [prototype/index.html](prototype/index.html) bằng trình duyệt. Từ màn hình **Bối cảnh dùng chung**, người thử lần lượt vào A/B/C và dùng nút **Về A/B/C** hoặc **Làm lại từ đầu** để quay lại trạng thái đầu.

Nếu trình duyệt hạn chế JavaScript khi mở file trực tiếp, chạy một local server trong thư mục repository, ví dụ bằng VS Code Live Server, rồi mở `prototype/index.html`.

## GitHub Pages Deployment — Cách xuất bản

Repository đã có workflow `.github/workflows/deploy-pages.yml` để deploy riêng thư mục `prototype/`.

Trên GitHub, thực hiện một lần:

1. Mở `Settings` → `Pages`.
2. Tại `Build and deployment`, đặt `Source` thành `GitHub Actions`.
3. Mở tab `Actions`, chọn workflow `Deploy prototype to GitHub Pages`.
4. Chọn `Run workflow` nếu workflow chưa tự chạy.
5. Khi job hoàn tất, mở URL trong phần deployment.

**Public prototype URL dự kiến:**

```text
https://dtdung04092004.github.io/Track1_Day18_2A202602020_DuongTienDung/
```

Trước khi nộp, mở link trong cửa sổ ẩn danh và kiểm tra:

- không cần đăng nhập hoặc xin quyền truy cập;
- trang Bối cảnh dùng chung và cả A/B/C đều mở được;
- JavaScript và CSS được tải đúng;
- mỗi option có đường reset/quay về A/B/C;
- người thử có thể hoàn thành nhiệm vụ mà không cần người điều phối giải thích giao diện.

> Đường dẫn local chỉ dùng để phát triển. Chỉ thay trạng thái Gate 4 thành PASS sau khi URL công khai đã được mở thành công trong cửa sổ ẩn danh và một người không build tự thao tác được A/B/C.
