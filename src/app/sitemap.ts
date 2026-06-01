import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.altoufeer.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/business-setup`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/visa-services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tax-services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
