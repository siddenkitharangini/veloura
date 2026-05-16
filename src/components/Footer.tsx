import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "Welcome to Veloura", description: "You're now part of our circle." });
    setEmail("");
  };

  return (
    <footer className="gradient-soft border-t border-border/50 mt-32">
      {/* Newsletter */}
      <div className="container py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-rose-gold mb-4">Newsletter</p>
        <h3 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
          Join the Veloura circle
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Receive rituals, new launches and private invitations — softly, never often.
        </p>
        <form
          onSubmit={subscribe}
          className="flex flex-col sm:flex-row gap-4 w-full sm:max-w-md mx-auto glass rounded-lg sm:rounded-full p-1 overflow-hidden"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent px-4 py-3 sm:px-5 sm:py-4 text-sm outline-none placeholder:text-muted-foreground w-full transition-shadow duration-500 ease-out hover:shadow-soft focus:ring-4 focus:ring-rose-gold/10 focus:shadow-soft"
          />
          <button
            type="submit"
            className="gradient-rose text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs uppercase tracking-[0.2em] hover:opacity-95 transition transform duration-300 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-rose-gold/10 hover:shadow-glow focus:shadow-glow w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/50">
        <div className="container py-12 grid md:grid-cols-4 gap-10">
          <div>
            <p className="font-serif text-2xl tracking-[0.3em] mb-4">VELOURA</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Glow Naturally,<br />Shine Confidently.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] mb-4 text-rose-gold">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-rose-gold transition-colors">Collection</Link></li>
              <li><Link to="/about" className="hover:text-rose-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-rose-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] mb-4 text-rose-gold">Contact</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@veloura.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Paris · New York</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] mb-4 text-rose-gold">Follow</p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-rose-gold hover:scale-110 transition-all duration-300"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.3} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 py-6 text-center text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Veloura · Crafted with care
        </div>
      </div>
    </footer>
  );
};
