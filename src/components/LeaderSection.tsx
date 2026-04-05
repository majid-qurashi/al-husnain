import Image from "next/image";

export function LeaderSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl text-amber-600 font-cursive mb-2 lowercase">
          The Visionary
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold font-cinzel mb-12 text-balance leading-tight">
          Who Is Leading This Vision?
        </h3>
        
        <div className="relative inline-block group">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
          
          <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-64 h-80 md:w-72 md:h-[400px]">
              <Image
                src="/products/sadaam hussain.jpeg"
                alt="Sadaam Hussain - Founder of Al-Husnain Fragrance"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Glassmorphism Name Tag */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm">
              <h4 className="text-2xl md:text-3xl font-bold text-white font-cinzel">
                Sadaam Hussain
              </h4>
              <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mt-1">
                Founder & Visionary
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            "We believe that every scent tells a story. At Al-Husnain Fragrance, we are dedicated to crafting memories that linger, elevating your senses through the art of fine perfumery."
          </p>
        </div>
      </div>
    </section>
  );
}
