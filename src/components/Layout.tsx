import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";

export const Layout = () => (
  <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <CartDrawer />
  </div>
);
