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

      {/* Promise & Features Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-cinzel mb-4">Our <span className="text-amber-600">Promise</span></h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              When you choose Al Husnain Fragrance, you&apos;re not just buying a scent — you&apos;re embracing a legacy of trust, purity, and authenticity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Genuine Purity</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Authentic products, crafted with meticulous care and the finest natural ingredients.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Honest Luxury</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Premium quality with fair, transparent pricing. We never compromise on excellence.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Delivery</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Exquisite packaging ensures your fragrance arrives safely, wherever you are in India.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pure Satisfaction</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A customer-first approach that ensures every experience with us is truly memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kashmir Section */}
      <section className="container mx-auto px-4 py-24 text-center lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-bold tracking-widest uppercase mb-4">
            From Kashmir, With Love ❤️
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-cinzel leading-tight italic">
            &quot;Every bottle carries the essence of Kashmir — its peace, purity, and poetic charm.&quot;
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We invite you to explore our world of perfumes and discover the scent that uniquely defines your story.
          </p>
          <div className="pt-8">
            <p className="text-2xl font-cinzel font-bold text-amber-600 dark:text-amber-400">
              Purity You Can Feel, Passion You Can Smell.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
