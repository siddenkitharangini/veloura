import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll respond within 24 hours, gracefully." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="pt-40 pb-16 gradient-hero text-center">
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-6 animate-fade-up">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1] animate-fade-up text-balance">
            We'd love to hear from you.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg animate-fade-up">
            For inquiries, collaborations, or simply a quiet hello.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div ref={ref1} className="reveal lg:col-span-3 glass rounded-3xl p-10 md:p-12 shadow-soft">
            <h2 className="font-serif text-3xl mb-8">Send a message</h2>
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-rose-gold outline-none py-3 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-rose-gold outline-none py-3 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Subject</label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-rose-gold outline-none py-3 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-rose-gold outline-none py-3 resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="group gradient-rose text-primary-foreground px-9 py-4 rounded-full text-xs uppercase tracking-[0.25em] flex items-center gap-3 hover:shadow-luxe transition-all duration-500"
              >
                Send message
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div ref={ref2} className="reveal lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@veloura.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Atelier", value: "12 Rue de Provence\n75009 Paris, France" },
            ].map((c, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover-lift flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full gradient-rose flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.3} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-rose-gold mb-1">{c.label}</p>
                  <p className="font-serif text-xl whitespace-pre-line">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-rose-gold mb-4">Follow</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:gradient-rose hover:text-primary-foreground hover:border-transparent transition-all duration-400">
                    <Icon className="w-4 h-4" strokeWidth={1.3} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
