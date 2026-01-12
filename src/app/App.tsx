import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProductsPage } from "./components/ProductsPage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when changing pages
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "products" && <ProductsPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all z-50 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
