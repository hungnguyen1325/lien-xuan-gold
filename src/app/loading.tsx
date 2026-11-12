import { ViewTransition } from "react";
import Image from "next/image";
import { business } from "@/data/business";

export default function Loading() {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <main className="flex min-h-screen items-center justify-center bg-background p-6 text-center text-foreground">
        <div role="status" aria-live="polite">
          <Image
            src="/branding/lien-xuan-badge.svg"
            alt=""
            width={72}
            height={72}
            className="mx-auto"
          />
          <p className="mt-4 text-lg font-bold tracking-wide text-accent">
            LIÊN XUÂN
          </p>
          <p className="mt-1 text-xs italic text-muted">{business.slogan}</p>
          <div className="loading-spinner mx-auto mt-6" aria-hidden="true" />
          <p className="mt-3 text-sm text-muted">Đang tải trang…</p>
        </div>
      </main>
    </ViewTransition>
  );
}
