import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-muted py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get in <span className="text-amber-600 dark:text-amber-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Have a question about our fragrances or your order? We're here to help you find your perfect scent.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Contact Information</h2>
              <p className="text-muted-foreground text-lg mb-8 text-center lg:text-left">
                Don't hesitate to reach out. Our fragrance experts are ready to assist you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">Call/WhatsApp</h3>
                  <p className="text-muted-foreground line-clamp-1">+91 9055352698</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">Email</h3>
                  <p className="text-muted-foreground truncate w-full px-2">sadam92588@gmail.com</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">Location</h3>
                  <p className="text-muted-foreground line-clamp-1 text-sm">Anantnag, JK, India</p>
                </div>
              </div>
            </div>

            {/* Social Link/CTA */}
            <div className="p-10 rounded-[2rem] bg-gradient-to-br from-amber-600 to-amber-400 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <MessageSquare className="w-8 h-8" />
                    <h3 className="text-3xl font-black font-cinzel">Quick Assistance</h3>
                  </div>
                  <p className="max-w-md opacity-90 text-lg">
                    The fastest way to reach us for orders and inquiries is through social messaging.
                  </p>
                </div>
                <a
                  href="https://wa.me/919055352698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-16 px-10 font-black bg-white text-amber-600 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-widest text-xs"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
