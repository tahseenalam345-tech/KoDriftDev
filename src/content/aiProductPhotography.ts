export interface AiProductPhotoExample {
  id: string;
  title: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
  altBefore: string;
  altAfter: string;
  status: "placeholder" | "ready";
}

export const aiProductPhotoExamples: AiProductPhotoExample[] = [
  {
    id: "product-image-transformation",
    title: "Product image transformation",
    category: "AI product photography",
    altBefore: "Original product photo placeholder",
    altAfter: "AI-enhanced commercial product image placeholder",
    status: "placeholder",
  },
];
