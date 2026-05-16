import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import ScrollToTop from "./ScrollToTop";

export const Layout = () => (
  <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
    <Navbar />
    <main className="flex-1">
      <ScrollToTop />
      <Outlet />
    </main>
    <Footer />
    <CartDrawer />
  </div>
);
