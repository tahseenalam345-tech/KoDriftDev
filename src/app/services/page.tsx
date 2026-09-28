import React from "react";
import { Metadata } from "next";
import { ServicesPageClient } from "@/components/services/ServicesPageClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Services & Capabilities",
  description:
    "Websites, custom software, mobile apps, AI automation, and practical engineering for modern businesses that need reliable digital operations.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
