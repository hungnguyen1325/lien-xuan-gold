import type { MetadataRoute } from "next";
import { websiteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", websiteUrl).href,
  };
}
