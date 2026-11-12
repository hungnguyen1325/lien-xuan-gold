import type { Metadata } from "next";
import { business } from "@/data/business";

export const websiteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || business.websiteUrl,
);

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, websiteUrl);
  const images = [
    {
      url: new URL("/icon.png", websiteUrl),
      width: 512,
      height: 512,
      alt: business.brandName,
    },
  ];

  return {
    title,
    description,
    metadataBase: websiteUrl,
    applicationName: "Vàng Bạc Liên Xuân",
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.brandName,
      locale: "vi_VN",
      type: "website",
      images,
    },
    twitter: { card: "summary", title, description, images },
  };
}
