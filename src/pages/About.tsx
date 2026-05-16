import founder from "@/assets/founder.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

// Beautiful rose image for About section
const roseImageUrl = "https://images.pexels.com/photos/14151108/pexels-photo-14151108.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop";
import { SectionTitle } from "@/components/SectionTitle";
import { useReveal } from "@/hooks/use-reveal";
import { Leaf, Sparkles, Heart, Award } from "lucide-react";

const values = [
  { icon: Leaf, title: "Botanical First", text: "Plant-derived actives, sourced responsibly across Provence and Morocco." },
  { icon: Heart, title: "Cruelty-Free", text: "Never tested on animals. Always formulated with empathy." },
  { icon: Sparkles, title: "Clinically Crafted", text: "Each formula is dermatologist-reviewed and lab-tested for efficacy." },
  { icon: Award, title: "Slow Beauty", text: "Small batches, recyclable glass, and a refillable system." },
];

const About = () => {
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  const founderRef1 = useReveal<HTMLDivElement>();
  const founderRef2 = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 gradient-hero">
        <div className="container text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-6 animate-fade-up">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1] text-balance animate-fade-up">
            A quieter kind of beauty.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed animate-fade-up">
            Veloura was born from a single belief: that skincare should feel like a private ritual — restorative, considered, and deeply personal.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref1} className="reveal">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-5">The Beginning</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance leading-tight">
              From a garden in Provence to your vanity.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                It began in a sunlit greenhouse, where founder Camille Laurent distilled her grandmother's botanical recipes into formulas that felt as luxurious as they were honest.
              </p>
              <p>
                Today, Veloura is composed of just twelve essentials — each one a meditation on what skin truly needs. Nothing performative. Nothing in excess.
              </p>
              <p>
                We exist for the woman who chooses thoughtfully and lives slowly.
              </p>
            </div>
          </div>
          <div ref={ref2} className="reveal relative">
            <div className="absolute -inset-8 bg-blush/40 rounded-full blur-3xl" />
            <img 
              src={roseImageUrl} 
              alt="Pink rose macro" 
              loading="lazy" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = gallery2;
              }}
              className="relative rounded-3xl shadow-luxe aspect-[4/5] object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-blush/30">
        <div className="container">
          <SectionTitle eyebrow="Mission & Vision" title="What we promise" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-10 shadow-card hover-lift">
              <p className="text-xs uppercase tracking-[0.25em] text-rose-gold mb-4">Mission</p>
              <p className="font-serif text-2xl leading-snug mb-3">
                To create clean, effective beauty rituals that honor both skin and planet.
              </p>
            </div>
            <div className="glass rounded-2xl p-10 shadow-card hover-lift">
              <p className="text-xs uppercase tracking-[0.25em] text-rose-gold mb-4">Vision</p>
              <p className="font-serif text-2xl leading-snug mb-3">
                A world where slowing down is the most luxurious act of self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <SectionTitle eyebrow="Our Values" title="Crafted with conscience" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ValueCard key={i} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-beige/40">
        <div className="container grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 reveal" ref={founderRef1}>
            <div className="relative">
              <div className="absolute -inset-6 bg-rose-gold/10 rounded-full blur-2xl" />
              <img src={founder} alt="Camille Laurent, founder" loading="lazy" className="relative rounded-3xl shadow-luxe aspect-[4/5] object-cover" />
            </div>
          </div>
          <div className="lg:col-span-3 reveal" ref={founderRef2}>
            <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-5">Founder</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3 leading-tight">Camille Laurent</h2>
            <p className="text-rose-gold italic font-serif text-xl mb-8">"Beauty is the patience of small daily rituals."</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A former cosmetic chemist turned slow-beauty advocate, Camille founded Veloura after years of formulating for the world's largest houses — and feeling something essential was missing.
              </p>
              <p>
                Her vision: a brand that whispers rather than shouts. One that trusts the intelligence of nature and the discernment of the woman who wears it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal text-center p-8 hover-lift rounded-2xl"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-full gradient-rose flex items-center justify-center mx-auto mb-5">
        <value.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.3} />
      </div>
      <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
    </div>
  );
};

export default About;
