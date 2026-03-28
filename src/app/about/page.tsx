import { Sparkles, Leaf, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our Story: The Essence of <span className="text-amber-600 dark:text-amber-400">Purity</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            At Al Husnain Fragrance, we believe that a scent is more than just a fragrance; it's a journey into the soul of luxury.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Crafting Excellence Since Day One</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of authenticity and craftsmanship, Al Husnain Fragrance has grown from a humble passion for traditional attars into a brand synonymous with luxury and prestige.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every bottle we produce is a testament to our dedication to quality. We source the finest natural ingredients from around the globe, ensuring that our fragrances remain true to their heritage while embracing modern sophistication.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
                <Sparkles className="w-8 h-8 text-amber-600" />
                <p className="font-medium text-amber-900 dark:text-amber-100 italic">
                  "Scent is the most intense form of memory."
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Perfume" 
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">Our Craft</p>
              <h3 className="text-2xl font-bold">Premium Collections</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Al Husnain?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We stand by the quality of our products and the satisfaction of our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Organic</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our attars are crafted using natural botanical extracts, free from harmful synthetic chemicals.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the highest standards of purity, ensuring a long-lasting and evocative fragrance experience.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Brand</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a growing community of fragrance lovers across India, our reputation for excellence precedes us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-24 text-center lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To provide an unparalleled olfactory experience that resonates with luxury, tradition, and personal style, bringing the finest scents of the world to your doorstep.
          </p>
        </div>
      </section>
    </div>
  );
}
