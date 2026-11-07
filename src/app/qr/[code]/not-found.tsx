import Link from "next/link";
import Header from "@/components/header";
import "./qr.css";

export default function QrNotFound() {
  return (
    <main className="qr-page" lang="vi">
      <Header />
      <div className="qr-emptyPage">
        <div className="qr-emptyCard">
          <p className="qr-eyebrow">Vàng bạc Liên Xuân</p>
          <h1>Không tìm thấy sản phẩm</h1>
          <p className="qr-emptyText">
            Mã trên đường dẫn chưa có trong hệ thống. Vui lòng quét lại QR hoặc
            liên hệ Vàng bạc Liên Xuân để được hỗ trợ.
          </p>
          <Link href="/" className="qr-homeLink">
            Về trang chủ <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
