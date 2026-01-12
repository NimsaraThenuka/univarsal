import { Building2, Globe2, Package, TrendingUp, CheckCircle2, Users, Award, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slider from "react-slick";

export function HomePage() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: true,
    cssEase: "ease-in-out",
  };

  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1764675902777-6c0c0ac16f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2ODE5MjA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "State-of-the-Art Food Manufacturing",
      subtitle: "Global quality standards in every product"
    },
    {
      url: "https://images.unsplash.com/photo-1738680981649-3f81bdfe225d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NjgxMDk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Sri Lankan Spices",
      subtitle: "Authentic flavors from Ceylon"
    },
    {
      url: "https://images.unsplash.com/photo-1734773557735-8fc50f94b473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwanVpY2UlMjBib3R0bGVzfGVufDF8fHx8MTc2ODE5MjA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Fresh Fruit Juices & Concentrates",
      subtitle: "Pure natural goodness in every bottle"
    },
    {
      url: "https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2ODEzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Industrial Machinery Solutions",
      subtitle: "Cutting-edge equipment for your business"
    },
    {
      url: "https://images.unsplash.com/photo-1703564803619-d245c1270086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBtYXRlcmlhbHMlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2ODE5MjA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Packaging Materials",
      subtitle: "Protecting quality, ensuring excellence"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Slider {...sliderSettings} className="h-full">
          {sliderImages.map((slide, index) => (
            <div key={index} className="relative h-[600px]">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="mb-4 text-white text-5xl lg:text-6xl animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-white/90 mb-8 animate-fade-in-delay">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                    <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/95 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                      Explore Products
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm font-semibold">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Business Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We operate in two primary sectors, delivering excellence across both food
              manufacturing and industrial supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Food & Beverage */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759244207370-a36254cbd59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4MDc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Food and Beverage Manufacturing"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 transform group-hover:-translate-y-2 transition-transform">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Food & Beverage Manufacturing and Exports</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Premium quality food products manufactured to global standards, serving both
                    local and international markets with excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Machinery */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/90 to-primary/90 z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2ODEzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Machinery and Packaging Materials"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 transform group-hover:-translate-y-2 transition-transform">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Machinery & Packaging Material Imports</h3>
                  </div>
                  <p className="text-muted-foreground">
                    High-quality industrial machinery and packaging solutions to support
                    manufacturing operations and enhance productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine Sri Lankan excellence with global standards to deliver unmatched value to
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-4">Sri Lankan Origin with Global Standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                We bring the best of Sri Lankan products to the world, maintaining international
                quality standards in everything we do.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-4">Reliable Supply Chain & Sourcing Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our established network and logistics expertise ensure consistent, timely delivery
                across all markets we serve.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-4">Customized Solutions for Diverse Industries</h3>
              <p className="text-muted-foreground leading-relaxed">
                We tailor our products and services to meet the unique requirements of each client
                and industry sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Preview */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Our Commitment to Excellence</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Built on strong values and a customer-first approach
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="mb-2 text-white">Quality First</h4>
              <p className="text-sm text-white/80">Strict quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h4 className="mb-2 text-white">Integrity</h4>
              <p className="text-sm text-white/80">Honest & transparent</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="mb-2 text-white">Customer Centric</h4>
              <p className="text-sm text-white/80">Tailored solutions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h4 className="mb-2 text-white">Sustainability</h4>
              <p className="text-sm text-white/80">Responsible practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Let's discuss how Universal Sourcing can support your business with quality products
            and reliable service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              View Our Products
            </button>
            <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}