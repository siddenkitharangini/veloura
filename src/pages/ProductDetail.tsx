import { Link, useParams } from "react-router-dom";
import { getProduct, products } from "@/data/products";
import { ArrowLeft, Check, Star, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";

const reviews = [
  { name: "Eloise V.", rating: 5, text: "Absolutely transformative. My skin glows from within after two weeks." },
  { name: "Margot D.", rating: 5, text: "The texture is divine — sinks in immediately and never feels heavy." },
  { name: "Juliette P.", rating: 4, text: "Beautiful packaging, gentle scent, and visible results." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProduct(id ?? "");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState({ active: false, x: 50, y: 50 });
  const { addItem } = useCart();

  // Reset gallery when navigating between products
  useEffect(() => {
    setActiveImage(0);
    setZoom({ active: false, x: 50, y: 50 });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-3xl mb-4">Product not found</p>
          <Link to="/products" className="text-rose-gold underline">Back to collection</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const gallery = product.images?.length ? product.images : [product.image];
  const mainImage = gallery[activeImage] ?? gallery[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoom({ active: true, x, y });
  };

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-rose-gold transition mb-12">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Gallery */}
            <div className="relative animate-scale-in">
              <div className="absolute -inset-10 bg-blush/40 rounded-full blur-3xl pointer-events-none" />
              <div
                className="relative aspect-square rounded-[2rem] overflow-hidden bg-blush/30 shadow-luxe cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setZoom((z) => ({ ...z, active: false }))}
              >
                <img
                  key={mainImage}
                  src={mainImage}
                  alt={`${product.name} — view ${activeImage + 1}`}
                  width={800}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out animate-fade-up"
                  style={{
                    transform: zoom.active ? `scale(1.6)` : "scale(1)",
                    transformOrigin: `${zoom.x}% ${zoom.y}%`,
                  }}
                />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-rose-gold glass px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-3 mt-4">
                {gallery.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`group aspect-square rounded-xl overflow-hidden bg-blush/30 transition-all duration-400 ${
                      activeImage === i
                        ? "ring-2 ring-rose-gold ring-offset-2 ring-offset-background shadow-soft"
                        : "opacity-70 hover:opacity-100 hover:shadow-soft"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="animate-fade-up">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-gold mb-4">{product.category}</p>
              <h1 className="font-serif text-5xl lg:text-6xl leading-[1] mb-5">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-gold text-rose-gold" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">142 reviews</span>
              </div>
              <p className="text-3xl font-serif text-rose-gold mb-10">${product.price}</p>
              <p className="text-muted-foreground leading-relaxed mb-12 text-base">{product.description}</p>

              {/* Benefits */}
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.25em] text-rose-gold mb-4">Benefits</p>
                <ul className="space-y-3">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full gradient-rose flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" strokeWidth={2.5} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity + CTA */}
              <div className="relative z-10 flex flex-col gap-4 mb-8">
                <div className="flex items-center glass rounded-full px-2 self-start">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:text-rose-gold" aria-label="Decrease quantity"><Minus className="w-3 h-3" /></button>
                  <span className="px-4 font-serif">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-3 hover:text-rose-gold" aria-label="Increase quantity"><Plus className="w-3 h-3" /></button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    addItem(
                      { id: product.id, name: product.name, price: product.price, image: product.image },
                      qty
                    );
                    toast({ title: "Added to cart 🛍️", description: `${product.name} × ${qty}` });
                  }}
                  style={{ backgroundColor: "#B76E79", color: "#ffffff" }}
                  className="w-full mt-2 py-4 rounded-2xl text-base font-medium tracking-wide shadow-luxe hover:scale-[1.02] hover:shadow-glow transition-all duration-300"
                >
                  Add to Cart 🛍️
                </button>
              </div>

              {/* Ingredients */}
              <div className="border-t border-border pt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-rose-gold mb-4">Key Ingredients</p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="text-xs px-4 py-2 rounded-full bg-blush/40 border border-border/40">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-blush/30">
        <div className="container">
          <SectionTitle eyebrow="Reviews" title="What others are saying" />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-8 shadow-card hover-lift">
                <div className="flex mb-4">
                  {[...Array(r.rating)].map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-rose-gold text-rose-gold" />
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-5">"{r.text}"</p>
                <p className="text-xs uppercase tracking-[0.2em] text-rose-gold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24">
        <div className="container">
          <SectionTitle eyebrow="You may also love" title="Complete the ritual" />
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
