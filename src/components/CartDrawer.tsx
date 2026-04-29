import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQty, removeItem, totalPrice, totalItems, clearCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-background shadow-luxe transition-transform duration-500 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-rose-gold" />
            <h2 className="font-serif text-xl">Your Cart</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ({totalItems})
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 rounded-full hover:bg-blush/40 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-muted-foreground">
              <ShoppingBag className="w-10 h-10 text-rose-gold/60" />
              <p className="font-serif text-lg text-foreground">Your cart is empty</p>
              <p className="text-sm">Add a little luxury to begin.</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-blush/40 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <p className="font-serif text-base leading-tight truncate">{item.name}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted-foreground hover:text-rose-gold transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-rose-gold mt-1">${item.price}</p>
                    <div className="mt-2 inline-flex items-center border border-border rounded-full">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="p-2 hover:text-rose-gold"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm font-serif">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="p-2 hover:text-rose-gold"
                        aria-label="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-rose-gold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => {
                toast({
                  title: "Checkout coming soon ✨",
                  description: "This is a portfolio demo — no payment required.",
                });
              }}
              style={{ backgroundColor: "#B76E79", color: "#ffffff" }}
              className="w-full py-4 rounded-2xl text-sm font-medium tracking-wide shadow-luxe hover:scale-[1.02] transition-all duration-300"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-rose-gold transition"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
