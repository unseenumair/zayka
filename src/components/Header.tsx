import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Home, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Logo from "./ui/logo";

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
              isActive("/")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline font-semibold">Home</span>
          </Link>

          <Link
            to="/foods"
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
              isActive("/foods")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <UtensilsCrossed className="h-4 w-4" />
            <span className="hidden sm:inline font-semibold">Menu</span>
          </Link>

          <Link
            to="/cart"
            className={`relative flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
              isActive("/cart")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline font-semibold">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
