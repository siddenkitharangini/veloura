import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => (
  <Link
    to={`/products/${product.id}`}
    className="group block transition-all duration-500 ease-out hover:-translate-y-2 shadow-card hover:shadow-luxe rounded-2xl"
    style={{ animation: `fade-up 0.6s ${index * 80}ms both` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-beige/40 aspect-[4/5] mb-5">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/600x750?text=Veloura";
          }}
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-rose-gold/90 glass px-3 py-1 rounded-full">
        {product.category}
      </div>
      <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <ArrowUpRight className="w-4 h-4 text-rose-gold" strokeWidth={1.5} />
      </div>
    </div>
    <div className="flex items-baseline justify-between gap-4 px-1 pb-2">
      <div>
        <h3 className="font-serif text-xl sm:text-2xl leading-tight group-hover:text-rose-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{product.short}</p>
      </div>
      <span className="font-serif text-lg text-rose-gold whitespace-nowrap">${product.price}</span>
    </div>
  </Link>
);
