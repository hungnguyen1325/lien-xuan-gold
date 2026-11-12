import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { websiteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...products.map(({ code }) => `/qr/${code}`)].map((path) => ({
    url: new URL(path, websiteUrl).href,
  }));
}
