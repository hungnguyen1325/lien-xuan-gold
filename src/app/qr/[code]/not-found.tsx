import Link from "next/link";
import Header from "@/components/header";

export default function QrNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ViewTransition enter="page-enter" exit="page-exit" default="none">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center px-4 py-20 text-center">
          <div className="w-full rounded-2xl border border-border/20 bg-surface p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
              Vàng bạc Liên Xuân
            </p>
            <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Không tìm thấy sản phẩm
            </h1>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Mã trên đường dẫn chưa có trong hệ thống. Vui lòng quét lại mã QR
              hoặc kiểm tra lại mã sản phẩm.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                <span>Về trang chủ</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </ViewTransition>
    </main>
  );
}
import { ViewTransition } from "react";
