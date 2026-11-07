import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business, findProductByCode, findSupplierId, products } from "@/types/data";
import { packagingByCode } from "@/types/product-media";
import Header from "@/components/header";
import ProductGallery from "./product-gallery";
import "./qr.css";

export const metadata: Metadata = {
  title: "Thông tin sản phẩm | Vàng bạc Liên Xuân",
  description: "Hình ảnh nhẫn, hai mặt vỉ và thông số sản phẩm vàng ép vỉ Liên Xuân.",
};

export function generateStaticParams() {
  return products.map(({ code }) => ({ code }));
}

export default async function QrPage({ params }: PageProps<"/qr/[code]">) {
  const { code } = await params;
  const normalizedCode = code.trim().toUpperCase();
  if (!products.some((item) => item.code === normalizedCode)) notFound();

  const product = findProductByCode(normalizedCode);
  const supplier = findSupplierId(product.supplierID);
  const packaging = packagingByCode[product.code];
  const grams = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 4 }).format(Number(product.goldWeight) * 3.75);

  return (
    <main className="qr-page" lang="vi">
      <Header />
      <div className="qr-container">
        <article className="qr-hero" aria-labelledby="product-name">
          <div className="qr-intro">
            <p className="qr-eyebrow">Thông tin sản phẩm</p>
            <h1 id="product-name">{product.name}</h1>
            <p className="qr-productCode">Mã sản phẩm <strong>{product.code}</strong></p>
          </div>

          <ProductGallery key={product.code} code={product.code} packaging={packaging} />

          <div className="qr-summary">
            <div className="qr-primarySpecs">
              <div className="qr-goldWeight">
                <p>Trọng lượng vàng</p>
                <strong>{product.goldWeight.replace(".", ",")} <span>chỉ</span></strong>
                <p>{grams} gram</p>
              </div>
              {packaging && <div className="qr-fineness">
                <span>Hàm lượng trên vỉ</span>
                <strong>{packaging.fineness}</strong>
              </div>}
            </div>
            <dl className="qr-metrics">
              <Metric label="Tổng trọng lượng" value={product.totalWeight} />
              <Metric label="Trọng lượng đá" value={product.stoneWeight} />
            </dl>
            <p className="qr-unitNote">1 chỉ = 3,75 gram</p>
          </div>
        </article>

        <div className="qr-detailsGrid" id="product-details">
          <section className="qr-panel" aria-labelledby="details-title">
            <div className="qr-sectionHeading"><h2 id="details-title">Chi tiết sản phẩm</h2></div>
            <dl className="qr-specs">
              <Detail label="Mã sản phẩm" value={product.code} />
              <Detail label="Ký hiệu đơn vị" value={supplier.symbol} />
              <Detail label="Tiêu chuẩn áp dụng" value={supplier.standard} />
            </dl>
          </section>
          <section className="qr-panel" aria-labelledby="supplier-title">
            <div className="qr-sectionHeading"><h2 id="supplier-title">Đơn vị cung cấp</h2></div>
            <p className="qr-supplierName">{supplier.name}</p>
            <p className="qr-address">{supplier.address}</p>
            {supplier.name === business.name && <p className="qr-taxCode">Mã số thuế <strong>{business.taxCode}</strong></p>}
          </section>
        </div>

        <footer className="qr-footer">
          <span className="qr-footerBrand">LIÊN XUÂN</span>
          <p>{business.name}</p>
          {supplier.name !== business.name && <p>MST {business.taxCode} · {business.address}</p>}
        </footer>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="qr-metric"><dt>{label}</dt><dd>{value.replace(".", ",")}<span>chỉ</span></dd></div>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="qr-detailRow"><dt>{label}</dt><dd>{value}</dd></div>;
}
