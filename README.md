# lien-xuan-gold

Website bảng giá vàng và tra cứu sản phẩm qua mã QR của Vàng Bạc Liên Xuân.

## Chạy dự án

Yêu cầu Node.js 20.9 trở lên.

```sh
npm ci
npm run dev
```

Trang chủ: `http://localhost:3000`. Trang sản phẩm: `/qr/LX0.5`, `/qr/LX1`, …

## Cấu trúc mã nguồn

```text
src/
  app/
    page.tsx                 # Toàn bộ bảng giá trang chủ
    price-board-clock.tsx    # Đồng hồ chạy trên trình duyệt
    layout.tsx               # Font, metadata, liên hệ toàn trang
    loading.tsx              # Trạng thái chờ khi tải trang
    seo.ts                   # Metadata chung và URL canonical
    robots.ts
    sitemap.ts
    globals.css
    qr/[code]/
      page.tsx               # Tiêu đề, trọng lượng, thông số, nhà cung cấp
      product-gallery.tsx    # Ảnh và điều khiển gallery
      not-found.tsx
  components/
    contact-widget.tsx       # Nút liên hệ và toàn bộ hộp thoại
    header.tsx
    icons.tsx
  data/
    business.ts              # Doanh nghiệp và các cơ sở
    prices.ts                # Bảng giá và cấu hình đồng hồ
    products.ts              # Sản phẩm và nhà cung cấp
```

Giao diện riêng của màn hình nằm ngay trong file trang. Các hàm nhỏ chỉ dùng tại một nơi nằm cùng file; không tách thành thư viện riêng. Ảnh và logo nằm trong `public/`.

## Màu giao diện

Chỉnh bảng màu tại `:root` trong `src/app/globals.css`, theo ba kênh RGB (ví dụ `--background: 69, 4, 13`). `tailwind.config.ts` chỉ ánh xạ tên màu sang biến CSS. Các trang dùng chung màu của bảng giá qua class Tailwind:

- `background`, `surface`, `surface-hover`: nền trang, thẻ nội dung và trạng thái hover.
- `foreground`, `muted`: chữ chính và chữ phụ.
- `accent`, `accent-foreground`: vàng thương hiệu và chữ trên nút nền vàng.
- `price`: màu giá bán và tiêu đề bảng giá.
- `border`, `success`, `overlay`: đường viền, trạng thái trực tiếp và nền phủ hộp thoại.

Các biến `--metal-*` dành riêng cho minh họa thỏi vàng. Màu không được khai báo trực tiếp trong file TSX.

## Tải trang và tương thích trình duyệt

Tailwind 3.4 và Autoprefixer tạo CSS không phụ thuộc cascade layers, `color-mix()` hay `@property`. Browserslist được đặt cho Chrome/Edge 80+, Firefox 78+ và Safari 13.1/iOS 13.4+; đây là mục tiêu build, chưa thay thế kiểm tra trên máy thật.

Chiều cao trang có fallback `vh`; khung ảnh dùng padding để giữ tỷ lệ trên máy chưa có `aspect-ratio`. Hộp liên hệ dùng overlay có quản lý focus và phím Escape, không phụ thuộc thẻ `dialog`.

React ViewTransition tạo hiệu ứng chuyển trang trên trình duyệt hỗ trợ. Máy cũ điều hướng bình thường. `loading.tsx` chỉ hiển thị khi trang thực sự đang chờ tải; không chèn thời gian chờ giả. Gallery có trạng thái tải/lỗi ảnh, hộp liên hệ có hiệu ứng mở. Các hiệu ứng tôn trọng `prefers-reduced-motion`; thời gian nằm trong `--motion-*` tại CSS chung.

## Metadata

Mỗi mã QR có tiêu đề và mô tả riêng, kèm Open Graph/Twitter. Icon dùng quy ước file của Next.js trong `src/app/`, tránh khai báo trùng.

Tên miền chính thức là `https://lx.futurix.vn`, cấu hình tại `src/data/business.ts`. Canonical, Open Graph/Twitter, robots và sitemap dùng chung URL này. Có thể ghi đè bằng `NEXT_PUBLIC_SITE_URL` khi chuyển tên miền và build lại.

## Cập nhật dữ liệu

Bảng giá mua/bán của cửa hàng được chỉnh tại `src/data/prices.ts`. Danh sách `goldPrices` hiện để trống, trang chủ hiển thị thông báo chưa có dữ liệu. Trang QR chỉ hiển thị trọng lượng và thông tin sản phẩm, không có giá niêm yết.

Thông tin doanh nghiệp ở chân bảng giá lấy từ `src/data/business.ts`: tên doanh nghiệp, địa chỉ, mã số thuế và giờ mở cửa.

Giữ nguyên mã QR đã phát hành: `LX6` hiện tương ứng sản phẩm 10 chỉ.

## Kiểm tra trước khi bàn giao

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Dùng `npm run format` để định dạng mã nguồn. Sau khi build, dùng `npm start` để chạy bản production.

## Đưa lên server

Với cấu hình hiện tại, ứng dụng cần server chạy được Node.js (tối thiểu 20.9), npm và một tiến trình chạy liên tục. Chưa có database hoặc API bên ngoài cần cấu hình. Hosting chỉ phục vụ file HTML/PHP không chạy được bản build hiện tại.

Cách đơn giản là đưa mã nguồn lên server, gồm `src/`, `public/`, `package.json`, `package-lock.json` và các file cấu hình ở thư mục gốc. Cài đủ dependencies để build, rồi chạy:

```sh
npm ci
npm run build
npm start -- --hostname 127.0.0.1 --port 3000
```

Dùng trình quản lý tiến trình như systemd hoặc PM2 để tự khởi động lại ứng dụng, và cấu hình Nginx chuyển tiếp tên miền tới `127.0.0.1:3000`. Trỏ DNS `lx.futurix.vn` về server và cài HTTPS. Khi đổi tên miền, đặt `NEXT_PUBLIC_SITE_URL` trước bước build.

Nếu đã build trên môi trường cùng hệ điều hành và kiến trúc với server, các phần cần đưa lên để chạy là:

- `.next/` — toàn bộ kết quả build, bao gồm `.next/static/`.
- `public/` — ảnh, logo và tài nguyên công khai.
- `package.json`, `package-lock.json`, `next.config.ts`.

Sau đó chạy `npm ci` trên server để cài dependencies phù hợp và `npm start`. Không copy `node_modules` từ Windows sang Linux; nếu server dùng Linux, nên build ngay trên Linux hoặc trong CI Linux.

Tham khảo: [Deploying Next.js](https://nextjs.org/docs/app/getting-started/deploying), [Self-hosting Next.js](https://nextjs.org/docs/app/guides/self-hosting).
