import { useEffect, useState } from "react";
import mineArmourHero from "@/assets/mine-armour-hero.jpg";
import { Button } from "@/components/ui/button";
import { SystemStatusCard } from "@/components/landing/SystemStatusCard";
import {
  Activity,
  AlertTriangle,
  Mail,
  Clock,
  Cloud,
  Droplets,
  EyeOff,
  HeartPulse,
  Monitor,
  Radio,
  Shield,
  ShieldCheck,
  Phone,
  ThermometerSun,
  Wind,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Solution", href: "#solution" },
  { label: "Components", href: "#components" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Index = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showPricing = hash === "#pricing";
  const showContact = hash === "#contact";
  const showCore = !showPricing && !showContact;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-red-500/10 bg-black/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-red-600/20 p-2">
              <ShieldCheck className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight">
                MINE <span className="text-red-500">ARMOR</span>
              </p>
              <p className="text-xs text-gray-400">Smart Safety & Monitoring</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="rounded-full bg-red-600 px-6 hover:bg-red-700">
            <a href="#solution">LOGIN</a>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {showCore && (
          <>
            {/* SLIDE 1: HERO */}
            <section className="slide-page relative flex min-h-screen items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={mineArmourHero}
                  alt="Mine"
                  className="h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/50 to-black" />
              </div>

              <div className="container relative z-10 text-center">
                <div className="mb-6 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-6 py-2 text-sm font-bold text-red-500">
                  <span className="mr-2">●</span> NEXT-GEN MINING SAFETY
                </div>

                <h1 className="mb-6 text-7xl font-black tracking-tight md:text-8xl lg:text-9xl">
                  MINE <span className="text-red-500">ARMOR</span>
                </h1>

                <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300">
                  Advanced IoT protection system monitoring environmental hazards and miner health in real-time. Zero harm. Maximum efficiency.
                </p>

                <Button size="lg" className="rounded-full bg-red-600 px-8 py-6 text-lg hover:bg-red-700">
                  <a href="#challenge">View System Overview</a>
                </Button>

                <div className="mt-16 grid gap-8 sm:grid-cols-3">
                  <div className="flex flex-col items-center gap-3">
                    <Shield className="h-8 w-8 text-red-500" />
                    <p className="text-sm font-bold uppercase tracking-wider">REAL-TIME PROTECTION</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <HeartPulse className="h-8 w-8 text-red-500" />
                    <p className="text-sm font-bold uppercase tracking-wider">HEALTH MONITORING</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Radio className="h-8 w-8 text-red-500" />
                    <p className="text-sm font-bold uppercase tracking-wider">SMART CONNECTIVITY</p>
                  </div>
                </div>
              </div>

            </section>

            {/* SLIDE 2: THE CHALLENGE */}
            <section id="challenge" className="slide-page bg-black py-20">
              <div className="container">
                <div className="mb-16 text-center">
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">THE CHALLENGE</p>
                  <h2 className="mb-6 text-5xl font-bold md:text-6xl">Why Mining Safety Needs an Upgrade</h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Underground mining remains one of the most hazardous professions. Traditional safety measures are often reactive rather than proactive.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="group rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:border-red-900 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                    <div className="mb-6 inline-flex rounded-xl bg-red-600/10 p-4 text-red-500">
                      <AlertTriangle className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold">Toxic Gas Exposure</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Miners face invisible threats from Methane, CO, and other hazardous gases that can cause immediate health risks or explosions.
                    </p>
                  </div>

                  <div className="group rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:border-red-900 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                    <div className="mb-6 inline-flex rounded-xl bg-red-600/10 p-4 text-red-500">
                      <HeartPulse className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold">Health Monitoring Gaps</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Traditional systems lack continuous tracking of vital signs, leaving heat stress and cardiac issues undetected until it's too late.
                    </p>
                  </div>

                  <div className="group rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:border-red-900 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                    <div className="mb-6 inline-flex rounded-xl bg-red-600/10 p-4 text-red-500">
                      <Clock className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold">Delayed Response</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Without real-time data, emergency teams lose critical minutes identifying the location and nature of underground incidents.
                    </p>
                  </div>

                  <div className="group rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:border-red-900 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                    <div className="mb-6 inline-flex rounded-xl bg-red-600/10 p-4 text-red-500">
                      <EyeOff className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold">Poor Visibility</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Harsh underground conditions and dust make visual monitoring difficult, requiring sensor-based reliance for safety.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* SLIDE 3: TECHNICAL SPECS */}
            <section id="capabilities" className="slide-page bg-black py-20">
              <div className="container">
                <div className="mb-16 text-center">
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">TECHNICAL SPECS</p>
                  <h2 className="mb-6 text-5xl font-bold md:text-6xl">Sensor & Safety Capabilities</h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Precision sensors calibrated for the toughest environments.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:scale-105">
                    <div className="mb-6 inline-flex rounded-xl bg-red-600/20 p-4">
                      <ThermometerSun className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">Temperature</h3>
                    <p className="text-sm text-gray-400">
                      Monitors ambient heat to prevent heat stroke and equipment overheating.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:scale-105">
                    <div className="mb-6 inline-flex rounded-xl bg-blue-600/20 p-4">
                      <Droplets className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">Humidity</h3>
                    <p className="text-sm text-gray-400">
                      Tracks moisture levels to ensure breathable and safe working conditions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:scale-105">
                    <div className="mb-6 inline-flex rounded-xl bg-gray-600/20 p-4">
                      <Wind className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">Gas Detection (MQ-5)</h3>
                    <p className="text-sm text-gray-400">
                      Identifies presence of LPG, Natural Gas, and Coal Gas to prevent explosions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:scale-105">
                    <div className="mb-6 inline-flex rounded-xl bg-pink-600/20 p-4">
                      <HeartPulse className="h-8 w-8 text-pink-500" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">Heart Rate & SpO₂</h3>
                    <p className="text-sm text-gray-400">
                      Continuous vital sign tracking to detect physical distress early.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all hover:scale-105">
                    <div className="mb-6 inline-flex rounded-xl bg-purple-600/20 p-4">
                      <Zap className="h-8 w-8 text-purple-500" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">Stress (GSR)</h3>
                    <p className="text-sm text-gray-400">
                      Galvanic Skin Response sensors to detect high stress or panic states.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SLIDE 4: CORE COMPONENTS */}
            <section id="components" className="slide-page bg-black py-20">
              <div className="container">
                <div className="mb-16 text-center">
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">SYSTEM ARCHITECTURE</p>
                  <h2 className="mb-6 text-5xl font-bold md:text-6xl">Core Components</h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Three integrated layers working in harmony to ensure maximum safety.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8">
                    <img
                      src={mineArmourHero}
                      alt="Smart Helmet"
                      className="mb-6 h-48 w-full rounded-xl object-cover"
                    />
                    <h3 className="mb-4 text-2xl font-bold">Smart Helmet & Suit</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Multi-gas detection (LPG, Methane, H2)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Vital signs monitoring (HR, SpO₂)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Stress level detection (GSR)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Real-time GPS tracking
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-red-900 bg-gradient-to-b from-red-950/50 to-black p-8">
                    <div className="mb-6 flex h-48 items-center justify-center rounded-xl border border-red-900 bg-black">
                      <Monitor className="h-24 w-24 text-red-500" />
                    </div>
                    <div className="mb-4 inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase">
                      CENTRAL HUB
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">Control & Monitoring</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Web-based central dashboard
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Visual safety status indicators
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Instant alert notification system
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Historical data analysis
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8">
                    <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gray-900">
                      <Cloud className="h-24 w-24 text-gray-400" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">Communication Layer</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Wireless data transmission
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Secure backend processing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Scalable cloud architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-red-500">●</span>
                        Fail-safe connectivity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SLIDE 5: THE SOLUTION */}
            <section id="solution" className="slide-page bg-black py-20">
              <div className="container">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div>
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">THE SOLUTION</p>
                    <h2 className="mb-6 text-5xl font-bold md:text-6xl">
                      Comprehensive <span className="text-red-500">Safety Ecosystem</span>
                    </h2>
                    <p className="mb-8 text-lg text-gray-400">
                      Mine Armour isn't just a sensor—it's a complete safety ecosystem designed to protect lives underground. By integrating wearable technology with robust cloud monitoring, we provide a 360-degree view of miner safety.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-semibold">Continuous Environmental Monitoring</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <HeartPulse className="mt-1 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-semibold">Real-time Miner Health Tracking</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="mt-1 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-semibold">Automated Safety Alerts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Monitor className="mt-1 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-semibold">Centralized Monitoring Dashboard</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="mt-1 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-semibold">Rugged Design for Harsh Conditions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Radio className="mt-1 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-semibold">Low-Latency Data Transmission</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <SystemStatusCard />
                  </div>
                </div>

              </div>
            </section>
          </>
        )}

        {showPricing && (
          <section id="pricing" className="slide-page bg-black py-20">
            <div className="container">
              <div className="mb-16 text-center">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">INVESTMENT</p>
                <h2 className="mb-6 text-5xl font-bold md:text-6xl">Pricing & Plans</h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                  Scalable safety solutions for mines of all sizes.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
                <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8">
                  <p className="mb-2 text-sm font-bold text-gray-400">Basic</p>
                  <p className="mb-6 text-4xl font-bold">₹26,999</p>
                  <p className="mb-6 text-sm text-gray-400">Entry-level safety suite for small mines and testing environments.</p>
                  <ul className="mb-8 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Single Helmet Integration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Basic Gas Detection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Real-time Tracking
                    </li>
                  </ul>
                  <Button className="w-full rounded-full border border-gray-700 bg-transparent hover:bg-gray-900">
                    Get Started
                  </Button>
                </div>

                <div className="rounded-2xl border-2 border-red-600 bg-gradient-to-b from-red-950/50 to-black p-8">
                  <div className="mb-2 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase">
                    MOST POPULAR
                  </div>
                  <p className="mb-2 text-sm font-bold text-gray-400">Pro</p>
                  <p className="mb-6 text-4xl font-bold">₹35,999</p>
                  <p className="mb-6 text-sm text-gray-400">Priority rescue alerts, advanced gas detection, and full integration.</p>
                  <ul className="mb-8 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Advanced Gas Sensors
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Vital Signs Monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Emergency Alerts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Priority Support
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Data Analytics
                    </li>
                  </ul>
                  <Button className="w-full rounded-full bg-red-600 hover:bg-red-700">
                    Get Started
                  </Button>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8">
                  <p className="mb-2 text-sm font-bold text-gray-400">Elite</p>
                  <p className="mb-6 text-4xl font-bold">₹44,999</p>
                  <p className="mb-6 text-sm text-gray-400">Premium solution for large-scale mining operations.</p>
                  <ul className="mb-8 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Full Suite Integration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      AI Risk Prediction
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Multi-site Deployment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      24/7 Dedicated Support
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✓</span>
                      Custom API Access
                    </li>
                  </ul>
                  <Button className="w-full rounded-full border border-gray-700 bg-transparent hover:bg-gray-900">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {showContact && (
          <section id="contact" className="slide-page bg-black py-20">
            <div className="container">
              <div className="mb-12 text-center">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">Contact Us</p>
                <h2 className="mb-4 text-5xl font-bold md:text-6xl">Speak With Our Team</h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                  Reach out for system demos, deployment timelines, or emergency response coordination. We respond quickly to every request.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-red-600/10 px-4 py-2 text-red-400">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Primary Contact</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Ranjhana .S</h3>
                  <p className="mb-6 text-sm text-gray-300">Strategic liaison for deployments, demos, and rapid coordination.</p>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3 rounded-xl border border-gray-800/80 bg-gray-900/60 px-4 py-3">
                      <Phone className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-gray-400">Direct Line</p>
                        <p className="text-lg font-semibold text-white">95971 95185</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-800/80 bg-gray-900/60 px-4 py-3">
                      <Mail className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-lg font-semibold text-white">ranjhanaranju7@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full bg-red-600 px-6 hover:bg-red-700">
                      <a href="tel:9597195185">Call Now</a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border-red-700 text-red-400 hover:bg-red-950/40">
                      <a href="mailto:ranjhanaranju7@gmail.com">Email Us</a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 lg:col-span-2">
                  <div className="mb-6 flex items-center gap-3 text-red-400">
                    <Activity className="h-5 w-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em]">Always-On Support</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Response Windows</p>
                      <div className="rounded-xl border border-gray-800/70 bg-black/40 px-4 py-3 text-sm text-gray-300">
                        <p className="font-semibold text-white">24/7 Critical Alerts</p>
                        <p className="text-gray-400">Immediate triage for safety incidents and dashboard outages.</p>
                      </div>
                      <div className="rounded-xl border border-gray-800/70 bg-black/40 px-4 py-3 text-sm text-gray-300">
                        <p className="font-semibold text-white">Same-Day Demos</p>
                        <p className="text-gray-400">Book a walkthrough of real-time monitoring within hours.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.25em] text-gray-400">What To Include</p>
                      <div className="rounded-xl border border-gray-800/70 bg-black/40 px-4 py-3 text-sm text-gray-300">
                        <p className="font-semibold text-white">Site Details</p>
                        <p className="text-gray-400">Mine size, crew count, and current safety stack.</p>
                      </div>
                      <div className="rounded-xl border border-gray-800/70 bg-black/40 px-4 py-3 text-sm text-gray-300">
                        <p className="font-semibold text-white">Urgency Level</p>
                        <p className="text-gray-400">Tell us if you need immediate deployment or evaluation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-800 bg-black/50 px-4 py-3 text-center text-sm text-gray-300">
                      <p className="text-xs uppercase tracking-[0.25em] text-red-400">Location</p>
                      <p className="text-base font-semibold text-white">On-prem & remote</p>
                    </div>
                    <div className="rounded-xl border border-gray-800 bg-black/50 px-4 py-3 text-center text-sm text-gray-300">
                      <p className="text-xs uppercase tracking-[0.25em] text-red-400">Response</p>
                      <p className="text-base font-semibold text-white"><span className="text-red-500">Live</span> response</p>
                    </div>
                    <div className="rounded-xl border border-gray-800 bg-black/50 px-4 py-3 text-center text-sm text-gray-300">
                      <p className="text-xs uppercase tracking-[0.25em] text-red-400">Coverage</p>
                      <p className="text-base font-semibold text-white">Global support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-10">
        <div className="container space-y-8">
          <div className="text-center text-sm text-gray-600">
            <p>© 2026 Mine Armor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
