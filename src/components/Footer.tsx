const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t py-12 mt-auto bg-muted/20">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto text-center">
        {/* Instagram CTA Section */}
        <div className="flex flex-col items-center gap-4 group">
          <div className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <InstagramIcon />
          </div>
          <div className="space-y-1">
            <h3 className="font-cinzel text-lg font-semibold tracking-wide">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Explore our Instagram page for the latest collections and fragrance tips.
            </p>
          </div>
          <a
            href="https://www.instagram.com/al_hasnain_fragrances/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 rounded-full border border-amber-500/50 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 font-medium transition-all shadow-sm"
          >
            @al_hasnain_fragrances
          </a>
        </div>

        <div className="h-px w-20 bg-border"></div>

        <p className="text-center text-sm leading-loose text-muted-foreground">
          Website designed & developed by <span className="font-semibold text-foreground"><a href="https://qurashi.vercel.app" className="hover:text-amber-600 transition-colors">Majid Qurashi</a></span>
        </p>
      </div>
    </footer>
  );
}
