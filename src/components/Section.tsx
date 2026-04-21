import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {(eyebrow || title || description) && (
          <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
