import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr. Mehta Cardiology, Pune" },
      {
        name: "description",
        content:
          "Angioplasty, ECG, Echo, preventive cardiology and more — explained in plain language.",
      },
      { property: "og:title", content: "Cardiology Services in Pune" },
      {
        property: "og:description",
        content:
          "Comprehensive heart care from diagnosis to procedures — every service explained simply.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Services</p>
          <h1 className="mt-4 text-5xl md:text-6xl text-foreground text-balance">
            Every aspect of heart care — under one calm roof
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a quick reassurance check to advanced interventional procedures — here's everything
            we offer, in simple language.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc) => (
            <article
              key={svc.slug}
              className="group rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-soft hover:shadow-elevated hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <svc.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-display text-foreground">{svc.title}</h2>
                  <p className="text-sm text-primary mt-1">{svc.short}</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">{svc.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/60 p-10 lg:p-14 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground text-balance">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Tell us your symptoms or share your reports — we'll guide you to the right next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-elevated"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
