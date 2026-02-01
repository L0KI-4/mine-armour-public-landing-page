import { ShieldCheck } from "lucide-react";

type SystemStatusCardProps = {
  title?: string;
  subtitle?: string;
};

export function SystemStatusCard({
  title = "SYSTEM ACTIVE",
  subtitle = "MONITORING: 24/7",
}: SystemStatusCardProps) {
  return (
    <div className="relative isolate w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-10 shadow-[0_0_50px_rgba(220,38,38,0.25)] transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(220,38,38,0.35)] sm:px-10 sm:py-14">
      {/* glow backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{
        background: "radial-gradient(circle at 50% 35%, rgba(220,38,38,0.35) 0%, rgba(15,23,42,0.2) 40%, rgba(0,0,0,0.9) 100%)",
      }} />

      {/* icon */}
      <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.45)] ring-4 ring-red-900/50 sm:h-32 sm:w-32">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-black/40 bg-red-700/80">
          <ShieldCheck className="h-12 w-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
        </div>
      </div>

      <div className="relative mt-8 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-white drop-shadow sm:text-3xl">{title}</h3>
        <p className="mt-3 text-base font-semibold tracking-wide text-red-400 drop-shadow sm:text-lg">{subtitle}</p>
      </div>
    </div>
  );
}
