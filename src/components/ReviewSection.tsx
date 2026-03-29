import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Toufeeq",
    rating: 5,
    comment: "High-quality fragrances at great prices. Truly authentic experience.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Athar",
    rating: 5,
    comment: "The packaging was beautiful and the delivery was fast. Highly recommend!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Adnan",
    rating: 4,
    comment: "The scents are very long-lasting. Very satisfied with the service.",
    date: "2 weeks ago"
  }
];

export function ReviewSection() {
  return (
    <section className="py-16 bg-background border-t border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-cinzel mb-2">Rating & Reviews</h2>
            <p className="text-muted-foreground">What our happy customers are saying about us.</p>
          </div>
          <div className="flex items-center gap-4 bg-amber-50 dark:bg-amber-900/20 px-6 py-4 rounded-2xl border border-amber-200 dark:border-amber-900/50">
            <div className="text-4xl font-bold text-amber-600">4.9</div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground font-semibold">Based on 150+ reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 rounded-xl border bg-card hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{review.date}</span>
              </div>
              <p className="text-sm text-foreground/80 mb-4 line-clamp-3">"{review.comment}"</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700 uppercase">
                  {review.name[0]}
                </div>
                <span className="text-sm font-semibold">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
