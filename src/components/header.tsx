import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";

export default function Header({
  priceBoard = false,
  children,
}: {
  priceBoard?: boolean;
  children?: ReactNode;
}) {
  return (
    <header
      className={`w-full shrink-0 border-b-2 border-border/40 bg-background text-foreground ${priceBoard ? "relative z-10" : "sticky top-0 z-30"}`}
    >
      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 px-3 py-2 ${priceBoard ? "sm:px-5 xl:grid-cols-[1fr_auto_1fr] xl:gap-x-5" : "mx-auto sm:px-6 lg:max-w-5xl lg:px-8"}`}
      >
        <Link
          href="/"
          aria-label="Về trang chủ Vàng Bạc Đá Quý Liên Xuân"
          className={`col-start-1 row-start-1 flex min-w-0 w-fit items-center space-x-2 sm:space-x-3 ${priceBoard ? "" : "col-span-2 justify-self-center sm:col-span-1 sm:justify-self-start"}`}
        >
          <Image
            src="/branding/lien-xuan-badge.svg"
            alt="Huy hiệu Vàng Bạc Đá Quý Liên Xuân"
            width={64}
            height={64}
            preload
            className="h-[clamp(28px,9vw,40px)] w-auto shrink-0 object-contain sm:h-[clamp(32px,6vh,80px)]"
          />
          <div>
            <span className="block text-[clamp(6px,1.7vw,8px)] font-bold whitespace-nowrap uppercase tracking-wide text-accent sm:text-[clamp(8px,1.2vh,18px)] sm:tracking-[0.15em]">
              DOANH NGHIỆP VÀNG BẠC ĐÁ QUÝ
            </span>
            <span className="block text-[clamp(15px,4.5vw,20px)] font-black whitespace-nowrap uppercase leading-tight tracking-wide sm:text-[clamp(17px,2.6vh,40px)]">
              LIÊN XUÂN
            </span>
            <span className="block text-[clamp(7px,1.9vw,9px)] whitespace-nowrap italic text-accent sm:text-[clamp(8px,1.2vh,18px)]">
              {business.slogan}
            </span>
          </div>
        </Link>
        {priceBoard ? (
          <h1
            id="price-board-heading"
            className="col-span-2 col-start-1 row-start-2 text-center text-[clamp(18px,5.5vw,24px)] font-black whitespace-nowrap uppercase leading-tight tracking-wider text-price drop-shadow sm:text-[clamp(20px,3.3vh,56px)] xl:col-span-1 xl:col-start-2 xl:row-start-1"
          >
            BẢNG GIÁ VÀNG
          </h1>
        ) : (
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-lg border border-border/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/10 sm:inline-flex"
          >
            ← Bảng giá vàng
          </Link>
        )}
        {children}
      </div>
    </header>
  );
}
