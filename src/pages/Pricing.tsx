import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    variant: "Basic",
    cp: "₹22,000",
    sp: "₹26,999",
    grossProfit: "₹4,999",
    margin: "~27%",
    positioning: "Entry-level safety solution for small mines and contractors",
  },
  {
    variant: "Pro",
    cp: "₹26,150",
    sp: "₹35,999",
    grossProfit: "₹9,849",
    margin: "~25%",
    positioning: "Primary revenue driver; advanced safety electronics with scalable margins",
  },
  {
    variant: "Elite",
    cp: "₹32,000",
    sp: "₹44,999",
    grossProfit: "₹12,999",
    margin: "~29%",
    positioning: "Premium solution for high-risk, deep mining environments",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent-foreground">M</div>
            <div>
              <p className="font-display text-base font-semibold tracking-tight">MINE ARMOUR</p>
              <p className="text-xs text-muted-foreground">Pricing & Plans</p>
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
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-destructive">Business Tiers</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold">Pricing & Plans</h1>
          <p className="mt-4 text-lg text-muted-foreground">Scalable safety solutions for every mining operation. Below are suggested cost and selling prices, margins, and positioning for each variant.</p>

          <div className="mt-8 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
            <table className="w-full table-fixed text-left">
              <thead>
                <tr className="text-sm text-muted-foreground">
                  <th className="w-1/6">Variant</th>
                  <th className="w-1/6">Cost Price (CP)</th>
                  <th className="w-1/6">Selling Price (SP)</th>
                  <th className="w-1/6">Gross Profit</th>
                  <th className="w-1/6">Gross Margin</th>
                  <th className="w-1/6">Business Positioning</th>
                </tr>
              </thead>
              <tbody className="mt-4">
                {tiers.map((t) => (
                  <tr key={t.variant} className="border-t border-border align-top">
                    <td className="py-4 font-display text-sm font-semibold">{t.variant}</td>
                    <td className="py-4 text-sm text-muted-foreground">{t.cp}</td>
                    <td className="py-4 text-sm font-medium">{t.sp}</td>
                    <td className="py-4 text-sm text-muted-foreground">{t.grossProfit}</td>
                    <td className="py-4 text-sm text-muted-foreground">{t.margin}</td>
                    <td className="py-4 text-sm text-muted-foreground">{t.positioning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="font-display text-lg font-semibold">Pricing Strategy</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside">
                  <li>B2B pricing strategy with controlled margins between 25-30%, ensuring sustainability for mass deployment.</li>
                  <li>Basic variant offers affordability for small mines and medium-sized contractors to adopt Mine Armour.</li>
                  <li>Pro variant is the primary revenue driver, balancing advanced safety electronics with scalable margins.</li>
                  <li>Elite variant targets high-risk operations where enhanced protection and intelligence justify higher price and margin.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="font-display text-lg font-semibold">How to use</h3>
                <p className="mt-2 text-sm text-muted-foreground">These figures are intended for B2B discussions and planning. Adjust regional taxes, logistics, and support costs when producing final proposals.</p>
                <div className="mt-4">
                  <Button className="cta-destructive">Request Quote</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
