import { Activity, HeartPulse, Stethoscope, Waves, ShieldCheck, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "angioplasty",
    title: "Angioplasty",
    short: "Reopen blocked arteries",
    description:
      "A minimally invasive procedure to gently reopen narrowed heart arteries and restore healthy blood flow — often performed same-day with quick recovery.",
    icon: HeartPulse,
  },
  {
    slug: "ecg",
    title: "ECG",
    short: "Electrical heart check",
    description:
      "A painless 5-minute test that records your heart's rhythm. We use it to detect early warning signs of heart trouble before symptoms appear.",
    icon: Activity,
  },
  {
    slug: "echo",
    title: "Echocardiography",
    short: "Live ultrasound of the heart",
    description:
      "An ultrasound scan that lets us watch your heart pumping in real time, checking valves, chambers and overall strength with no radiation.",
    icon: Waves,
  },
  {
    slug: "preventive",
    title: "Preventive Cardiology",
    short: "Stay ahead of heart disease",
    description:
      "Tailored screenings, lifestyle plans and risk assessments designed to protect your heart for the long run — especially for families with a history of heart disease.",
    icon: ShieldCheck,
  },
  {
    slug: "consultation",
    title: "Expert Consultation",
    short: "Calm, unhurried second opinions",
    description:
      "A thoughtful one-to-one conversation about your symptoms, reports and concerns — with clear explanations and a treatment plan you fully understand.",
    icon: Stethoscope,
  },
  {
    slug: "stress",
    title: "Stress & Holter Tests",
    short: "Heart under real-world conditions",
    description:
      "We monitor your heart during exercise or over 24–48 hours of daily life, catching irregularities a single in-clinic test might miss.",
    icon: Brain,
  },
];

export const testimonials = [
  {
    name: "Anjali R.",
    role: "Daughter of patient, age 67",
    quote:
      "Dr. Mehta took the time to explain my father's condition in a way our entire family could understand. We finally felt heard — and his recovery has been remarkable.",
  },
  {
    name: "Vikram S.",
    role: "Patient, age 54",
    quote:
      "After my angioplasty I was back at work in five days. The clinic feels less like a hospital and more like a place where someone genuinely cares about you.",
  },
  {
    name: "Priya K.",
    role: "Patient, age 42",
    quote:
      "I came in anxious about chest pain. Dr. Mehta was patient, ran the right tests, and reassured me with honesty. I've recommended him to everyone in my family.",
  },
];

export const faqs = [
  {
    q: "When should I see a cardiologist?",
    a: "If you experience chest discomfort, breathlessness, palpitations, dizziness, or have a family history of heart disease — even mild persistent symptoms deserve a professional opinion.",
  },
  {
    q: "Is angioplasty a major surgery?",
    a: "No. Angioplasty is a minimally invasive procedure performed through a small puncture in the wrist or groin. Most patients go home within 24–48 hours.",
  },
  {
    q: "What does a heart check-up include?",
    a: "A typical preventive check includes a clinical examination, ECG, echocardiogram, blood pressure assessment, and lipid profile — completed comfortably in a single visit.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes. We are empanelled with all major insurance providers and TPAs. Our team will help you with cashless approvals and paperwork.",
  },
  {
    q: "How quickly can I get an appointment?",
    a: "Most consultations are available within 24–48 hours. For emergencies, call us directly — we offer round-the-clock support.",
  },
];

export const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "15,000+", label: "Patients treated" },
  { value: "98%", label: "Procedure success rate" },
  { value: "4.9★", label: "Patient rating" },
];

export const stories = [
  {
    name: "Mr. Suresh, 62",
    title: "From breathless to back on his morning walks",
    summary:
      "Suresh came in struggling to climb a single flight of stairs. After a thorough evaluation, a single-stent angioplasty restored normal blood flow. Three weeks later he was walking 4 km every morning — pain-free.",
    outcome: "Resumed daily walks in 21 days",
  },
  {
    name: "Mrs. Lata, 58",
    title: "Catching heart disease before it caught her",
    summary:
      "A routine preventive screening revealed early signs of coronary artery disease. With medication, dietary guidance and quarterly monitoring, Lata avoided surgery entirely and her risk score is now in the healthy range.",
    outcome: "Avoided surgery through early detection",
  },
  {
    name: "Mr. Aamir, 47",
    title: "A second opinion that changed everything",
    summary:
      "Aamir was advised bypass surgery elsewhere. A careful re-evaluation showed angioplasty would be just as effective. He returned to his IT job within a week and is now an active member of our cardiac wellness community.",
    outcome: "Surgery avoided, back to work in 7 days",
  },
];
