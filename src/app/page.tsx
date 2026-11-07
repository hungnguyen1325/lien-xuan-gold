import Link from "next/link";
import Header from "@/components/header";
import { products } from "@/types/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#990e22] text-[#fff4df] antialiased">
      <Header />

      <div className="mx-auto max-w-lg px-4 py-8">
        <div className="mb-6 rounded-2xl border border-[#efc68b]/30 bg-[#790d20]/40 p-5 text-center">
          <h2 className="text-xl font-bold text-[#f5cf57]">
            Hệ thống Tra cứu Mã QR Vàng Ép Vỉ
          </h2>
          <p className="mt-2 text-xs text-[#e8bdba]">
            Vui lòng chọn một mã sản phẩm bên dưới để xem giao diện chi tiết:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.code}
              href={`/qr/${p.code}`}
              className="flex flex-col items-center justify-center rounded-xl border border-[#efc68b]/30 bg-[#790d20]/50 p-4 transition-all hover:border-[#f5cf57] hover:bg-[#790d20]/80"
            >
              <span className="text-xs uppercase tracking-wider text-[#e8bdba]">
                Mã {p.code}
              </span>
              <strong className="mt-1 text-base font-bold text-[#f5cf57]">
                {p.goldWeight} chỉ
              </strong>
              <span className="mt-1 text-[11px] text-[#fff4df]/80">
                {p.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
