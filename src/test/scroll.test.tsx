import { describe, it, expect, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "@/pages/ProductDetail";
import { CartProvider } from "@/context/CartContext";

describe("ProductDetail scroll behaviour", () => {
  beforeEach(() => {
    // mock scrollTo
    // @ts-ignore
    window.scrollTo = vi.fn();

    // ensure history.scrollRestoration is writable in JSDOM
    try {
      Object.defineProperty(window.history, "scrollRestoration", {
        value: "auto",
        writable: true,
      });
    } catch (e) {
      // ignore
    }
  });

  it("calls window.scrollTo on mount", () => {
    render(
      <MemoryRouter initialEntries={["/products/im-from-beet-purifying-mask"]}>
        <Routes>
          <Route path="/products/:id" element={
            <CartProvider>
              <ProductDetail />
            </CartProvider>
          } />
        </Routes>
      </MemoryRouter>
    );

    expect(window.scrollTo).toHaveBeenCalled();
    // prefer a top 0 call
    // @ts-ignore
    expect(window.scrollTo.mock.calls[0][0]).toMatchObject({ top: 0 });
  });
});
