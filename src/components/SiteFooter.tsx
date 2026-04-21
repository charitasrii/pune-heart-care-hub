import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary">
                <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
              </span>
              <span className="font-display text-lg font-semibold">Dr. Mehta Cardiology</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Compassionate, advanced heart care for the people of Pune. Two decades of trust.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About the Doctor</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/stories" className="hover:text-primary">Patient Stories</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Koregaon Park, Pune 411001</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91 20 1234 5678</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> care@drmehta.in</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Clinic Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /> Mon–Sat: 9:00 AM – 8:00 PM</li>
              <li className="pl-6">Sun: By appointment</li>
              <li className="pl-6 text-success">24×7 Emergency Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Mehta Cardiology Clinic. All rights reserved.</p>
          <p>Reg. No. MH-CARD-2003-0421 · MCI Verified</p>
        </div>
      </div>
    </footer>
  );
}
