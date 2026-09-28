export interface AiProductPhotoExample {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  altBefore: string;
  altAfter: string;
  status: "placeholder" | "ready";
  tags: string[];
}

export const aiProductPhotoExamples: AiProductPhotoExample[] = [
  {
    id: "gc-chronograph-watch",
    title: "GC Chronograph Watch",
    category: "Luxury Timepiece",
    subtitle: "Casual outdoor photo transformed into a warm golden studio hero render",
    beforeImage: "/images/ai-product-photography/before1.jpg",
    afterImage: "/images/ai-product-photography/after1.png",
    altBefore: "Raw phone camera photo of GC gold chronograph watch on artificial grass",
    altAfter: "AI studio staged commercial shot of GC chronograph watch with golden warm pedestal lighting",
    status: "ready",
    tags: ["Studio Lighting", "Reflections", "Commercial Hero"],
  },
  {
    id: "baisheng-face-gear",
    title: "Baisheng Face Gear",
    category: "Mechanical Timepiece",
    subtitle: "Raw handheld capture turned into precision studio catalog photography",
    beforeImage: "/images/ai-product-photography/before2.jpg",
    afterImage: "/images/ai-product-photography/after2.png",
    altBefore: "Raw photo of Baisheng Ace Gear mechanical watch held in hand",
    altAfter: "Pristine AI-enhanced product shot of Baisheng watch on clean studio gradient background",
    status: "ready",
    tags: ["Dial Enhancement", "Shadow Work", "E-Commerce Ready"],
  },
  {
    id: "rolex-datejust-emerald",
    title: "Rolex Datejust Emerald",
    category: "High Luxury Watch",
    subtitle: "Unstaged grass snapshot rebuilt into flagship advertising imagery",
    beforeImage: "/images/ai-product-photography/before3.jpeg",
    afterImage: "/images/ai-product-photography/after3.webp",
    altBefore: "Unedited phone photo of Rolex Datejust emerald green watch on grass",
    altAfter: "Flagship commercial studio staging of Rolex Datejust with flawless bezel reflection",
    status: "ready",
    tags: ["Color Grading", "Premium Pedestal", "Ad Campaign"],
  },
];
