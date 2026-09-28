import React from "react";
import { Metadata } from "next";
import { WorkPageClient } from "@/components/work/WorkPageClient";
import { projects } from "@/content/projects";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Work & Case Studies",
  description:
    "Platforms and digital systems built for real operations: luxury OMS e-commerce, restaurant food ordering, pharmacy billing SaaS, and CleanTech profitability systems.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkPageClient projects={projects} />;
}
