import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, openCart } = useCart();

  const handleLogoClick = (e: React.MouseEvent) => {
    // If already on home, prevent default navigation and smoothly scroll to top
    if (location.pathname === "/") {
      e.preventDefault();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="font-serif text-2xl tracking-[0.3em] text-foreground">
          VELOURA
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-xs uppercase tracking-[0.25em] transition-colors duration-300 relative py-1",
                  isActive ? "text-rose-gold" : "text-foreground/70 hover:text-rose-gold"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-rose-gold transition-all duration-500",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            aria-label={`Open cart (${totalItems} items)`}
            className="relative p-2 rounded-full hover:bg-blush/40 transition"
          >
            <ShoppingBag className="w-5 h-5 text-foreground/80" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-rose-gold text-primary-foreground text-[11px] font-medium flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 glass",
          open ? "max-h-96 mt-3" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col py-6 gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-[0.25em]",
                  isActive ? "text-rose-gold" : "text-foreground/80"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
