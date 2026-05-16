import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useSearchParams } from "react-router-dom";

const categories = ["All", "Skincare", "Makeup", "Fragrance", "Haircare"];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "All";
  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-40 pb-16 gradient-hero text-center">
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-6 animate-fade-up">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1] animate-fade-up text-balance">
            Essentials, beautifully edited.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg animate-fade-up">
            Three formulas. Endless rituals. Each chosen to do more with less.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  if (c === "All") {
                    params.delete("filter");
                  } else {
                    params.set("filter", c);
                  }
                  setSearchParams(params);
                }}
                className={`px-4 sm:px-7 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-400 ${
                  filter === c
                    ? "gradient-rose text-primary-foreground shadow-soft"
                    : "border border-border text-foreground/70 hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
