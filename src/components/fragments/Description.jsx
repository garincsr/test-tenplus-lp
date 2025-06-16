import { Calendar, Users, Truck, Leaf, ArrowRight } from "lucide-react";

export default function Description() {
  return (
    <div className="min-h-screen relative bg-neutral-200 z-10 overflow-hidden">
      {/* Hero Section with Creative Layout */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with Overlay Pattern */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-cover bg-center bg-[url(https://mytenplus.com/wp-content/uploads/2023/12/johannes-mandle-gJ2IqNqZzw0-unsplash-1.jpg)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-slate-900/80 to-amber-900/70"></div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-emerald-300 font-medium tracking-wide">
                  SUSTAINABLE FARMING
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white/90">Sourced from</span>
                <span className="block bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                  200+ Farmers
                </span>
                <span className="block text-3xl lg:text-4xl font-light text-white/80 mt-2">
                  across Indonesia
                </span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Every ingredient tells a story of sustainable practices,
                superior soil quality, and community partnership. We work
                directly with local farmers to ensure environmental
                responsibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-emerald-500 flex items-center hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  View Nutritional Facts
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Learn Our Story
                </button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    200+
                  </div>
                  <div className="text-white/80">Partner Farmers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    100%
                  </div>
                  <div className="text-white/80">Sustainable</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-white/80">Provinces</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-rose-400 mb-2">5</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section with Creative Cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, #f59e0b 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Section Header */}

          {/* Creative Feature Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Subscribe Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-yellow-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 group-hover:border-primary">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-yellow-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Calendar className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-neutral-500 transition-colors">
                  Subscribe & Save
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  Flexible subscription plans with complete control. Edit,
                  pause, or cancel anytime while enjoying exclusive savings and
                  priority delivery.
                </p>
                <div className="flex items-center text-black font-semibold group-hover:text-neutral-500 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Community Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-yellow-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 group-hover:border-primary">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-yellow-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-neutral-500 transition-colors">
                  Join Our Community
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  Connect with like-minded individuals, access exclusive
                  products, and participate in sustainability initiatives that
                  make a real impact.
                </p>
                <div className="flex items-center text-black font-semibold group-hover:text-neutral-500 transition-colors">
                  Join Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Shipping Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-yellow-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 group-hover:border-primary">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Truck className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-neutral-500 transition-colors">
                  FREE Shipping
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  Complimentary shipping across Java & Bali. Need it faster?
                  Same-day delivery available in select Bali areas for just
                  Rp50k.
                </p>
                <div className="flex items-center text-black font-semibold group-hover:text-neutral-500 transition-colors">
                  Check Coverage
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
