export type Category = "Skincare" | "Haircare" | "Fragrance" | "Makeup";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  images: string[];
  short: string;
  description: string;
  ingredients: string[];
  benefits: string[];
};

export const products: Product[] = [
  {
    id: "luminous-serum",
    name: "Luminous Glow Serum",
    category: "Skincare",
    price: 84,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80"
    ],
    short: "Featherlight serum infused with botanical actives.",
    description: "Our signature serum delivers a dewy, lit-from-within glow. A featherweight formula of niacinamide, hyaluronic acid and rose stem cells smooths, hydrates and gently illuminates.",
    ingredients: ["Niacinamide 5%", "Hyaluronic Acid", "Rose Stem Cells", "Vitamin E", "Squalane"],
    benefits: ["Visible radiance in 7 days", "Plumps & hydrates deeply", "Refines uneven tone", "Suits all skin types"],
  },
  {
    id: "velvet-cream",
    name: "Velvet Hydration Cream",
    category: "Skincare",
    price: 96,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80"
    ],
    short: "A cloud-like moisturizer that melts into skin.",
    description: "An indulgent, whipped cream that drenches skin in 72-hour hydration. Ceramides and peptides restore the moisture barrier while bakuchiol smooths lines.",
    ingredients: ["Ceramide Complex", "Bakuchiol", "Peptides", "Shea Butter", "Centella Asiatica"],
    benefits: ["72-hour deep hydration", "Strengthens skin barrier", "Softens fine lines", "Cruelty-free formula"],
  },
  {
    id: "dew-essence",
    name: "Morning Dew Essence",
    category: "Skincare",
    price: 68,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80"
    ],
    short: "A watery essence that preps skin for radiance.",
    description: "A lightweight, fast-absorbing essence layered with fermented botanicals and polyglutamic acid. Floods skin with hydration and amplifies every step that follows.",
    ingredients: ["Fermented Rice", "Polyglutamic Acid", "Green Tea", "Allantoin", "Hyaluronic Acid"],
    benefits: ["Instant plumping", "Smooths texture", "Boosts absorption", "Refreshing finish"],
  },
  {
    id: "tinted-glow-balm",
    name: "Tinted Glow Balm",
    category: "Makeup",
    price: 42,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80"
    ],
    short: "A sheer, hydrating balm that leaves a glass-like finish.",
    description: "A melting balm that treats lips with deep hydration while delivering a soft, universally flattering tint. Infused with squalane and jojoba oil for all-day comfort.",
    ingredients: ["Squalane", "Jojoba Oil", "Shea Butter", "Vitamin E", "Rose Extract"],
    benefits: ["Intense hydration", "Non-sticky formula", "Buildable sheer color", "Glass-like shine"],
  },
  {
    id: "signature-perfume",
    name: "Signature Perfume Mist",
    category: "Fragrance",
    price: 110,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80",
      "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80"
    ],
    short: "An elegant, lingering scent wrapped in floral and woody notes.",
    description: "A beautifully balanced mist that blends top notes of bergamot and jasmine with a warm, grounding base of vanilla and sandalwood. Perfect for all-day wear.",
    ingredients: ["Jasmine Extract", "Sandalwood Oil", "Bergamot", "Vanilla Bean", "Musk"],
    benefits: ["Long-lasting scent", "Alcohol-free options available", "Elegant and subtle", "Cruelty-free"],
  },
  {
    id: "botanical-hair-elixir",
    name: "Botanical Hair Elixir",
    category: "Haircare",
    price: 54,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=900&q=80",
      "https://images.unsplash.com/photo-1585238342028-4b3c7c7f0a7b?w=900&q=80",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80",
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=900&q=80"
    ],
    short: "A restorative oil that smooths and strengthens strands.",
    description: "A lightweight, silicone-free hair oil that absorbs instantly to tame frizz and add luminous shine. Enriched with argan and camellia oils to nourish from root to tip.",
    ingredients: ["Argan Oil", "Camellia Oil", "Squalane", "Vitamin E", "Rosemary Extract"],
    benefits: ["Instantly smooths frizz", "Adds mirror-like shine", "Silicone-free formula", "Protects against heat"],
  }
  ,

  {
    id: "purifying-clay-mask",
    name: "Purifying Clay Mask",
    category: "Skincare",
    price: 45,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80"
    ],
    short: "A deeply cleansing clay mask that refines pores.",
    description: "Draw out impurities and refine pores with this mineral-rich clay mask. Infused with soothing botanicals to ensure skin remains balanced and hydrated.",
    ingredients: ["Kaolin Clay", "Bentonite", "Green Tea", "Aloe Vera", "Chamomile"],
    benefits: ["Minimizes pores", "Draws out impurities", "Reduces excess oil", "Soothes redness"],
  },
  {
    id: "radiance-eye-cream",
    name: "Radiance Eye Cream",
    category: "Skincare",
    price: 62,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A brightening eye cream that reduces dark circles.",
    description: "Awaken tired eyes with our Radiance Eye Cream. Formulated with caffeine and vitamin C to visibly brighten, depuff, and smooth fine lines.",
    ingredients: ["Vitamin C", "Caffeine", "Peptides", "Hyaluronic Acid", "Squalane"],
    benefits: ["Brightens dark circles", "Reduces puffiness", "Smooths fine lines", "Hydrates deeply"],
  },
  {
    id: "restorative-night-oil",
    name: "Restorative Night Oil",
    category: "Skincare",
    price: 110,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A luxurious facial oil that regenerates skin overnight.",
    description: "Wake up to renewed, glowing skin. This potent blend of botanical oils works overnight to repair the skin barrier and lock in essential moisture.",
    ingredients: ["Rosehip Oil", "Jojoba Oil", "Sea Buckthorn", "Evening Primrose", "Vitamin E"],
    benefits: ["Repairs skin barrier", "Locks in moisture", "Boosts elasticity", "Enhances glow"],
  },
  {
    id: "silk-finish-foundation",
    name: "Silk Finish Foundation",
    category: "Makeup",
    price: 55,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A weightless foundation with a natural, skin-like finish.",
    description: "Achieve a flawless, radiant complexion with our Silk Finish Foundation. The breathable, buildable formula blurs imperfections while nourishing the skin.",
    ingredients: ["Hyaluronic Acid", "Squalane", "Aloe Vera", "Vitamin E", "Niacinamide"],
    benefits: ["Medium buildable coverage", "Natural radiant finish", "Hydrates all day", "Non-comedogenic"],
  },
  {
    id: "illuminating-liquid-blush",
    name: "Illuminating Liquid Blush",
    category: "Makeup",
    price: 38,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A dewy, blendable liquid blush for a natural flush.",
    description: "Add a healthy, luminous pop of color to your cheeks. Our liquid blush blends effortlessly into the skin for a seamless, long-lasting glow.",
    ingredients: ["Jojoba Oil", "Shea Butter", "Vitamin E", "Rose Extract", "Squalane"],
    benefits: ["Dewy finish", "Highly blendable", "Long-lasting color", "Hydrating formula"],
  },
  {
    id: "volumizing-mascara",
    name: "Volumizing Mascara",
    category: "Makeup",
    price: 28,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=900&q=80",
      "https://images.unsplash.com/photo-1585238342028-4b3c7c7f0a7b?w=900&q=80"
    ],
    short: "An ultra-black mascara for dramatic volume and length.",
    description: "Instantly lift, lengthen, and volumize lashes with our flake-free mascara. The specialized brush coats every lash from root to tip for a wide-eyed look.",
    ingredients: ["Carnauba Wax", "Beeswax", "Panthenol", "Vitamin E", "Castor Oil"],
    benefits: ["Dramatic volume", "Flake-free", "Smudge-proof", "Nourishes lashes"],
  },
  {
    id: "velvet-matte-lipstick",
    name: "Velvet Matte Lipstick",
    category: "Makeup",
    price: 34,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A highly pigmented matte lipstick that doesn't dry out lips.",
    description: "Experience rich, velvety color in a single swipe. Our matte lipstick provides intense pigment while remaining incredibly comfortable and hydrating.",
    ingredients: ["Shea Butter", "Jojoba Oil", "Vitamin E", "Avocado Oil", "Candelilla Wax"],
    benefits: ["Intense pigment", "Comfortable matte", "Long-wearing", "Hydrating"],
  },
  {
    id: "precision-brow-pencil",
    name: "Precision Brow Pencil",
    category: "Makeup",
    price: 26,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "An ultra-fine pencil for perfectly defined and filled brows.",
    description: "Create hair-like strokes with precision. Our brow pencil features an ultra-fine tip for natural-looking definition and a built-in spoolie for perfect blending.",
    ingredients: ["Hydrogenated Soybean Oil", "Vitamin E", "Carnauba Wax", "Castor Oil", "Squalane"],
    benefits: ["Ultra-fine tip", "Natural finish", "Smudge-proof", "Built-in spoolie"],
  },
  {
    id: "midnight-rose-edp",
    name: "Midnight Rose Eau de Parfum",
    category: "Fragrance",
    price: 135,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80",
      "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80"
    ],
    short: "A sultry, intoxicating blend of dark rose and warm amber.",
    description: "Embrace the evening with Midnight Rose. This captivating fragrance combines deep floral notes of Bulgarian rose with a sensual base of amber and patchouli.",
    ingredients: ["Bulgarian Rose", "Amber", "Patchouli", "Bergamot", "Musk"],
    benefits: ["Long-lasting EDP", "Sensual & warm", "Premium glass bottle", "Cruelty-free"],
  },
  {
    id: "vanilla-wood-solid-perfume",
    name: "Vanilla Wood Solid Perfume",
    category: "Fragrance",
    price: 48,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A warm, comforting scent in a travel-friendly solid form.",
    description: "Melt this solid perfume into your pulse points for an intimate fragrance experience. Notes of creamy vanilla bean meld perfectly with rich sandalwood.",
    ingredients: ["Beeswax", "Jojoba Oil", "Vanilla Extract", "Sandalwood Essential Oil", "Shea Butter"],
    benefits: ["Travel-friendly", "Alcohol-free", "Intimate scent", "Moisturizing base"],
  },
  {
    id: "citrus-bloom-mist",
    name: "Citrus Bloom Body Mist",
    category: "Fragrance",
    price: 36,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80"
    ],
    short: "An uplifting, refreshing mist of neroli and sweet orange.",
    description: "Spritz on a burst of sunshine. Citrus Bloom is a bright, energizing mist perfect for a midday refresh or an all-over post-shower glow.",
    ingredients: ["Sweet Orange Oil", "Neroli Extract", "Aloe Vera", "Glycerin", "Grapefruit Seed Extract"],
    benefits: ["Energizing scent", "Hydrating formula", "Lightweight mist", "Perfect for layering"],
  },
  {
    id: "ocean-breeze-rollerball",
    name: "Ocean Breeze Rollerball",
    category: "Fragrance",
    price: 32,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
    ],
    short: "A crisp, aquatic fragrance in a convenient rollerball.",
    description: "Carry the essence of the sea wherever you go. Crisp sea salt notes blend with fresh aquatic florals for a clean, universally appealing scent.",
    ingredients: ["Fractionated Coconut Oil", "Sea Salt Extract", "Water Lily", "Bergamot", "White Musk"],
    benefits: ["Easy application", "Clean aquatic scent", "Travel-friendly", "Alcohol-free"],
  },
  {
    id: "amber-spice-oil",
    name: "Amber Spice Fragrance Oil",
    category: "Fragrance",
    price: 55,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80"
    ],
    short: "A concentrated, rich oil perfume with notes of warm spices.",
    description: "A decadent, highly concentrated fragrance oil. A single drop delivers hours of complex, spicy, and warm amber notes that adapt uniquely to your skin.",
    ingredients: ["Jojoba Oil", "Amber Resin", "Cinnamon Bark", "Cardamom", "Vanilla Extract"],
    benefits: ["Highly concentrated", "Adapts to body chemistry", "Long-wearing", "Nourishing oil base"],
  },
  {
    id: "purifying-charcoal-shampoo",
    name: "Purifying Charcoal Shampoo",
    category: "Haircare",
    price: 36,
    image: "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg",
    images: [
      "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg",
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
      "https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg",
      "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg"
    ],
    short: "A deeply cleansing shampoo to remove buildup.",
    description: "Reset your scalp with our detoxifying charcoal shampoo. It removes impurities and excess oil without stripping your hair of its natural moisture.",
    ingredients: ["Activated Charcoal", "Tea Tree Oil", "Aloe Vera", "Eucalyptus Extract", "Biotin"],
    benefits: ["Detoxifies scalp", "Removes product buildup", "Leaves hair light", "Sulfate-free"],
  },
  {
    id: "weightless-shine-conditioner",
    name: "Weightless Shine Conditioner",
    category: "Haircare",
    price: 38,
    image: "https://images.pexels.com/photos/7449889/pexels-photo-7449889.jpeg",
    images: [
      "https://images.pexels.com/photos/7449903/pexels-photo-7449903.jpeg",
      "https://images.pexels.com/photos/7449901/pexels-photo-7449901.jpeg",
      "https://images.pexels.com/photos/7449890/pexels-photo-7449890.jpeg",
      "https://images.pexels.com/photos/7449898/pexels-photo-7449898.jpeg"
    ],
    short: "A light conditioner for brilliant shine and slip.",
    description: "Detangle and add mirror-like shine to your hair without weighing it down. This silicone-free conditioner leaves your locks bouncing with vitality.",
    ingredients: ["Squalane", "Jojoba Oil", "Panthenol", "Green Tea Extract", "Vitamin E"],
    benefits: ["Adds brilliant shine", "Detangles instantly", "Silicone-free", "Weightless hydration"],
  },
  {
    id: "revitalizing-scalp-treatment",
    name: "Revitalizing Scalp Treatment",
    category: "Haircare",
    price: 48,
    image: "https://images.pexels.com/photos/3738096/pexels-photo-3738096.jpeg",
    images: [
      "https://images.pexels.com/photos/3738102/pexels-photo-3738102.jpeg",
      "https://images.pexels.com/photos/3738104/pexels-photo-3738104.jpeg",
      "https://images.pexels.com/photos/3738092/pexels-photo-3738092.jpeg",
      "https://images.pexels.com/photos/3738098/pexels-photo-3738098.jpeg"
    ],
    short: "A soothing weekly treatment for a healthy scalp.",
    description: "Calm irritation and promote healthier hair growth with this balancing scalp treatment. Enriched with botanical oils to soothe and nourish the roots.",
    ingredients: ["Rosemary Oil", "Peppermint", "Aloe Vera", "Tea Tree", "Chamomile"],
    benefits: ["Soothes dry scalp", "Promotes hair growth", "Balances oil production", "Cooling sensation"],
  },
  {
    id: "strengthening-scalp-scrub",
    name: "Strengthening Scalp Scrub",
    category: "Haircare",
    price: 35,
    image: "https://images.pexels.com/photos/8015873/pexels-photo-8015873.jpeg",
    images: [
      "https://images.pexels.com/photos/8015480/pexels-photo-8015480.jpeg",
      "https://images.pexels.com/photos/8015483/pexels-photo-8015483.jpeg",
      "https://images.pexels.com/photos/8015889/pexels-photo-8015889.jpeg",
      "https://images.pexels.com/photos/8015874/pexels-photo-8015874.jpeg"
    ],
    short: "An exfoliating scrub to deeply cleanse and balance the scalp.",
    description: "Detoxify and refresh your scalp with this invigorating scrub. Formulated with sea salt and peppermint to remove buildup and promote healthy hair growth.",
    ingredients: ["Sea Salt", "Peppermint Oil", "Apple Cider Vinegar", "Aloe Vera", "Jojoba Oil"],
    benefits: ["Exfoliates scalp", "Removes product buildup", "Promotes hair growth", "Cooling sensation"],
  },
  {
    id: "nourishing-scalp-serum",
    name: "Nourishing Scalp Serum",
    category: "Haircare",
    price: 42,
    image: "https://images.pexels.com/photos/10825659/pexels-photo-10825659.jpeg",
    images: [
      "https://images.pexels.com/photos/10825662/pexels-photo-10825662.jpeg",
      "https://images.pexels.com/photos/10825663/pexels-photo-10825663.jpeg",
      "https://images.pexels.com/photos/10825664/pexels-photo-10825664.jpeg",
      "https://images.pexels.com/photos/10825660/pexels-photo-10825660.jpeg"
    ],
    short: "A targeted treatment to soothe and balance the scalp.",
    description: "Healthy hair starts at the root. This lightweight serum absorbs quickly to soothe irritation, balance oil production, and promote optimal hair growth.",
    ingredients: ["Tea Tree Oil", "Peppermint Oil", "Niacinamide", "Aloe Vera", "Biotin"],
    benefits: ["Soothes irritation", "Balances oil", "Promotes hair health", "Cooling sensation"],
  }
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
