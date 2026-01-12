import { Target, Lightbulb, Award, Shield, Users, TrendingUp, Leaf, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We maintain strict quality standards across all products, from raw ingredients to finished goods and industrial supplies.",
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description:
        "We conduct business with honesty, responsibility and long-term trust.",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Customer Centric Approach",
      description:
        "We tailor solutions to meet the evolving needs of our local and international clients.",
      color: "bg-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Innovation & Growth",
      description:
        "We continuously improve products, processes and partnerships to stay competitive in global markets.",
      color: "bg-orange-500",
    },
    {
      icon: Leaf,
      title: "Sustainability & Responsibility",
      description:
        "We support sustainable sourcing, responsible manufacturing and environmentally conscious solutions.",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-white">About Universal Sourcing</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A diversified sourcing and manufacturing company headquartered in Sri Lanka, built on
            quality, trust, and global excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Universal Sourcing (Pvt) Limited is a diversified sourcing and manufacturing
                  company headquartered in Sri Lanka. Our business is built on two strong pillars:
                  food production and exports, and industrial machinery and packaging solutions.
                </p>
                <p>
                  In the food sector, we focus on manufacturing and supplying a range of raw, semi
                  processed, and value added food products for both local consumption and
                  international markets.
                </p>
                <p>
                  In parallel, we support manufacturing and commercial sectors by importing and
                  distributing high quality machinery and packaging materials.
                </p>
                <p>
                  With a customer focused mindset and global outlook, we aim to be a reliable
                  partner for businesses seeking quality products, consistent supply, and
                  professional service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/10 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-accent/10 rounded-3xl -z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzY4MDY3OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sri Lankan Heritage"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2>Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a globally trusted Sri Lankan sourcing partner, delivering high quality
                food solutions and innovative industrial supplies that create sustainable value for
                our customers and communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h2>Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To manufacture, source and supply premium food products and reliable machinery and
                packaging solutions by combining quality, innovation and ethical business practices
                while supporting global markets with Sri Lankan excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">Our Impact in Numbers</h2>
            <p className="text-lg text-white/90">
              Building trust through consistent performance and quality
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold mb-3 text-white">25+</div>
              <div className="text-lg text-white/90">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold mb-3 text-white">50+</div>
              <div className="text-lg text-white/90">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold mb-3 text-white">1000+</div>
              <div className="text-lg text-white/90">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold mb-3 text-white">100%</div>
              <div className="text-lg text-white/90">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="mb-6">Let's Build a Partnership</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Experience the Universal Sourcing difference. Contact us to discuss how we can support
            your business goals.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
