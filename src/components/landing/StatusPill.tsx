import * as React from "react";

import { cn } from "@/lib/utils";

export type AlertLevel = "safe" | "warning" | "emergency";

const styles: Record<AlertLevel, string> = {
  safe: "border-status-safe/25 bg-status-safe/10 text-status-safe",
  warning: "border-status-warn/30 bg-status-warn/12 text-foreground",
  emergency: "border-status-emergency/25 bg-status-emergency/10 text-status-emergency",
};

export function StatusPill({ level, children, className }: { level: AlertLevel; children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        styles[level],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
