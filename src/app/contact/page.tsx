import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Don't hesitate to reach out. Our fragrance experts are ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 mt-1 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Call/WhatsApp</h3>
                    <p className="text-muted-foreground">+91 9541457794</p>
                    <p className="text-sm text-amber-600 font-medium mt-1 uppercase tracking-wider">Fastest Support on WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 mt-1 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email</h3>
                    <p className="text-muted-foreground">majid@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 mt-1 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Location</h3>
                    <p className="text-muted-foreground">Anantnag, Jammu & Kashmir, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link/CTA */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-600 to-amber-400 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Direct Messaging</h3>
              </div>
              <p className="mb-6 opacity-90">
                The fastest way to reach us for orders and inquiries is through social messaging.
              </p>
              <a 
                href="https://wa.me/919541457794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 font-bold bg-white text-amber-600 rounded-full hover:bg-opacity-90 transition-all shadow-sm"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <h2 className="text-3xl font-bold mb-8">Send Us a Pulse</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full h-14 px-5 rounded-2xl bg-muted/50 border border-transparent focus:border-amber-500/50 focus:bg-background transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full h-14 px-5 rounded-2xl bg-muted/50 border border-transparent focus:border-amber-500/50 focus:bg-background transition-all outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full h-14 px-5 rounded-2xl bg-muted/50 border border-transparent focus:border-amber-500/50 focus:bg-background transition-all outline-none"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:border-amber-500/50 focus:bg-background transition-all outline-none resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button 
                type="submit"
                className="w-full h-14 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-amber-600/20 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
