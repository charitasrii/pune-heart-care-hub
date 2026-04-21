import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star, ShieldCheck, Sparkles, Users } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";
import doctorPatient from "@/assets/doctor-patient.jpg";
import { Section } from "@/components/Section";
import { services, testimonials, faqs, stats } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mehta Cardiology — Trusted Heart Care in Pune" },
      {
        name: "description",
        content:
          "Advanced cardiology with compassionate care in Pune. Book your consultation with a 20-year heart specialist.",
      },
      { property: "og:title", content: "Trusted Heart Care in Pune — Dr. Mehta Cardiology" },
      {
        property: "og:description",
        content: "20+ years, 15,000+ patients, 98% success. Compassionate cardiology in Pune.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-7 flex flex-col justify-center animate-rise">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Accepting new patients · Pune
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl text-foreground text-balance leading-[1.05]">
              Trusted Heart Care<br />
              <span className="italic font-light text-primary">in Pune</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Advanced cardiology with compassionate care. Two decades of experience, thousands of
              healthier hearts — and a doctor who genuinely listens.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:scale-[1.02]"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Meet the Doctor
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-amber-500" />
                  ))}
                </div>
                <span className="text-foreground font-medium">4.9</span>
                <span>· 1,200+ reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                MCI Verified · Insurance accepted
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-rise delay-200">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={doctorHero}
                alt="Dr. Mehta, Senior Cardiologist in Pune"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating credibility cards */}
            <div className="absolute -left-4 bottom-12 hidden md:block rounded-2xl bg-card p-4 shadow-elevated border border-border max-w-[180px]">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5 text-primary" /> Patients treated
              </div>
              <div className="mt-1 text-2xl font-display text-foreground">15,000+</div>
            </div>
            <div className="absolute -right-2 top-10 hidden md:block rounded-2xl bg-card p-4 shadow-elevated border border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Success rate
              </div>
              <div className="mt-1 text-2xl font-display text-foreground">98%</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4 lg:px-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="font-display text-4xl md:text-5xl text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <Section
        eyebrow="What we do"
        title="Comprehensive heart care, simply explained"
        description="From everyday check-ups to advanced procedures — every service is delivered with the same calm attention to detail."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((svc) => (
            <div
              key={svc.slug}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                <svc.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-display text-foreground">{svc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{svc.short}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={doctorPatient}
                alt="Dr. Mehta consulting with patients"
                width={1600}
                height={1100}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Why families choose us
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl text-foreground text-balance">
                Care that puts you at ease — every step of the way
              </h2>
              <ul className="mt-10 space-y-6">
                {[
                  {
                    title: "Two decades of specialist experience",
                    body: "Trained at top institutions and trusted by 15,000+ patients across Pune.",
                  },
                  {
                    title: "Latest cardiac technology",
                    body: "From 4D echo to advanced cath-lab procedures — accuracy you can rely on.",
                  },
                  {
                    title: "Personal, unhurried consultations",
                    body: "We never rush. Every visit ends with a clear plan and answered questions.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-foreground">{item.title}</h4>
                      <p className="mt-1 text-muted-foreground">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="In their words"
        title="Stories of trust, healing and quiet relief"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft flex flex-col"
            >
              <div className="flex gap-0.5 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* HEART HEALTH TIPS */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 font-medium">
              Heart Health Tips
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              Small daily habits, a stronger heart for life
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Walk 30 minutes a day",
                b: "A brisk daily walk lowers blood pressure and improves circulation more than almost any pill.",
              },
              {
                n: "02",
                t: "Know your numbers",
                b: "Get your BP, sugar and cholesterol checked yearly — earlier if heart disease runs in your family.",
              },
              {
                n: "03",
                t: "Listen to your body",
                b: "Persistent breathlessness, chest tightness or fatigue are not 'just stress'. Get them checked.",
              },
            ].map((tip) => (
              <div key={tip.n} className="border-t border-primary-foreground/20 pt-6">
                <div className="text-sm text-primary-foreground/60">{tip.n}</div>
                <h3 className="mt-3 text-2xl font-display">{tip.t}</h3>
                <p className="mt-3 text-primary-foreground/80 leading-relaxed">{tip.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section eyebrow="Common questions" title="What patients ask us most">
        <div className="grid gap-4 md:gap-6 max-w-3xl">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors open:border-primary/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <h3 className="text-lg font-medium text-foreground">{f.q}</h3>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA BANNER */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-primary p-10 lg:p-16 text-primary-foreground shadow-elevated">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-balance">
                Your heart deserves expert attention.
              </h2>
              <p className="mt-3 text-primary-foreground/85 max-w-xl">
                Book a consultation today — most appointments available within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-medium text-primary hover:scale-[1.02] transition-transform w-fit"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
