import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Fayiq",
    role: "Regular Customer",
    content: "The quality of the attars is unparalleled. The scent lingers for days, and the packaging is exquisite. Al Husnain Fragrance has become my go-to for all my fragrance needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aamir",
    role: "Fragrance Enthusiast",
    content: "Truly premium collection! I tried the 'Oudh-e-Arabia' and it's by far the best I've ever used. Highly recommend to everyone who loves luxury scents.",
    rating: 5,
  },
  {
    id: 3,
    name: "Drx Sajid",
    role: "Medical Profession",
    content: "What I love about Al Husnain Fragrance is the authenticity. These are not just perfumes; they are an experience. Shipping was fast too!",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel mb-4">What Our <span className="text-amber-600 dark:text-amber-400">Clients</span> Say</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the essence of luxury through the words of our cherished customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background dark:bg-accent/40 p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <div className="flex mb-4 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "fill-current" : "text-muted"
                        }`}
                    />
                  ))}
                </div>
                <p className="text-lg italic text-foreground/90 mb-6 font-sans">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center font-bold text-amber-700 dark:text-amber-300 mr-4">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
