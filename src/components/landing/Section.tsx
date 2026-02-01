import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, kicker, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14 sm:py-20", className)}>
      <div className="container">
        <header className="max-w-2xl">
          {kicker ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">{kicker}</p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p> : null}
        </header>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
