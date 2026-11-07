import React from "react";
import Image from "next/image";

export default function Header({ className = "" }: { className?: string }) {
  return (
    <header
      className={`relative z-10 w-full border-b-2 border-[#e0b043] bg-[radial-gradient(ellipse_at_65%_50%,#ab0b18_0%,#870208_65%,#660005_100%)] shadow-lg shadow-black/40 ${className}`}
    >
      <div className="mx-auto flex w-full max-w-lg items-center justify-center gap-2.5 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3">
        {/* Logo huy hiệu tròn */}
        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/branding/lien-xuan-badge.svg"
            alt="Huy hiệu Vàng Bạc Đá Quý Liên Xuân"
            width={84}
            height={84}
            priority
            className="h-[62px] w-[62px] object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] sm:h-[78px] sm:w-[78px]"
          />
        </div>

        {/* Khối thông tin 3 dòng */}
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center text-center">
          <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-[#f6d058] drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] sm:text-xs">
            DOANH NGHIỆP VÀNG BẠC ĐÁ QUÝ
          </span>
          <span className="my-0.5 whitespace-nowrap text-[25px] font-black uppercase leading-none tracking-wider text-[#ffeb00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:text-3xl md:text-4xl">
            LIÊN XUÂN
          </span>
          <span className="whitespace-nowrap text-[11px] font-semibold text-[#f7d264] drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] sm:text-sm">
            Giữ uy tín hơn giữ vàng
          </span>
        </div>
      </div>
    </header>
  );
}

