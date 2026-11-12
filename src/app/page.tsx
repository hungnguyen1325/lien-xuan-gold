import { Fragment, ViewTransition } from "react";
import Header from "@/components/header";
import { business, branches } from "@/data/business";
import { goldPrices } from "@/data/prices";
import PriceBoardClock from "./price-board-clock";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Bảng giá vàng | Vàng Bạc Liên Xuân",
  description:
    "Bảng giá mua vào, bán ra vàng Liên Xuân 999.9 và vàng trang sức. Thông tin hệ thống cửa hàng Vàng Bạc Liên Xuân tại Phú Thọ.",
  path: "/",
});

export default function Home() {
  return (
    <main
      className="price-board flex w-full flex-col bg-background text-foreground"
      aria-labelledby="price-board-heading"
    >
      <Header priceBoard>
        <PriceBoardClock />
      </Header>
      <ViewTransition enter="page-enter" exit="page-exit" default="none">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1">
            <table className="h-full w-full table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-[36%] sm:w-[42%]" />
                <col className="w-[18%] sm:w-[12%]" />
                <col className="w-[23%]" />
                <col className="w-[23%]" />
              </colgroup>
              <thead className="h-[clamp(28px,5vh,72px)] text-center text-[clamp(8px,min(1.2vw,1.7vh),24px)] font-black uppercase tracking-wide text-accent">
                <tr className="border-b-2 border-border/30">
                  <th scope="col" className="border-r border-border/20 px-2">
                    SẢN PHẨM / QUY CHUẨN
                  </th>
                  <th scope="col" className="border-r border-border/20 px-1">
                    ĐƠN VỊ
                  </th>
                  <th scope="col" className="border-r border-border/20 px-1">
                    GIÁ MUA VÀO
                  </th>
                  <th scope="col" className="px-1">
                    GIÁ BÁN RA
                  </th>
                </tr>
              </thead>
              <tbody>
                {goldPrices.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-12 text-center text-sm leading-relaxed text-muted sm:text-lg"
                    >
                      Vui lòng liên hệ cửa hàng để biết bảng giá hiện tại.
                    </td>
                  </tr>
                )}
                {goldPrices.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border/15 transition-colors hover:bg-accent/5"
                  >
                    <th
                      scope="row"
                      className="border-r border-border/20 px-2 py-[clamp(2px,.4vh,10px)] text-left sm:px-4"
                    >
                      <p className="text-[clamp(9px,min(2.7vw,1.8vh),26px)] font-bold uppercase leading-tight tracking-wide sm:text-[clamp(10px,min(1.4vw,1.8vh),26px)]">
                        {item.name}
                      </p>
                      {item.specs && (
                        <p className="price-board-specs mt-0.5 line-clamp-1 text-[clamp(8px,min(1vw,1.35vh),18px)] font-normal leading-tight text-muted sm:line-clamp-none">
                          {item.specs}
                        </p>
                      )}
                    </th>
                    <td className="border-r border-border/20 px-0.5 text-center text-[clamp(8px,min(1vw,1.5vh),22px)] font-bold leading-tight whitespace-nowrap text-muted">
                      <span className="opacity-75">VNĐ/</span>
                      <span className="font-extrabold text-foreground">
                        {item.unit}
                      </span>
                    </td>
                    <td className="border-r border-border/20 px-2 text-right font-mono text-[clamp(9px,min(2.9vw,3.6vh),64px)] font-black leading-tight whitespace-nowrap tabular-nums sm:px-4 lg:px-6">
                      {item.buyPrice}
                    </td>
                    <td className="px-2 text-right font-mono text-[clamp(9px,min(2.9vw,3.6vh),64px)] font-black leading-tight whitespace-nowrap text-price tabular-nums sm:px-4 lg:px-6">
                      {item.sellPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside
            className="shrink-0 border-t border-border/30 px-3 py-1.5 text-[clamp(8px,1.3vh,18px)] leading-snug text-muted sm:px-5"
            aria-label="Ghi chú bảng giá"
          >
            <p>
              Giá đã bao gồm VAT.{" "}
              <strong className="font-medium text-foreground">
                1 Lượng = 1 Cây = 10 Chỉ = 37,5 gram · 1 Chỉ = 3,75 gram.
              </strong>
            </p>
            <p>
              Áp dụng đồng bộ tại{" "}
              {branches.map((branch, index) => (
                <Fragment key={branch.id}>
                  {index > 0 && " · "}
                  <strong>{branch.shortName}</strong> (
                  {branch.phones[0].display})
                </Fragment>
              ))}
              .
            </p>
            <p className="italic">
              Thu mua vàng thương hiệu khác theo kết quả kiểm định tuổi vàng
              thực tế tại quầy.
            </p>
          </aside>
          <footer
            className="shrink-0 border-t border-border/30 px-3 py-1.5 pr-20 text-center leading-snug sm:px-5 sm:pr-22"
            aria-label="Thông tin doanh nghiệp"
          >
            <p className="text-[clamp(8px,1.4vh,20px)] font-bold uppercase tracking-wide text-accent">
              {business.name}
            </p>
            <p className="text-[clamp(7px,1.1vh,16px)] text-muted">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {business.address}
              </a>
            </p>
            <p className="text-[clamp(7px,1.1vh,16px)] text-muted">
              MST: {business.taxCode} · Giờ mở cửa: {business.openHours}
            </p>
          </footer>
        </div>
      </ViewTransition>
    </main>
  );
}
