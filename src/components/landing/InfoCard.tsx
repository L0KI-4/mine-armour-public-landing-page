import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  description: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
};

export function InfoCard({ title, description, icon: Icon, className }: InfoCardProps) {
  return (
    <Card className={cn("shadow-sm transition-transform motion-safe:hover:-translate-y-0.5", className)}>
      <CardHeader className="space-y-3">
        <div className="flex items-start gap-3">
          {Icon ? (
            <div className="mt-0.5 rounded-md bg-accent/15 p-2 text-accent-foreground">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
          ) : null}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed text-muted-foreground">{description}</CardContent>
    </Card>
  );
}
