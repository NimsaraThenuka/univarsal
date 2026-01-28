import { ArrowLeft, CheckCircle2, Truck, Shield, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specifications" | "applications">("overview");

  // Product data - in a real app, this would come from an API or database
  const productData: Record<string, any> = {
    "fruit-juices-and-concentrates": {
      title: "Fruit Juices and Concentrates",
      subtitle: "Premium quality fruit juices and concentrates made from the finest ingredients",
      image: "https://res.cloudinary.com/dyp247eoh/image/upload/v1769135873/assortment-fruit-juices.jpg_ty7psd.jpg",
      description: "Our premium fruit juices and concentrates are crafted from the finest quality fruits sourced directly from Sri Lankan farms. We specialize in tropical fruits including mango, pineapple, passion fruit, and guava, ensuring authentic flavors and nutritional value.",
      features: [
        "100% Natural Ingredients",
        "No Artificial Preservatives",
        "Rich in Vitamins & Minerals",
        "Consistent Quality Standards",
        "Custom Blending Available",
        "Global Export Experience"
      ],
      specifications: {
        "Brix Level": "65-75° Brix",
        "Acidity": "0.5-1.5%",
        "pH Level": "3.5-4.5",
        "Packaging": "Aseptic bags, drums, or custom packaging",
        "Shelf Life": "24 months when stored properly",
        "Origin": "Sri Lanka"
      },
      certifications: ["HACCP", "ISO 22000", "FSSC 22000", "Organic Certified"]
    },
    "ready-to-drink-products": {
      title: "Ready-to-Drink (RTD) Products",
      subtitle: "Convenient, high-quality beverages ready for immediate consumption",
      image: "https://res.cloudinary.com/dyp247eoh/image/upload/v1769135623/immunity-boosting-food-healthy-lifestyle-with-citrus.jpg_sb9kdu.jpg",
      description: "Our ready-to-drink beverages combine convenience with exceptional quality. From refreshing fruit drinks to health-focused functional beverages, each product is formulated to deliver both taste and nutritional benefits.",
      features: [
        "Ready-to-Consume Format",
        "Extended Shelf Life",
        "Nutritional Fortification",
        "Attractive Packaging",
        "Brand Customization",
        "Quality Assurance"
      ],
      specifications: {
        "Volume Options": "200ml, 330ml, 500ml, 1L",
        "Shelf Life": "12-18 months",
        "Storage": "Ambient temperature",
        "pH Level": "3.0-4.0",
        "Sugar Content": "Customizable",
        "Packaging": "PET bottles, Tetra packs"
      },
      applications: [
        "Retail Distribution",
        "Food Service Industry",
        "Convenience Stores",
        "Hotels & Restaurants",
        "Export Markets",
        "Institutional Supply"
      ],
      certifications: ["HACCP", "ISO 22000", "Halal Certified", "Kosher Certified"]
    },
    "ready-to-eat-food-products": {
      title: "Ready-to-Eat Food Products",
      subtitle: "Nutritious and delicious ready-to-eat meals and snacks",
      image: "https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Our ready-to-eat food products offer convenience without compromising on nutrition or taste. From traditional Sri Lankan curries to modern healthy snacks, each product is prepared with care and quality ingredients.",
      features: [
        "Convenient Packaging",
        "Long Shelf Life",
        "Nutritional Balance",
        "Authentic Flavors",
        "Quality Ingredients",
        "Portion Controlled"
      ],
      specifications: {
        "Shelf Life": "12-24 months",
        "Storage": "Ambient temperature",
        "Packaging": "Retort pouches, cans, jars",
        "Portion Size": "200g - 1kg",
        "Cooking Method": "Ready-to-eat",
        "Origin": "Sri Lanka"
      },
      certifications: ["HACCP", "ISO 22000", "Halal Certified"]
    },
    "spices-and-spice-blends": {
      title: "Spices and Spice Blends",
      subtitle: "Authentic Sri Lankan spices and custom blends for global markets",
      image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjgwNTA1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sri Lanka's rich spice heritage comes alive in our premium spice collection. From the world-famous Ceylon cinnamon to our signature spice blends, each product captures the authentic flavors that have made Sri Lankan spices legendary.",
      features: [
        "Authentic Sri Lankan Origin",
        "Premium Quality Standards",
        "Custom Blending Services",
        "Consistent Flavor Profile",
        "Competitive Pricing",
        "Global Export Experience"
      ],
      specifications: {
        "Moisture Content": "<8%",
        "Purity": "99.5% minimum",
        "Packaging": "Bulk, retail, custom",
        "Shelf Life": "24-36 months",
        "Origin": "Sri Lanka",
        "Processing": "Steam sterilized"
      },
      certifications: ["ISO 22000", "Organic Certified", "Fair Trade"]
    },
    "food-ingredients": {
      title: "Food Ingredients",
      subtitle: "High-quality raw and processed ingredients for food manufacturing",
      image: "https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "We supply a comprehensive range of food ingredients to manufacturers worldwide. From basic commodities to specialty ingredients, our products meet the highest quality standards and regulatory requirements.",
      features: [
        "Consistent Quality",
        "Competitive Pricing",
        "Reliable Supply Chain",
        "Technical Support",
        "Custom Formulations",
        "Regulatory Compliance"
      ],
      specifications: {
        "Purity Standards": "Food grade",
        "Moisture Content": "Product specific",
        "Packaging": "Bulk, intermediate bulk",
        "Shelf Life": "12-24 months",
        "Origin": "Multiple sources",
        "Certifications": "As required"
      },
      certifications: ["HACCP", "ISO 22000", "FSSC 22000"]
    },
    "herbal-and-natural-ingredients": {
      title: "Herbal and Natural Ingredients",
      subtitle: "Premium herbal extracts and natural ingredients sourced from Sri Lanka",
      image: "https://images.unsplash.com/photo-1607721098274-e54cbfab475d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBpbmdyZWRpZW50cyUyMG5hdHVyYWx8ZW58MXx8fHwxNzY4MTM4Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sri Lanka's biodiversity offers a treasure trove of herbal and natural ingredients. Our products range from traditional Ayurvedic herbs to modern nutraceutical ingredients, all sourced sustainably and processed with care.",
      features: [
        "Wildcrafted & Organic",
        "Traditional Knowledge",
        "Modern Processing",
        "Quality Assurance",
        "Sustainability Focus",
        "Research Backed"
      ],
      specifications: {
        "Processing": "Extracts, powders, whole",
        "Purity": "95% minimum active compounds",
        "Moisture": "<5%",
        "Packaging": "Custom as required",
        "Shelf Life": "24-36 months",
        "Origin": "Sri Lanka"
      },
      certifications: ["Organic Certified", "Non-GMO", "Kosher", "Halal"]
    },
    "food-processing-machinery": {
      title: "Food Processing Machinery",
      subtitle: "Advanced equipment for efficient food processing and production",
      image: "https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Our food processing machinery combines cutting-edge technology with practical design. From small-scale operations to large industrial facilities, we provide equipment that enhances efficiency and maintains product quality.",
      features: [
        "Energy Efficient Design",
        "Easy Maintenance",
        "Automation Options",
        "Quality Construction",
        "Technical Support",
        "Training Provided"
      ],
      specifications: {
        "Capacity": "Customizable",
        "Power Supply": "As per requirements",
        "Materials": "Food-grade stainless steel",
        "Automation": "Semi to fully automated",
        "Warranty": "12-24 months",
        "Installation": "Included"
      },
      certifications: ["CE Certified", "ISO 9001", "Safety Standards"]
    },
    "packaging-machinery": {
      title: "Packaging Machinery",
      subtitle: "State-of-the-art packaging solutions for various industries",
      image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjgxMzgyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Modern packaging machinery that ensures product integrity, extends shelf life, and enhances brand presentation. Our equipment handles various packaging formats and materials for optimal results.",
      features: [
        "High-Speed Operation",
        "Flexible Packaging Formats",
        "Quality Control Systems",
        "User-Friendly Interface",
        "Energy Efficient",
        "Low Maintenance"
      ],
      specifications: {
        "Speed": "Up to 300 packages/minute",
        "Power Requirements": "Customizable",
        "Materials": "Various packaging materials",
        "Automation": "PLC controlled",
        "Warranty": "12 months",
        "Training": "Operator training included"
      },
      certifications: ["CE Certified", "ISO 9001", "Safety Standards"]
    },
    "flexible-rigid-packaging-materials": {
      title: "Flexible & Rigid Packaging Materials",
      subtitle: "Comprehensive range of packaging materials for all applications",
      image: "https://images.unsplash.com/photo-1567570671138-76c7e06caa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBtYXRlcmlhbHMlMjByb2xsfGVufDF8fHx8MTc2ODEzODI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "We offer a complete range of packaging materials designed to protect products, enhance shelf appeal, and meet various industry requirements. From flexible films to rigid containers, we have the solution for your packaging needs.",
      features: [
        "Product Protection",
        "Brand Enhancement",
        "Sustainability Options",
        "Custom Printing",
        "Quality Assurance",
        "Cost Effective"
      ],
      specifications: {
        "Materials": "Plastic, paper, foil, laminates",
        "Thickness": "Customizable",
        "Printing": "Up to 10 colors",
        "Shelf Life": "As per requirements",
        "Environmental": "Recyclable options available",
        "Certifications": "Food-grade approved"
      },
      certifications: ["ISO 9001", "Food Contact Approved", "Recycling Standards"]
    },
    "industrial-packaging-solutions": {
      title: "Industrial Packaging Solutions",
      subtitle: "Robust packaging solutions for industrial and commercial use",
      image: "https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2ODEzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Heavy-duty packaging solutions designed for industrial applications. Our products ensure safe transportation and storage of industrial goods, chemicals, and equipment.",
      features: [
        "Heavy-Duty Construction",
        "Weather Resistant",
        "Stackable Design",
        "Custom Sizing",
        "Reusability",
        "Cost Effective"
      ],
      specifications: {
        "Load Capacity": "Up to 2000kg",
        "Materials": "HDPE, steel, wood",
        "Dimensions": "Customizable",
        "Stacking": "Up to 4 high",
        "Durability": "Multiple uses",
        "Protection": "Impact and weather resistant"
      },
      certifications: ["ISO 9001", "UN Certified", "Safety Standards"]
    },
    "spare-parts-and-accessories": {
      title: "Spare Parts and Accessories",
      subtitle: "Genuine spare parts and accessories for all machinery",
      image: "https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2ODEzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comprehensive range of genuine spare parts and accessories to keep your machinery running efficiently. We stock parts for all major brands and provide expert technical support.",
      features: [
        "Genuine Parts",
        "Fast Delivery",
        "Technical Support",
        "Quality Assurance",
        "Competitive Pricing",
        "Warranty Coverage"
      ],
      specifications: {
        "Compatibility": "Multiple brands",
        "Availability": "In stock",
        "Quality": "OEM standards",
        "Packaging": "Protective packaging",
        "Documentation": "Included",
        "Warranty": "As per manufacturer"
      },
      certifications: ["ISO 9001", "Quality Standards"]
    }
  };

  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button
            onClick={() => onNavigate("products")}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => onNavigate("products")}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Products
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-4 text-white text-4xl lg:text-5xl">{product.title}</h1>
              <p className="text-xl text-white/90 mb-8">{product.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/95 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                  Request Quote
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm font-semibold">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-border">
            {[
              { id: "overview", label: "Overview" },
              { id: "specifications", label: "Specifications" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {product.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.certifications.map((cert: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Universal Sourcing?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine decades of experience with cutting-edge technology to deliver exceptional products and services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every product undergoes rigorous quality control to ensure it meets international standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Delivery</h3>
              <p className="text-muted-foreground">
                Reliable logistics and timely delivery to destinations worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our technical team provides ongoing support and consultation for all your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your requirements and discover how we can support your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/95 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm font-semibold">
              Request Sample
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}