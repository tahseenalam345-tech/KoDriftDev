import { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function constructMetadata({
  title,
  description,
  path = "",
}: MetadataOptions = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.shortDescription}`;
  const metaDescription = description || siteConfig.description;

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://kodriftdev.com"
    ),
    alternates: {
      canonical: path,
    },
    icons: {
      icon: "/images/logo/logo.png",
      shortcut: "/images/logo/logo.png",
      apple: "/images/logo/logo.png",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}
