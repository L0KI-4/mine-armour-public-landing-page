import * as React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Step = {
  title: string;
  detail: string;
};

export function ArchitectureFlow({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-4 lg:grid-cols-5", className)}>
      {steps.map((s, idx) => (
        <li key={s.title} className="relative">
          <div className="h-full rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Step {idx + 1}</p>
            <p className="mt-2 font-display text-lg font-semibold tracking-tight">{s.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
          </div>

          {idx < steps.length - 1 ? (
            <div
              className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground/60 lg:block"
              aria-hidden="true"
            >
              <ArrowRight className="h-6 w-6" />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
