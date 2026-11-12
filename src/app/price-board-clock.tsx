"use client";

import { useEffect, useState } from "react";
import { priceBoardMeta } from "@/data/prices";

const DAYS_OF_WEEK = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];
const pad = (value: number) => String(value).padStart(2, "0");

export default function PriceBoardClock() {
  const [now, setNow] = useState<Date | null>(null);
  const isLive = priceBoardMeta.mode === "realtime";

  useEffect(() => {
    if (!isLive) return;
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, [isLive]);

  const time = isLive
    ? now
      ? `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
      : "--:--:--"
    : priceBoardMeta.customTime;
  const date =
    isLive && now
      ? `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`
      : priceBoardMeta.customDate;
  const day = now ? DAYS_OF_WEEK[now.getDay()] : "Hôm nay";
  return (
    <div className="col-start-2 row-start-1 text-right xl:col-start-3">
      <p className="font-mono text-[clamp(16px,5vw,22px)] font-black leading-tight tracking-tight whitespace-nowrap tabular-nums sm:text-[clamp(18px,3.4vh,56px)]">
        {time}
      </p>
      <p className="text-[clamp(8px,2.2vw,10px)] leading-snug whitespace-nowrap text-muted sm:text-[clamp(8px,1.3vh,18px)]">
        {isLive && (
          <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
        )}
        <span className="hidden sm:inline">{isLive ? day : "Cập nhật"}, </span>
        {date}
      </p>
    </div>
  );
}
