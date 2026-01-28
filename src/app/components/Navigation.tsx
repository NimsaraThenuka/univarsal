import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-4 group"
            >
              <img
                src="https://res.cloudinary.com/dyp247eoh/image/upload/v1768969840/universal_logo_xhzgu0.jpg"
                alt="Universal Sourcing"
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden lg:block">
                <div className="text-xl font-semibold text-muted-foreground">
                  Universal Sourcing
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all ${
                  currentPage === item.id
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  currentPage === item.id
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
