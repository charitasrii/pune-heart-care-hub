import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, Building2, Heart } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Mehta — Senior Cardiologist in Pune" },
      {
        name: "description",
        content:
          "Meet Dr. Mehta — DM Cardiology with 20+ years of experience, affiliated with leading Pune hospitals.",
      },
      { property: "og:title", content: "About Dr. Mehta — Senior Cardiologist" },
      {
        property: "og:description",
        content: "Two decades of compassionate, evidence-based heart care in Pune.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28 items-center">
          <div className="animate-rise">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              About the Doctor
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl text-foreground text-balance">
              A cardiologist who treats <span className="italic text-primary">people</span>, not just hearts.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For over twenty years, Dr. Arjun Mehta has been one of Pune's most trusted heart
              specialists — known equally for his clinical precision and the calm, human way he
              cares for every patient who walks into his clinic.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated animate-rise delay-200">
            <img src={doctorHero} alt="Dr. Mehta" width={1280} height={1600} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Section eyebrow="The journey" title="Two decades dedicated to heart care">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              items: [
                "MBBS — B.J. Medical College, Pune",
                "MD (Internal Medicine) — AIIMS, New Delhi",
                "DM (Cardiology) — KEM Hospital, Mumbai",
                "Fellowship in Interventional Cardiology — UK",
              ],
            },
            {
              icon: Building2,
              title: "Hospital Affiliations",
              items: [
                "Sahyadri Super-Speciality Hospital, Pune",
                "Ruby Hall Clinic, Pune",
                "Jehangir Hospital — Visiting Consultant",
                "Director, MetroHeart Cath-Lab",
              ],
            },
            {
              icon: Award,
              title: "Recognition",
              items: [
                "Maharashtra Medical Excellence Award, 2022",
                "Fellow, Cardiological Society of India",
                "60+ peer-reviewed publications",
                "Invited speaker at 30+ international congresses",
              ],
            },
          ].map((block) => (
            <div key={block.title} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <block.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-display text-foreground">{block.title}</h3>
              <ul className="mt-4 space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                {block.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Heart className="mx-auto h-10 w-10 text-primary" fill="currentColor" />
          <blockquote className="mt-6 text-2xl md:text-3xl font-display text-foreground leading-snug text-balance">
            "Behind every report and every scan is a person — often anxious, often tired. My job
            isn't just to treat the heart. It's to give that person back their peace of mind."
          </blockquote>
          <p className="mt-6 text-muted-foreground">— Dr. Arjun Mehta, MD, DM (Cardiology)</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-elevated"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
