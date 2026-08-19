# Prototype Link — A/B/C

## Mở prototype trên máy

### Chạy bằng PyCharm

1. Mở toàn bộ repository bằng PyCharm.
2. Trong cửa sổ `Project`, mở thư mục `prototype`.
3. Nhấp phải `index.html` → `Open in Browser` → chọn Chrome/Edge/Firefox.
4. Hoặc mở `index.html`, sau đó chọn `View` → `Open in Browser`.
5. PyCharm sẽ dùng web server tích hợp, thường chạy ở cổng `63342`; không cần cài VS Code hoặc Live Server.

Khi lưu HTML/CSS/JavaScript, PyCharm có thể tự tải lại trang. Nếu chưa tự tải lại, nhấn `Ctrl+F5` trong trình duyệt.

Từ màn hình **Bối cảnh dùng chung**, người thử lần lượt vào A/B/C và dùng nút **Quay lại chọn phương án** hoặc **Làm lại từ đầu** để trở về trạng thái đầu.

### Cách dự phòng bằng Python

Mở Terminal trong PyCharm tại thư mục repository và chạy:

```powershell
python -m http.server 5500
```

Sau đó mở:

```text
http://localhost:5500/prototype/
```

## GitHub Pages Deployment — Cách xuất bản

Repository đã có workflow `.github/workflows/deploy-pages.yml` để deploy riêng thư mục `prototype/`.

Trên GitHub, thực hiện một lần:

1. Mở `Settings` → `Pages`.
2. Tại `Build and deployment`, đặt `Source` thành `GitHub Actions`.
3. Mở tab `Actions`, chọn workflow `Deploy prototype to GitHub Pages`.
4. Chọn `Run workflow` nếu workflow chưa tự chạy.
5. Khi job hoàn tất, mở URL trong phần deployment.

**Public prototype URL — đã xác minh HTTP 200 ngày 19/08/2026:**

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
