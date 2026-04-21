import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Section } from "@/components/Section";
import { stories } from "@/lib/site-data";
import doctorPatient from "@/assets/doctor-patient.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Dr. Mehta Cardiology" },
      {
        name: "description",
        content:
          "Real recovery journeys from our patients — angioplasty, preventive care and second-opinion successes.",
      },
      { property: "og:title", content: "Patient Recovery Stories — Dr. Mehta Cardiology" },
      {
        property: "og:description",
        content: "Real journeys of healing, hope and renewed health from our patients.",
      },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Patient Stories
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl text-foreground text-balance">
            Real journeys. <span className="italic text-primary">Real recoveries.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Behind every statistic is a person who went home to their family healthier, calmer and
            more hopeful. A few of their stories.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-8">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-soft ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={doctorPatient}
                    alt={s.name}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <Quote className="h-8 w-8 text-primary/40" />
                <h2 className="mt-4 text-3xl md:text-4xl font-display text-foreground text-balance">
                  {s.title}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{s.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-success/15 text-success px-4 py-1.5 text-sm font-medium">
                    {s.outcome}
                  </span>
                  <span className="text-sm text-muted-foreground">— {s.name}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            Names changed and images representative to protect patient privacy.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-elevated"
          >
            Start your own journey
          </Link>
        </div>
      </Section>
    </>
  );
}
