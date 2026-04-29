import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  { name: "Sofia M.", text: "Veloura transformed my morning ritual. My skin has never felt this luminous.", role: "Verified Glow" },
  { name: "Amelia R.", text: "The Velvet Cream is pure indulgence — light, dewy, and impossibly nourishing.", role: "Verified Glow" },
  { name: "Isabella K.", text: "Every detail feels considered. The fragrance alone is reason enough to fall in love.", role: "Verified Glow" },
];

const Index = () => {
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-glow)" }} />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-6">
              ✦ The Veloura Edit
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
              Glow naturally,<br />
              <span className="shimmer italic font-light">shine confidently.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Considered skincare crafted from clean botanicals — formulated to reveal your most luminous self.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group gradient-rose text-primary-foreground px-9 py-4 rounded-full text-xs uppercase tracking-[0.25em] flex items-center gap-3 hover:shadow-luxe transition-all duration-500"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="px-9 py-4 rounded-full text-xs uppercase tracking-[0.25em] border border-rose-gold/40 text-foreground hover:bg-rose-gold hover:text-primary-foreground transition-all duration-500"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-2"><Leaf className="w-4 h-4 text-rose-gold" strokeWidth={1.3} /> Clean</span>
              <span className="flex items-center gap-2"><Heart className="w-4 h-4 text-rose-gold" strokeWidth={1.3} /> Cruelty-free</span>
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-rose-gold" strokeWidth={1.3} /> Dermatologist-tested</span>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-10 bg-blush/40 rounded-full blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe float">
              <img
                src={hero}
                alt="Veloura signature serum on silk"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-soft hidden md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-rose-gold mb-1">Best seller</p>
              <p className="font-serif text-lg">Luminous Glow Serum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-28">
        <div className="container">
          <SectionTitle
            eyebrow="The Collection"
            title="Rituals composed with intention"
            subtitle="A curated edit of formulas designed to nurture skin and elevate the everyday."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Story banner */}
      <section className="py-28 bg-blush/30">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref1} className="reveal grid grid-cols-2 gap-4">
            <img src={gallery1} alt="" loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover translate-y-6" />
            <img src={gallery6} alt="" loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover" />
          </div>
          <div ref={ref2} className="reveal">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-5">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Beauty as a quiet ritual, not a routine.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Each Veloura formula is composed with botanical actives, sourced responsibly and tested gently. We believe radiance begins with restraint — fewer ingredients, slower processes, lasting results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vegan. Cruelty-free. Made in small batches in Provence.
            </p>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.25em] text-rose-gold border-b border-rose-gold pb-1 hover:opacity-70 transition"
            >
              Discover the story →
            </Link>
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="py-24 text-center">
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-6">The Veloura Promise</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
            Glow Naturally. <span className="italic shimmer">Shine Confidently.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Veloura is a premium skincare brand focused on natural beauty and simplicity — pure botanical formulas, crafted in small batches, designed for the woman who values intention over excess.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28">
        <div className="container">
          <SectionTitle eyebrow="Voices" title="Loved by the considered" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const r = useReveal<HTMLDivElement>();
              return (
                <div
                  key={i}
                  ref={r}
                  className="reveal glass rounded-2xl p-8 shadow-card hover-lift"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-rose-gold text-3xl font-serif leading-none mb-4">"</div>
                  <p className="font-serif text-xl leading-relaxed mb-6">{t.text}</p>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-rose-gold mt-1">{t.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram preview */}
      <section className="pb-28">
        <div className="container">
          <SectionTitle eyebrow="@veloura" title="Our world, in moments" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <a
                key={n}
                href="#"
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-card"
              >
                <img
                  src={new URL(`../assets/gallery-${n}.jpg`, import.meta.url).href}
                  alt="instagram"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/30 transition-colors duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
