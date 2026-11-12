import type { Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import ContactWidget from "@/components/contact-widget";
import { pageMetadata } from "./seo";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata = pageMetadata({
  title: "Doanh Nghiệp Vàng Bạc Đá Quý Liên Xuân | Giữ uy tín hơn giữ vàng",
  description:
    "Doanh nghiệp tư nhân vàng bạc Liên Xuân chuyên kinh doanh vàng ép vỉ 999.9, vàng trang sức cao cấp. Địa chỉ Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ.",
  path: "/",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <ContactWidget />
      </body>
    </html>
  );
}
