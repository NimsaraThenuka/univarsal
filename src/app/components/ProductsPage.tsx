import {
  Apple,
  Droplet,
  Package,
  Leaf,
  Wheat,
  Globe,
  Factory,
  Box,
  Boxes,
  Settings,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"food" | "machinery">("food");

  const foodProducts = [
    {
      icon: Droplet,
      title: "Fruit Juices and Concentrates",
      description: "Premium quality fruit juices and concentrates made from the finest ingredients",
      image: "https://images.unsplash.com/photo-1694886712783-5eefee63cedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMGp1aWNlJTIwYm90dGxlc3xlbnwxfHx8fDE3NjgxMzgyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Package,
      title: "Ready-to-Drink (RTD) Products",
      description: "Convenient, high-quality beverages ready for immediate consumption",
      image: "https://images.unsplash.com/photo-1694886712783-5eefee63cedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMGp1aWNlJTIwYm90dGxlc3xlbnwxfHx8fDE3NjgxMzgyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Apple,
      title: "Ready-to-Eat Food Products",
      description: "Nutritious and delicious ready-to-eat meals and snacks",
      image: "https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Wheat,
      title: "Spices and Spice Blends",
      description: "Authentic Sri Lankan spices and custom blends for global markets",
      image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjgwNTA1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Box,
      title: "Food Ingredients",
      description: "High-quality raw and processed ingredients for food manufacturing",
      image: "https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Leaf,
      title: "Herbal and Natural Ingredients",
      description: "Premium herbal extracts and natural ingredients sourced from Sri Lanka",
      image: "https://images.unsplash.com/photo-1607721098274-e54cbfab475d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBpbmdyZWRpZW50cyUyMG5hdHVyYWx8ZW58MXx8fHwxNzY4MTM4Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const machineryProducts = [
    {
      icon: Factory,
      title: "Food Processing Machinery",
      description: "Advanced equipment for efficient food processing and production",
      image: "https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Settings,
      title: "Packaging Machinery",
      description: "State-of-the-art packaging solutions for various industries",
      image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjgxMzgyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Box,
      title: "Flexible & Rigid Packaging Materials",
      description: "Comprehensive range of packaging materials for all applications",
      image: "https://images.unsplash.com/photo-1567570671138-76c7e06caa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBtYXRlcmlhbHMlMjByb2xsfGVufDF8fHx8MTc2ODEzODI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Boxes,
      title: "Industrial Packaging Solutions",
      description: "Robust packaging solutions for industrial and commercial use",
      image: "https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2ODEzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Settings,
      title: "Spare Parts and Accessories",
      description: "Genuine spare parts and accessories for all machinery",
      image: "https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2ODEzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-white">Our Products</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across food manufacturing and industrial supplies, tailored to
            meet your business needs.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 py-6">
            <button
              onClick={() => setActiveCategory("food")}
              className={`flex-1 py-4 px-6 rounded-lg transition-all ${
                activeCategory === "food"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <Package className="w-5 h-5" />
                <span className="font-semibold">Food & Beverages</span>
              </div>
            </button>
            <button
              onClick={() => setActiveCategory("machinery")}
              className={`flex-1 py-4 px-6 rounded-lg transition-all ${
                activeCategory === "machinery"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <Settings className="w-5 h-5" />
                <span className="font-semibold">Machinery & Packaging</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Food & Beverages Section */}
      {activeCategory === "food" && (
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4">Food & Beverages</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Premium quality food products manufactured to global standards, serving both local
                and international markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {foodProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3">{product.title}</h3>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Markets Served */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h3 className="mb-6 text-center">Markets Served</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2">Sri Lanka (Local Market)</h4>
                    <p className="text-muted-foreground">
                      Comprehensive distribution across Sri Lanka with reliable supply chains and
                      timely delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="mb-2">International Export Markets</h4>
                    <p className="text-muted-foreground">
                      Serving global customers with high-quality Sri Lankan products and
                      professional export services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 bg-primary/5 rounded-xl">
                <h4 className="mb-4">Custom Solutions Available</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Private labelling and branding services
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Bulk supply options for commercial clients
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Customized product formulations based on requirements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Machinery & Packaging Section */}
      {activeCategory === "machinery" && (
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4">Machinery & Packaging Materials</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                High-quality machinery and packaging materials to support food, beverage, and
                industrial operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {machineryProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3">{product.title}</h3>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Value Proposition */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h3 className="mb-6 text-center">Our Solutions Enhance</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="mb-2">Productivity</h4>
                  <p className="text-muted-foreground">
                    Advanced machinery to increase output and efficiency
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="mb-2">Efficiency</h4>
                  <p className="text-muted-foreground">
                    Streamlined operations with reliable equipment
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="mb-2">Product Safety</h4>
                  <p className="text-muted-foreground">
                    Quality packaging materials ensuring product integrity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Interested in Our Products?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Get in touch with our team to discuss your specific requirements and learn more about
            our product offerings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Request a Quote
            </button>
            <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}