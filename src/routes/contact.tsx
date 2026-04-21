import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Check } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Dr. Mehta Cardiology, Pune" },
      {
        name: "description",
        content:
          "Book your cardiology consultation in Pune. Phone, WhatsApp or online appointment form.",
      },
      { property: "og:title", content: "Book a Cardiology Appointment in Pune" },
      {
        property: "og:description",
        content: "Phone, WhatsApp or online — three easy ways to reach Dr. Mehta's clinic.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.name.length > 100) return;
    if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-hero py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Get in touch
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl text-foreground text-balance">
            Book your appointment
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Three easy ways to reach us — choose what's most convenient for you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: Phone, label: "Call us", value: "+91 20 1234 5678", href: "tel:+912012345678" },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat instantly",
              href: "https://wa.me/912012345678",
            },
            { icon: Mail, label: "Email", value: "care@drmehta.in", href: "mailto:care@drmehta.in" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group rounded-2xl border border-border bg-card p-7 hover:border-primary hover:shadow-elevated transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-sm text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-lg font-medium text-foreground">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-soft">
            <h2 className="text-2xl font-display text-foreground">Request an appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll confirm by phone within 2 business hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-success/10 border border-success/20 p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success">
                  <Check className="h-6 w-6 text-success-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-display text-foreground">Request received</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you, {form.name}. Our team will call you shortly to confirm your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <Field label="Full name" required>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  />
                </Field>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Phone" required>
                    <input
                      required
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </Field>
                </div>
                <Field label="Preferred date">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  />
                </Field>
                <Field label="Briefly describe your concern">
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-elevated transition-all"
                >
                  Request Appointment
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Your information is confidential and never shared.
                </p>
              </form>
            )}
          </div>

          {/* MAP + INFO */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=Koregaon+Park+Pune&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-display text-foreground">Visit the clinic</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-foreground font-medium">Dr. Mehta Cardiology Clinic</div>
                    Lane 5, North Main Road, Koregaon Park, Pune – 411001
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    Mon – Sat: 9:00 AM – 8:00 PM
                    <br />
                    Sun: By appointment · Emergencies 24×7
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
