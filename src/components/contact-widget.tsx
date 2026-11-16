"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { business, branches } from "@/data/business";
import { LocationPinIcon, SolidPhoneIcon } from "@/components/icons";

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#contact") setIsOpen(true);
    };

    const timer = window.setTimeout(openFromHash, 0);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("contact-open");
    dialog.querySelector<HTMLButtonElement>("button")?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key !== "Tab") return;
      const targets = dialog.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = targets[0];
      const last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.documentElement.classList.remove("contact-open");
      previousFocus?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Liên hệ Vàng Bạc Liên Xuân"
          aria-haspopup="dialog"
          className="group relative flex h-13 w-13 cursor-pointer touch-manipulation items-center justify-center rounded-full border-2 border-accent bg-background text-accent shadow-xl shadow-overlay/50 transition-all duration-200 hover:scale-105 hover:bg-surface-hover active:scale-95 sm:h-14 sm:w-14"
        >
          <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-accent/25 opacity-75" />
          <SolidPhoneIcon className="h-6 w-6 transition-transform group-hover:rotate-12" />
        </button>
      </div>

      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          className="contact-dialog fixed inset-0 z-50 w-full overflow-y-auto bg-overlay/65 p-0 text-foreground backdrop-blur-sm"
        >
          <div
            className="flex min-h-full items-end justify-center p-3 sm:items-center sm:p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <div className="contact-panel w-full max-w-md overflow-hidden rounded-2xl border border-border/30 bg-surface shadow-2xl">
              <div className="flex items-center justify-between border-b border-border/20 bg-background px-4 py-3 sm:px-5 sm:py-3.5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/branding/lien-xuan-badge.svg"
                    alt="Liên Xuân Logo"
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                  />
                  <div>
                    <h2
                      id="contact-title"
                      className="text-sm font-semibold text-accent"
                    >
                      Hệ Thống Vàng Bạc Liên Xuân
                    </h2>
                    <p className="text-[10px] text-muted">{business.slogan}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/70 hover:bg-accent/10 hover:text-foreground cursor-pointer"
                  aria-label="Đóng hộp thoại"
                >
                  ✕
                </button>
              </div>
              <div className="max-h-[75vh] space-y-3 overflow-y-auto p-4 sm:p-5">
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border/25 bg-background p-2.5 transition-all hover:border-accent hover:bg-surface-hover"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm">
                      <Image
                        src="/branding/facebook-logo.svg"
                        alt="Facebook"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted">
                        Fanpage Facebook chính thức
                      </span>
                      <strong className="text-xs font-semibold text-foreground">
                        Vàng Bạc Liên Xuân
                      </strong>
                    </div>
                  </div>

                  <span className="rounded-md border border-border/30 px-2 py-0.5 text-[10px] font-medium text-accent hover:bg-accent/5">
                    Nhắn tin ↗
                  </span>
                </a>
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    className="rounded-xl border border-border/25 bg-background p-3 sm:p-3.5"
                  >
                    <div className="flex items-center justify-between border-b border-border/15 pb-2">
                      <span className="text-xs font-bold text-accent flex items-center gap-1.5">
                        <LocationPinIcon className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{branch.name}</span>
                      </span>
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
                      >
                        <span>Chỉ đường</span>
                        <svg
                          className="h-2.5 w-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="mt-2.5 space-y-1.5">
                      {branch.phones.map((phone) => (
                        <div
                          key={phone.raw}
                          className="flex items-center justify-between rounded-lg bg-background/70 px-2.5 py-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <SolidPhoneIcon className="h-3.5 w-3.5 text-accent" />
                            <span className="font-mono text-xs font-semibold text-foreground">
                              {phone.display}
                            </span>
                          </div>
                          <a
                            href={`tel:${phone.raw}`}
                            className="rounded bg-accent px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground hover:opacity-90 active:scale-95"
                          >
                            Gọi ngay
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-muted">Zalo tư vấn:</span>
                      <a
                        href={`https://zalo.me/${branch.zalo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border/30 bg-background/50 px-2.5 py-0.5 font-medium text-accent hover:bg-background"
                      >
                        <Image
                          src="/branding/zalo-logo.svg"
                          alt="Zalo"
                          width={14}
                          height={14}
                          className="rounded-xs"
                        />
                        <span>Nhắn Zalo ({branch.zaloDisplay})</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
