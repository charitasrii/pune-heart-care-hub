import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/912012345678?text=Hello%20Dr.%20Mehta%2C%20I%27d%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated animate-float-pulse"
      style={{ backgroundColor: "oklch(0.62 0.18 145)" }}
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </a>
  );
}
