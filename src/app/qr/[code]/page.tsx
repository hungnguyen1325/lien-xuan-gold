import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import {
  DiamondRingIcon,
  BoutiqueStoreIcon,
  LocationPinIcon,
  TaxCertificateIcon,
} from "@/components/icons";
import { business } from "@/data/business";
import {
  GRAMS_PER_CHI,
  findProductByCode,
  findSupplierById,
  products,
} from "@/data/products";
import ProductGallery from "./product-gallery";
import { pageMetadata } from "@/app/seo";

const numberFormatter = new Intl.NumberFormat("vi-VN", {
  maximumFractionDigits: 4,
});

export async function generateMetadata({ params }: PageProps<"/qr/[code]">) {
  const { code } = await params;
  const product = findProductByCode(code);
  if (!product) notFound();
  return pageMetadata({
    title: `${product.name} (${product.code}) | Vàng Bạc Liên Xuân`,
    description: `Tra cứu ${product.name}, mã ${product.code}, hàm lượng ${product.goldContent}. Thông tin trọng lượng, tiêu chuẩn và đơn vị cung cấp Liên Xuân.`,
    path: `/qr/${product.code}`,
  });
}

export function generateStaticParams() {
  return products.map(({ code }) => ({ code }));
}

export default async function QrPage({ params }: PageProps<"/qr/[code]">) {
  const { code } = await params;
  const product = findProductByCode(code);
  if (!product) notFound();

  const supplier = findSupplierById(product.supplierID);
  const goldWeight = Number(product.goldWeight);
  const weight = numberFormatter.format(goldWeight);
  const grams = numberFormatter.format(goldWeight * GRAMS_PER_CHI);
  const specifications = [
    { label: "Hàm lượng vàng", value: product.goldContent, highlighted: true },
    {
      label: "Tổng trọng lượng",
      value: `${numberFormatter.format(Number(product.totalWeight))} chỉ`,
    },
    { label: "Trọng lượng đá", value: `${product.stoneWeight} chỉ` },
    { label: "Ký hiệu nhận diện", value: supplier.symbol, highlighted: true },
    { label: "Tiêu chuẩn áp dụng", value: supplier.standard },
  ];

  return (
    <main className="qr-page min-h-screen bg-background pb-3 text-foreground">
      <Header />
      <ViewTransition
        key={product.code}
        enter="page-enter"
        exit="page-exit"
        default="none"
      >
        <div className="mx-auto max-w-md px-3 pt-2.5 text-sm leading-snug sm:px-5 lg:max-w-5xl lg:px-6 lg:pt-4">
          <div className="grid gap-2.5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-x-5">
            <div className="min-w-0 lg:row-span-3">
              <ProductGallery productName={product.name} />
            </div>
            <div className="min-w-0 rounded-xl border border-border/20 bg-surface p-3 lg:col-start-2 lg:p-4">
              <h1 className="text-base font-black leading-tight tracking-tight text-foreground lg:text-lg">
                {product.name}
              </h1>
              <p className="mt-0.5 font-medium text-muted">
                Mã sản phẩm:{" "}
                <span className="font-bold text-accent">{product.code}</span>
              </p>

              <div className="mt-2 grid grid-cols-2 gap-3 border-t border-border/20 pt-2 text-muted">
                <p className="flex flex-col gap-1">
                  <span>Trọng lượng vàng</span>
                  <strong className="text-2xl font-black leading-tight whitespace-nowrap text-accent">
                    {weight} chỉ
                  </strong>
                </p>
                <p
                  className="flex flex-col justify-between gap-1 text-right"
                  title="1 chỉ = 3,75 gram"
                >
                  <span>Quy đổi</span>
                  <strong className="font-bold text-accent">
                    {grams} gram
                  </strong>
                </p>
              </div>
            </div>
            <section
              className="min-w-0 rounded-xl border border-border/20 bg-surface px-3 py-2.5 lg:col-start-2 lg:px-4"
              aria-labelledby="specs-heading"
            >
              <div className="flex items-center gap-2 border-b border-border/20 pb-1.5">
                <DiamondRingIcon className="h-5 w-5 shrink-0 text-accent" />
                <h2 id="specs-heading" className="font-bold text-foreground">
                  Thông số sản phẩm
                </h2>
              </div>
              <dl className="divide-y divide-border/20">
                {specifications.map(({ label, value, highlighted }) => (
                  <div
                    key={label}
                    className="flex min-w-0 items-baseline justify-between gap-3 py-2.5"
                  >
                    <dt className="text-muted">{label}</dt>
                    <dd
                      className={`min-w-0 break-words text-right font-bold ${highlighted ? "text-accent" : "text-foreground"}`}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              className="min-w-0 rounded-xl border border-border/20 bg-surface px-3 py-2.5 lg:col-start-2 lg:px-4"
              aria-labelledby="supplier-heading"
            >
              <div className="flex items-center gap-2 border-b border-border/20 pb-1.5">
                <BoutiqueStoreIcon className="h-5 w-5 shrink-0 text-accent" />
                <h2 id="supplier-heading" className="font-bold text-foreground">
                  Đơn vị sản xuất &amp; cung cấp
                </h2>
              </div>
              <div className="mt-1.5 space-y-1 text-foreground/85">
                <p className="font-bold text-accent">{supplier.name}</p>
                <p className="flex items-start gap-1.5">
                  <LocationPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/85 transition-colors hover:text-accent"
                    title="Mở Google Maps chỉ đường"
                  >
                    {supplier.address}
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <TaxCertificateIcon className="h-4 w-4 shrink-0 text-accent" />
                  <span>
                    Mã số thuế:{" "}
                    <strong className="font-bold text-accent">
                      {business.taxCode}
                    </strong>
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </ViewTransition>
    </main>
  );
}
