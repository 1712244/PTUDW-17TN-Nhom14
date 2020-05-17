# Phát triển

## Phụ thuộc

Trước khi clone repo về, hãy install các package sau (nếu chưa có) express-generator, nodemone và livereload.

```
npm install -g express-generator
npm install -g livereload
npm install -g connect-livereload
npm install -g nodemon
```

Sau đó clone về và install những dependencies của chính project.

```
npm install
git clone https://github.com/1712244/PTUDW-17TN-Nhom14.git
cd PTUDW-17TN-Nhom14
npm install
```

## Phát triển

Gọi lệnh

```
npm run watch
```

Lúc này mỗi khi thay đổi file thì nodejs sẽ trigger reload browser và server luôn.

## Quy tắc khi phát triển front-end

- Tạo branch mới, tên trang đang phát triển là tên branch (tuyệt đối không phát triển nhiều trang vào 1 branch).
- Tạo 1 note ở trello, ghi tên mình đang làm.
- Commit, nhớ tên commit và nội dung commit mô tả rõ thay đổi file nào, dành cho trang nào.
- Tạo pull request sau khi phát triển xong 1 giao diện, xử lí conflict nếu có, kêu mọi người vào review.
- Khi xong PR bất kì, các thành viên lập tức rebase trước khi dev tiếp.
