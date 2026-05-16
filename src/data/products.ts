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
    id: "im-from-beet-purifying-mask",
    name: "I'm From Beet Purifying Mask",
    category: "Skincare",
    price: 84,
    image: "https://i.pinimg.com/1200x/09/56/5f/09565fa9afc0578590a79832198b5953.jpg",
    images: [
      "https://i.pinimg.com/736x/11/4d/c5/114dc56b9d7e16da568873d0c2f482aa.jpg",
      "https://i.pinimg.com/1200x/7e/1c/55/7e1c55b0acd4f2e15751c451596f206c.jpg",
      "https://i.pinimg.com/1200x/53/1f/68/531f6816d0b555e04976545f1b80f55c.jpg",
      "https://i.pinimg.com/1200x/6b/a4/b1/6ba4b192e1cdc0876291ca733fad8faf.jpg",
    ],
    short: "A nourishing purifying mask infused with beet extract to hydrate, refresh, and revitalize the skin.",
    description: "I'm From Beet Purifying Mask combines antioxidant-rich beet extract with a creamy hydrating texture to deeply cleanse pores while maintaining skin moisture. This gentle wash-off mask helps brighten dull skin, improve softness, and leave the complexion feeling refreshed and healthy.",
    ingredients: [ "Beet Root Extract","Kaolin Clay","Glycerin","Centella Asiatica","Hyaluronic Acid","Panthenol","Vitamin E"],
    benefits: [ "Purifies and refreshes skin","Helps remove excess oil","Hydrates while cleansing","Rich in antioxidants","Improves skin softness","Suitable for sensitive skin"],
  },
  {
    id: "mary-may-cica-soothing-sun-cream",
    name: "Mary May Cica Soothing Sun Cream",
    category: "Skincare",
    price: 96,
    image: "https://images.pexels.com/photos/12851390/pexels-photo-12851390.jpeg",
    images: [
      "https://images.pexels.com/photos/12851391/pexels-photo-12851391.jpeg",
      "https://images.pexels.com/photos/12851389/pexels-photo-12851389.jpeg",
      "https://images.pexels.com/photos/12851386/pexels-photo-12851386.jpeg",
      "https://images.pexels.com/photos/12851387/pexels-photo-12851387.jpeg",
    ],
    short: "A lightweight soothing sunscreen with SPF 50+ that protects sensitive skin while keeping it hydrated.",
    description: "MARY & MAY CICA Soothing Sun Cream provides strong UV protection with a gentle formula designed for sensitive skin. Infused with Centella Asiatica (CICA) and hydrating ingredients, it helps calm irritation, maintain moisture, and leave the skin with a fresh non-greasy finish.",
    ingredients: ["Centella Asiatica Extract","Niacinamide","Hyaluronic Acid","Panthenol","Glycerin","Aloe Vera","Vitamin E"],
    benefits: [  "SPF 50+ UV protection","Soothes sensitive skin","Lightweight non-greasy texture","Hydrates and nourishes skin","No white cast finish","Suitable for daily use"],
  },
  {
    id: "summer-fridays-lip-butter-balm",
    name: "Summer Fridays Lip Butter Balm",
    category: "Skincare",
    price: 68,
    image: "https://i.pinimg.com/736x/62/52/ca/6252cad82f5f044e896ad6c34920ad4c.jpg",
    images: [
      "https://i.pinimg.com/736x/b4/0e/68/b40e683cd08f76fbb750ed1bdb2c29cc.jpg",
      "https://i.pinimg.com/736x/7d/d6/80/7dd680e219374b6239e58240b369b240.jpg",
      "https://i.pinimg.com/736x/8e/86/83/8e86830fb13da79847573e2480e5099f.jpg",
      "https://i.pinimg.com/736x/2f/e2/77/2fe277e2e3c0080c99e70936c39fd5ca.jpg",
    ],
    short: "A nourishing lip butter balm that hydrates, softens, and adds a glossy cherry tint to lips.",
    description: "Summer Fridays Lip Butter Balm delivers intense moisture with a silky smooth texture that leaves lips soft, healthy, and naturally glossy. Infused with hydrating butters and vegan waxes, this balm helps repair dryness while providing a subtle cherry-inspired finish and long-lasting comfort.",
    ingredients: ["Shea Butter","Murumuru Seed Butter","Jojoba Oil","Vegan Waxes","Vitamin E","Coconut Oil","Cherry Extract"],
    benefits: [ "Deeply hydrates lips","Soft glossy finish","Smooth non-sticky texture","Helps repair dry lips","Long-lasting moisture","Perfect for daily wear"],
  },
  {
    id: "velvet-lip-glow-balm",
    name: "Velvet Lip Glow Balm",
    category: "Makeup",
    price: 42,
    image: "https://images.pexels.com/photos/26927317/pexels-photo-26927317.jpeg",
    images: [
      "https://images.pexels.com/photos/26927323/pexels-photo-26927323.jpeg",
      "https://images.pexels.com/photos/26927320/pexels-photo-26927320.jpeg",
      "https://images.pexels.com/photos/26927322/pexels-photo-26927322.jpeg",
      "https://images.pexels.com/photos/26927315/pexels-photo-26927315.jpeg"
    ],
    short: "A silky lip balm that delivers hydration with a soft glossy finish.",
    description: "Velvet Lip Glow Balm melts effortlessly onto the lips, providing deep nourishment and a naturally radiant tint. Infused with botanical oils and moisturizing butter, it keeps lips soft, smooth, and glowing throughout the day without feeling sticky.",
    ingredients: ["Shea Butter","Jojoba Oil","Vitamin E","Rose Extract","Coconut Oil","Beeswax","Hyaluronic Acid"],
    benefits: [ "Deep lip hydration","Smooth glossy finish","Non-sticky formula","Soft natural tint","Lightweight daily wear","Nourishes dry lips"],
  },
  {
    id: "signature-perfume",
    name: "Signature Perfume Mist",
    category: "Fragrance",
    price: 110,
    image: "https://images.pexels.com/photos/27274784/pexels-photo-27274784.jpeg",
    images: [
      "https://images.pexels.com/photos/27274880/pexels-photo-27274880.jpeg",
      "https://images.pexels.com/photos/27274883/pexels-photo-27274883.jpeg",
      "https://images.pexels.com/photos/27274783/pexels-photo-27274783.jpeg",
      "https://images.pexels.com/photos/27274882/pexels-photo-27274882.jpeg"
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
    image: "https://images.pexels.com/photos/31401739/pexels-photo-31401739.jpeg",
    images: [
      "https://images.pexels.com/photos/31401740/pexels-photo-31401740.jpeg",
      "https://images.pexels.com/photos/31401742/pexels-photo-31401742.jpeg",
      "https://images.pexels.com/photos/31401737/pexels-photo-31401737.jpeg",
      "https://images.pexels.com/photos/31401743/pexels-photo-31401743.jpeg",
    ],
    short: "A restorative oil that smooths and strengthens strands.",
    description: "A lightweight, silicone-free hair oil that absorbs instantly to tame frizz and add luminous shine. Enriched with argan and camellia oils to nourish from root to tip.",
    ingredients: ["Argan Oil", "Camellia Oil", "Squalane", "Vitamin E", "Rosemary Extract"],
    benefits: ["Instantly smooths frizz", "Adds mirror-like shine", "Silicone-free formula", "Protects against heat"],
  }
  ,
  {
    id: "aeskin-brightening-serum",
    name: "Aeskin Brightening Serum",
    category: "Skincare",
    price: 62,
    image: "https://i.pinimg.com/1200x/1f/ae/0d/1fae0dc104aba3fd2d3f544b49af4ae4.jpg",
    images: [
      "https://i.pinimg.com/1200x/c8/92/d7/c892d7a6ab23bda3ada38731083aa495.jpg",
      "https://i.pinimg.com/1200x/6a/0a/05/6a0a057ed677615464669284aec29c44.jpg",
      "https://i.pinimg.com/1200x/ce/9d/d0/ce9dd0927101ff3dc15ed6653eec18a9.jpg",
      "https://i.pinimg.com/1200x/5a/df/3b/5adf3b4387489a128d065fa8090449c6.jpg"
    ],
    short: "A lightweight brightening serum that deeply hydrates and enhances natural skin radiance.",
    description: "AESKIN Brightening Facial Serum is formulated with hydrating and glow-boosting ingredients that help improve skin texture and brightness. Its fast-absorbing formula delivers intense moisture while leaving the skin soft, smooth, and refreshed with a healthy luminous finish.",
    ingredients: [ "Hyaluronic Acid","Niacinamide","Vitamin C","Rose Water","Glycerin","Aloe Vera Extract","Vitamin E"],
    benefits: [ "Brightens dull skin","Deep hydration","Lightweight non-sticky texture","Improves skin texture","Boosts natural glow","Suitable for daily use"],
  },
  {
    id: "radiant-essence-sunscreen",
    name: "Radiant Essence Sunscreen",
    category: "Skincare",
    price: 110,
    image: "https://images.pexels.com/photos/16667085/pexels-photo-16667085.jpeg",
    images: [
      "https://images.pexels.com/photos/16667088/pexels-photo-16667088.jpeg",
      "https://images.pexels.com/photos/16667091/pexels-photo-16667091.jpeg",
      "https://images.pexels.com/photos/16667089/pexels-photo-16667089.jpeg",
      "https://images.pexels.com/photos/16667085/pexels-photo-16667085.jpeg"
    ],
    short: "A lightweight SPF sunscreen that protects while keeping skin hydrated.",
    description: "Radiant Essence Sunscreen provides broad-spectrum sun protection with a silky, non-greasy texture that blends seamlessly into the skin. Infused with hydrating skincare ingredients, it shields against harmful UV rays while leaving the complexion soft, fresh, and naturally radiant throughout the day.",
    ingredients: [  "Hyaluronic Acid","Niacinamide","Aloe Vera","Vitamin E","Centella Asiatica","Green Tea Extract","PF Protection Complex"],
    benefits: [  "Broad-spectrum UV protection","Lightweight non-sticky formula","Hydrates and nourishes skin","No white cast finish","Perfect under makeup","Suitable for daily use"
],
  },
  {
    id: "pink-peptide-glow-serum",
    name: "Pink Peptide Glow Serum",
    category: "Skincare",
    price: 75,
    image: "https://i.pinimg.com/736x/d7/4d/00/d74d00e5d76e7b895ca6d8186373c393.jpg",
    images: [
      "https://i.pinimg.com/736x/cb/fd/48/cbfd4845db0fe9396bb7664c0eeabe5e.jpg",
      "https://i.pinimg.com/736x/4e/b5/2a/4eb52a0a085cba62f5a76a3784cc61e9.jpg",
      "https://i.pinimg.com/736x/da/22/5d/da225ddb75ae8fda40445c123b1d6856.jpg",
      "https://i.pinimg.com/736x/4b/83/a8/4b83a82bab9e0bdb864225b262f65e2f.jpg"
    ],
    short: "A hydrating peptide serum that delivers radiant, glass-like skin.",
    description: "Pink Peptide Glow Serum is a lightweight skincare essential infused with powerful peptides and deep hydration boosters to restore softness, smooth texture, and luminous glow. Its silky formula absorbs quickly into the skin, helping achieve a healthy, dewy complexion while supporting long-lasting moisture.",
    ingredients: [ "Peptide Complex","Hyaluronic Acid","Niacinamide","Vitamin B5","Rose Water","Collagen Extract","Aloe Vera"],
    benefits: ["Deep hydration","Boosts skin radiance","Smoothens skin texture","Lightweight fast-absorbing formula","Glass-skin glow finish","Suitable for daily skincare"],
  },
  {
    id: "soft-veil-compact-powder",
    name: "Soft Veil Compact Powder",
    category: "Makeup",
    price: 38,
    image: "https://images.pexels.com/photos/7256135/pexels-photo-7256135.jpeg",
    images: [
      "https://images.pexels.com/photos/7256144/pexels-photo-7256144.jpeg",
      "https://images.pexels.com/photos/7256133/pexels-photo-7256133.jpeg",
      "https://images.pexels.com/photos/7256129/pexels-photo-7256129.jpeg",
      "https://images.pexels.com/photos/7256142/pexels-photo-7256142.jpeg"
    ],
    short: "A lightweight compact powder that delivers a smooth, soft-matte finish.",
    description: "Soft Veil Compact Powder blends seamlessly into the skin to control shine while maintaining a natural, flawless complexion. Its silky lightweight formula minimizes the appearance of pores and keeps makeup fresh throughout the day without feeling heavy or cakey.",
    ingredients: ["Rice Powder","Vitamin E","Jojoba Oil","Silica","Kaolin Clay","Aloe Vera","Squalane"],
    benefits: ["Soft matte finish","Controls excess oil","Blurs pores smoothly","Lightweight breathable formula","Long-lasting wear","Perfect for daily makeup"],
  },
  {
    id: "illuminate-lash-mascara",
    name: "Illuminate Lash Mascara",
    category: "Makeup",
    price: 28,
    image: "https://i1-c.pinimg.com/1200x/a7/44/e2/a744e27744371adbcf50d4bde17cbae3.jpg",
    images: [
      "https://i1-c.pinimg.com/1200x/e2/b8/63/e2b8631f9c0e2a7f740ba1ef96e27111.jpg",
      "https://i.pinimg.com/736x/0b/59/b2/0b59b21a8ab28351f24bf9eb13ffedcd.jpg",
      "https://i.pinimg.com/736x/00/63/27/006327efd50086d3596a571067fad127.jpg",
      "https://i.pinimg.com/736x/8b/c3/eb/8bc3ebd71780556e717d11a9b89885e2.jpg"
    ],
    short: "A lightweight mascara that delivers bold volume and lifted lashes.",
    description: "Illuminate Lash Mascara enhances every lash with intense definition, dramatic volume, and long-lasting curl. Its smooth, clump-free formula glides effortlessly for fuller-looking lashes while keeping them soft and lightweight throughout the day.",
    ingredients: ["Beeswax","Carnauba Wax","Vitamin E","Castor Oil","Panthenol","Jojoba Oil","Black Mineral Pigments"],
    benefits: [ "Adds dramatic volume","Long-lasting curl hold", "Smudge-resistant formula", "Clump-free application", "Lightweight comfortable wear", "Nourishes lashes naturally"],
  },
  {
    id: "rose-velvet-lipstick",
    name: "Rose Velvet Lipstick",
    category: "Makeup",
    price: 34,
    image: "https://images.pexels.com/photos/12606885/pexels-photo-12606885.jpeg",
    images: [
      "https://images.pexels.com/photos/12606888/pexels-photo-12606888.jpeg",
      "https://images.pexels.com/photos/12606870/pexels-photo-12606870.jpeg",
      "https://images.pexels.com/photos/12606886/pexels-photo-12606886.jpeg",
      "https://images.pexels.com/photos/12606887/pexels-photo-12606887.jpeg"
    ],
    short: "A richly pigmented lipstick with a smooth velvet-matte finish.",
    description: "Rose Velvet Lipstick delivers intense color payoff with a creamy, lightweight texture that glides effortlessly onto the lips. Its nourishing formula keeps lips soft and comfortable while providing a sophisticated matte finish that lasts for hours.",
    ingredients: [ "Shea Butter","Jojoba Oil","Vitamin E","Avocado Oil","Candelilla Wax","Rose Extract","Natural Pigments"],
    benefits: ["Highly pigmented color","Comfortable matte finish","Long-lasting wear","Hydrating formula","Smooth non-drying texture","Lightweight everyday feel"],
  },
  {
    id: "colourpop-liquid-blush",
    name: "ColourPop Liquid Blush",
    category: "Makeup",
    price: 26,
    image: "https://i.pinimg.com/1200x/f1/9b/ed/f19bed65cb2509f6c71666da2d3af297.jpg",
    images: [
      "https://i.pinimg.com/1200x/39/b9/c2/39b9c2fb98694dc7d0f2b1e5a51a63e3.jpg",
      "https://i.pinimg.com/736x/c0/08/59/c00859abe15627ca40f227ff48ec46fa.jpg",
      "https://i.pinimg.com/1200x/b2/8b/d3/b28bd33c69f57397179da800bbb6fc12.jpg",
      "https://i.pinimg.com/1200x/a6/21/12/a6211219ac4c2321148d22a701c56f5c.jpg"
    ],
    short: "A lightweight liquid blush that gives cheeks a soft natural flush.",
    description: "Blendable and highly pigmented, this liquid blush melts seamlessly into the skin for a fresh radiant glow. The silky formula layers beautifully over makeup without patchiness and provides long-lasting color with a dewy finish.",
    ingredients: ["Water","Glycerin","Dimethicone","Vitamin E","Jojoba Oil","Silica","Phenoxyethanol"],
    benefits: ["Lightweight formula","Natural dewy finish","Easy to blend","Long-lasting wear","Buildable pigmentation","Suitable for all skin types"],
  },
  {
    id: "fenty-beauty-brow-pencil",
    name: "Fenty Beauty Brow Pencil",
    category: "Makeup",
    price: 26,
    image: "https://i.pinimg.com/736x/d0/7c/70/d07c704e6a5e73dd1de2483e517fa279.jpg",
    images: [
      "https://i.pinimg.com/1200x/c6/5c/b8/c65cb86f8a58d6dde8ee91ae00cfb2e1.jpg",
      "https://i.pinimg.com/1200x/48/e6/a9/48e6a95b23d4fdabdbc8d7dbe9f0e1b7.jpg",
      "https://i.pinimg.com/736x/ee/b1/16/eeb1167f5c6baaaa9c37b6d25b9a1c3d.jpg",
      "https://i.pinimg.com/736x/da/ce/74/dace74f4d8c02c5c81e821a584555dc3.jpg"
    ],
    short: "An ultra-fine retractable brow pencil designed for precise, natural-looking brows.",
    description: "Fenty Beauty Brow MVP Ultra Fine Brow Pencil & Styler features a super slim tip that helps create realistic hair-like strokes with smooth application. The long-wearing formula delivers soft, blendable color while the built-in paddle brush helps shape and blend brows effortlessly for a polished finish.",
    ingredients: ["Hydrogenated Castor Oil","Synthetic Wax","Vitamin E","Carnauba Wax","Beeswax","Iron Oxides","Dimethicone"],
    benefits: ["Ultra-fine precision tip","Natural hair-like strokes","Long-lasting formula","Built-in styling brush","Smudge-resistant finish","Easy blending and shaping"],
  },
  {
    id: "midnight-rose-edp",
    name: "Midnight Rose Eau de Parfum",
    category: "Fragrance",
    price: 135,
    image: "https://images.pexels.com/photos/22589352/pexels-photo-22589352.jpeg",
    images: [
      "https://images.pexels.com/photos/22589377/pexels-photo-22589377.jpeg",
      "https://images.pexels.com/photos/21008916/pexels-photo-21008916.jpeg",
      "https://images.pexels.com/photos/22589328/pexels-photo-22589328.jpeg",
      "https://images.pexels.com/photos/22589348/pexels-photo-22589348.jpeg"
    ],
    short: "A sultry, intoxicating blend of dark rose and warm amber.",
    description: "Embrace the evening with Midnight Rose. This captivating fragrance combines deep floral notes of Bulgarian rose with a sensual base of amber and patchouli.",
    ingredients: ["Bulgarian Rose", "Amber", "Patchouli", "Bergamot", "Musk"],
    benefits: ["Long-lasting EDP", "Sensual & warm", "Premium glass bottle", "Cruelty-free"],
  },
  {
    id: "golden-black-solid-perfume",
    name: "Golden Black Solid Perfume",
    category: "Fragrance",
    price: 48,
    image: "https://images.pexels.com/photos/12456279/pexels-photo-12456279.jpeg",
    images: [
      "https://images.pexels.com/photos/12456270/pexels-photo-12456270.jpeg",
      "https://images.pexels.com/photos/12456274/pexels-photo-12456274.jpeg",
      "https://images.pexels.com/photos/12456284/pexels-photo-12456284.jpeg",
      "https://images.pexels.com/photos/12456276/pexels-photo-12456276.jpeg"
    ],
    short: "A bold, luxurious leather fragrance with a rich and masculine touch.",
    description:  "An elegant and intense leather-based perfume crafted for a sophisticated presence. This fragrance blends deep leather notes with warm woody undertones, creating a powerful and long-lasting scent that defines confidence and class.",
    ingredients: [  "Leather Accord","Sandalwood","Amber","Vanilla Extract","Musk"],
    benefits: ["Long-lasting fragrance","Premium luxury scent","Strong and bold aroma","Perfect for special occasions"],
  },
  {
    id: "flora-vision-edt",
    name: "Vision Flora Eau De Toilette",
    category: "Fragrance",
    price: 36,
    image: "https://images.pexels.com/photos/36833968/pexels-photo-36833968.jpeg",
    images: [
      "https://images.pexels.com/photos/36833967/pexels-photo-36833967.jpeg",
      "https://images.pexels.com/photos/36833971/pexels-photo-36833971.jpeg",
      "https://images.pexels.com/photos/36833975/pexels-photo-36833975.jpeg",
      "https://images.pexels.com/photos/36833970/pexels-photo-36833970.jpeg"
    ],
    short: "A delicate floral fragrance with soft, romantic pink notes.",
    description: "Vision Flora EDT is a graceful and feminine fragrance crafted with blooming floral accords. This scent captures the essence of fresh petals, soft citrus hints, and a gentle musky base, creating a light yet captivating aroma perfect for everyday elegance.",
    ingredients: [  "Rose Petals Extract","Orange Blossom","Peony Accord","White Musk","Bergamot Essence"],
    benefits: [  "Light and refreshing floral scent","Perfect for daily wear","Soft, feminine fragrance","Elegant and long-lasting"],
  },
  {
    id: "blush-velvet-eau-de-parfum",
    name: "Blush Velvet Eau De Parfum",
    category: "Fragrance",
    price: 32,
    image: "https://images.pexels.com/photos/20585236/pexels-photo-20585236.jpeg",
    images: [
      "https://images.pexels.com/photos/28720745/pexels-photo-28720745.jpeg",
      "https://images.pexels.com/photos/10947340/pexels-photo-10947340.jpeg",
      "https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg",
      "https://images.pexels.com/photos/32630385/pexels-photo-32630385.jpeg"
    ],
    short: "A luxurious floral perfume with soft rose petals and warm vanilla musk.",
    description: "Blush Velvet Eau De Parfum captures timeless elegance with a delicate blend of blooming roses, peony petals, and creamy vanilla musk. Its romantic floral aroma creates a graceful, feminine aura that lasts beautifully throughout the day. Perfect for both everyday luxury and special occasions.",
    ingredients: ["Rose Petal Extract","Peony Essence","Vanilla Musk","Amber Oil","Sandalwood","Bergamot","Jasmine Flower"],
    benefits: ["Long-lasting fragrance","Elegant floral aroma","Perfect for daily wear","Premium luxury scent","Travel-friendly bottle", "Soft feminine finish"],
  },
  {
    id: "rose-petal-fragrance-oil",
    name: "Rose Petal Fragrance Oil",
    category: "Fragrance",
    price: 55,
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    images: [
      "https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg",
      "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg",
      "https://images.pexels.com/photos/7795451/pexels-photo-7795451.jpeg",
      "https://images.pexels.com/photos/4041387/pexels-photo-4041387.jpeg"
    ],
    short: "A delicate, luxurious oil perfume with soft rose floral notes.",
    description: "A refined, highly concentrated fragrance oil infused with the essence of fresh rose petals. Just a drop provides a long-lasting, elegant floral aroma that blends beautifully with your natural scent.",
    ingredients: ["Jojoba Oil", "Rose Extract", "Rose Absolute", "Geranium Oil", "Vanilla Infusion"],
    benefits: ["Long-lasting floral fragrance", "Light and soothing aroma", "Enhances natural body scent", "Skin-friendly nourishing oil base"],
  },
  {
    id: "purifying-charcoal-shampoo",
    name: "Purifying Charcoal Shampoo",
    category: "Haircare",
    price: 36,
    image: "https://i.pinimg.com/736x/9a/d6/22/9ad62221273462197b778a5c21bb4c75.jpg",
    images: [
      "https://i.pinimg.com/736x/9a/18/f6/9a18f630c57b39978aafe178fc94ce7a.jpg",
      "https://i.pinimg.com/736x/14/45/f1/1445f1ca34a7b728e2ec758fd14b4a33.jpg",
      "https://i.pinimg.com/1200x/4e/ed/6a/4eed6aba294e522efe4baf01d7eab785.jpg",
      "https://i.pinimg.com/736x/3c/22/f3/3c22f303ee39d5b41cc31992869bf40b.jpg"
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
    image: "https://res.cloudinary.com/dki3kdymm/image/upload/v1777461465/download_opzybi.jpg",
    images: [
      "https://images.pexels.com/photos/8834050/pexels-photo-8834050.jpeg",
      "https://images.pexels.com/photos/8834060/pexels-photo-8834060.jpeg",
      "https://images.pexels.com/photos/8834043/pexels-photo-8834043.jpeg",
      "https://images.pexels.com/photos/8834064/pexels-photo-8834064.jpeg"
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
