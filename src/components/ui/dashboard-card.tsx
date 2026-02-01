import * as React from "react";
import { cn } from "@/lib/utils";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
}

const DashboardCard = React.forwardRef<HTMLDivElement, DashboardCardProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("dashboard-card", className)} {...props}>
        {icon && <div className="dashboard-card-icon">{icon}</div>}
        {title && <h4 className="dashboard-card-title">{title}</h4>}
        <div className="dashboard-card-body">{children}</div>
      </div>
    );
  },
);

DashboardCard.displayName = "DashboardCard";

export { DashboardCard };
