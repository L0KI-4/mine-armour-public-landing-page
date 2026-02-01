import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard-card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent-foreground">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-base font-semibold tracking-tight">MINE ARMOUR</p>
              <p className="text-xs text-muted-foreground">Smart Safety & Monitoring</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href="/">Back to Site</a>
            </Button>
            <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive">
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <section className="dashboard-hero grid gap-8 lg:grid-cols-2 items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-destructive">System Status</p>
            <h1 className="mt-4 font-display text-6xl font-extrabold tracking-tight leading-tight">
              MINE <span className="text-destructive">ARMOR</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Advanced IoT protection monitoring environmental hazards and miner health in real-time.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#" className="inline-flex items-center gap-3 rounded-full bg-destructive px-6 py-3 font-semibold text-destructive-foreground shadow-lg hover:opacity-95">
                View System Overview
                <span aria-hidden>→</span>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-md border border-primary/20 px-4 py-2 text-sm text-muted-foreground">See How It Works</a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <DashboardCard title="Continuous Environmental Monitoring">Gas, temperature, humidity, vitals</DashboardCard>
              <DashboardCard title="Clear Alerts">Safe / Warning / Emergency logic</DashboardCard>
              <DashboardCard title="Rescue Support">GPS location for response teams</DashboardCard>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="system-active-card">
              <div className="system-active-inner">
                <div className="system-active-dot" />
                <ShieldCheck className="h-12 w-12 text-destructive-foreground" />
              </div>
              <h2 className="mt-6 text-center font-display text-4xl font-extrabold tracking-tight">SYSTEM ACTIVE</h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">MONITORING 24/7</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="font-display text-2xl font-semibold">Core Components</h3>
          <p className="mt-2 text-sm text-muted-foreground">Three integrated layers working in harmony to ensure maximum safety.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl p-6">
              <CardContent>
                <p className="font-display text-lg font-semibold">Smart Helmet & Suit</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Multi-gas detection</li>
                  <li>Vital signs monitoring</li>
                  <li>Stress level detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6">
              <CardContent>
                <p className="font-display text-lg font-semibold">Control & Monitoring</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Web-based central dashboard</li>
                  <li>Visual safety indicators</li>
                  <li>Alert notification system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6">
              <CardContent>
                <p className="font-display text-lg font-semibold">Communication Layer</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Wireless data transmission</li>
                  <li>Secure backend processing</li>
                  <li>Fail-safe connectivity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
