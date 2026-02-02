import { useEffect } from "react";
import mineArmourHero from "@/assets/mine-armour-hero.jpg";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, Target, Lightbulb, Award, ArrowRight } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section - Mine Chamber Entry */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={mineArmourHero}
              alt="Mine chamber"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
            
            {/* Spotlight Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-red-950/30 via-transparent to-transparent opacity-60" />
            
            {/* Dust Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="particle particle-1" />
              <div className="particle particle-2" />
              <div className="particle particle-3" />
              <div className="particle particle-4" />
              <div className="particle particle-5" />
            </div>
          </div>

          <div className="container relative z-10 text-center">
            <div className="engraved-text mb-6 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              About Mine Armor
            </div>
            <h1 className="engraved-heading headline-glow mb-6 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Built for Those Who<br />
              <span className="text-red-500">Go Mining</span>
            </h1>
            <p className="fade-in-slow mx-auto max-w-2xl text-lg text-gray-400">
              Every shift in a mine is a calculated risk. We're building technology to make sure everyone comes back.
            </p>
          </div>
        </section>

        {/* Mission Statement - Engraved Widget */}
        <section className="relative py-20">
          <div className="container">
            <div className="reveal-on-scroll mx-auto max-w-4xl">
              <div className="mine-chamber-card group relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-b from-gray-900/80 to-black/90 p-10 backdrop-blur-sm">
                {/* Rock texture overlay */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{
                  backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E')"
                }} />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-red-600/20 p-3">
                      <Target className="h-8 w-8 text-red-500" />
                    </div>
                    <h2 className="text-3xl font-bold">Why We Exist</h2>
                  </div>
                  <p className="mb-4 text-lg leading-relaxed text-gray-300">
                    Underground mining is one of the world's most dangerous professions. Gas leaks go undetected. Emergency response is often too slow. Miners' health conditions are invisible until it's too late. Rescue teams lack real-time visibility.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    <span className="font-semibold text-red-400">Mine Armor exists because lives depend on seconds.</span> We believe that in 2026, no miner should enter a tunnel without intelligent protection. Every life matters, and technology must serve those who risk theirs for essential work.
                  </p>
                </div>

                {/* Spotlight glow effect */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl transition-all group-hover:bg-red-600/20" />
              </div>
            </div>
          </div>
        </section>

        {/* The Problems - Grid of Danger Widgets */}
        <section className="relative bg-gradient-to-b from-black to-red-950/20 py-20">
          <div className="container">
            <div className="reveal-on-scroll mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">The Reality</p>
              </div>
              <h2 className="text-4xl font-bold">Underground Dangers We're Solving</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="reveal-on-scroll danger-card group rounded-xl border border-red-900/40 bg-black/60 p-6 backdrop-blur-sm transition-all hover:border-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                <div className="mb-4 text-5xl">💨</div>
                <h3 className="mb-3 text-xl font-bold">Invisible Threats</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Methane, CO, and toxic gases accumulate silently. Traditional detection is manual and reactive—by the time alarms sound, it's often too late.
                </p>
              </div>

              <div className="reveal-on-scroll danger-card group rounded-xl border border-red-900/40 bg-black/60 p-6 backdrop-blur-sm transition-all hover:border-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]" style={{ animationDelay: "0.1s" }}>
                <div className="mb-4 text-5xl">⏱️</div>
                <h3 className="mb-3 text-xl font-bold">Time Is Critical</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  In emergencies, every second counts. Without real-time location and health data, rescue teams lose precious minutes that could save lives.
                </p>
              </div>

              <div className="reveal-on-scroll danger-card group rounded-xl border border-red-900/40 bg-black/60 p-6 backdrop-blur-sm transition-all hover:border-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]" style={{ animationDelay: "0.2s" }}>
                <div className="mb-4 text-5xl">❤️</div>
                <h3 className="mb-3 text-xl font-bold">Hidden Health Risks</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Heart stress, oxygen deprivation, and heat exhaustion show no warning signs until collapse. Continuous monitoring can prevent tragedy.
                </p>
              </div>

              <div className="reveal-on-scroll danger-card group rounded-xl border border-red-900/40 bg-black/60 p-6 backdrop-blur-sm transition-all hover:border-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]" style={{ animationDelay: "0.3s" }}>
                <div className="mb-4 text-5xl">🔦</div>
                <h3 className="mb-3 text-xl font-bold">Zero Visibility</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Dust, darkness, and unstable structures make visual monitoring impossible. Sensor-based safety becomes the only reliable defense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Widget */}
        <section className="relative py-20">
          <div className="container">
            <div className="reveal-on-scroll mx-auto max-w-4xl">
              <div className="mine-chamber-card rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/90 p-10 backdrop-blur-sm">
                <div className="mb-8 flex items-center gap-3">
                  <div className="rounded-xl bg-red-600/20 p-3">
                    <Lightbulb className="h-8 w-8 text-red-500" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Philosophy</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-3xl font-black text-red-500">01</div>
                    <h3 className="text-lg font-bold">Prevention Over Reaction</h3>
                    <p className="text-sm text-gray-400">
                      We detect hazards before they escalate. Real-time sensing prevents disasters instead of responding to them.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-black text-red-500">02</div>
                    <h3 className="text-lg font-bold">Intelligence Over Reports</h3>
                    <p className="text-sm text-gray-400">
                      Manual logs and periodic checks aren't enough. Continuous data streams create a living safety map.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-black text-red-500">03</div>
                    <h3 className="text-lg font-bold">Built for Reality</h3>
                    <p className="text-sm text-gray-400">
                      Not adapted from consumer tech—engineered specifically for harsh underground environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story Widget */}
        <section className="relative bg-gradient-to-b from-red-950/20 to-black py-20">
          <div className="container">
            <div className="reveal-on-scroll mx-auto max-w-4xl">
              <div className="mine-chamber-card relative overflow-hidden rounded-2xl border border-red-900/30 bg-black/80 p-10 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className="mb-6">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">How It Started</p>
                    <h2 className="text-3xl font-bold">Born from Real-World Risk</h2>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      Mine Armor began with a simple question: <span className="font-semibold text-white">Why do miners still rely on outdated safety systems when IoT and embedded sensing have advanced so far?</span>
                    </p>
                    
                    <p className="leading-relaxed">
                      Inspired by documented mining tragedies and the clear gap between available technology and on-ground reality, we built a prototype safety ecosystem using ESP32 microcontrollers, multi-gas sensors, vital sign monitors, and GPS tracking—all integrated into a wearable platform.
                    </p>

                    <p className="leading-relaxed">
                      We combined <span className="text-red-400 font-semibold">embedded systems engineering, cloud architecture, and real-time alerting</span> to create something that doesn't just collect data—it actively protects lives.
                    </p>

                    <div className="mt-8 flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4">
                      <Award className="h-8 w-8 text-red-500" />
                      <div>
                        <p className="font-semibold">Early Validation</p>
                        <p className="text-sm text-gray-400">
                          Recognized through hackathons and technical showcases for innovation in industrial IoT safety.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision - Future Forward Widget */}
        <section className="relative py-20">
          <div className="container">
            <div className="reveal-on-scroll mx-auto max-w-4xl text-center">
              <div className="mine-chamber-card rounded-2xl border border-red-900/30 bg-gradient-to-b from-gray-900/80 to-black/90 p-12 backdrop-blur-sm">
                <div className="mb-8">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">Looking Ahead</p>
                  <h2 className="mb-6 text-4xl font-bold">The Future We're Building</h2>
                </div>

                <div className="mb-8 space-y-4 text-lg text-gray-300">
                  <p>
                    We envision <span className="font-semibold text-white">zero preventable mining accidents</span>—a world where intelligent infrastructure anticipates danger before humans encounter it.
                  </p>
                  
                  <p>
                    Where every underground worker is connected, protected, and visible. Where rescue teams have instant access to real-time health and location data. Where mines operate not just efficiently, but <span className="text-red-400 font-semibold">humanely</span>.
                  </p>
                </div>

                <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <Button size="lg" className="group w-full rounded-full bg-red-600 px-8 hover:bg-red-700 sm:w-auto" asChild>
                    <a href="/#solution">
                      Explore Our Solution
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full rounded-full border-gray-700 bg-transparent hover:bg-gray-900 sm:w-auto" asChild>
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-8">
        <div className="container text-center text-sm text-gray-600">
          <p>© 2026 Mine Armor. Building technology that protects lives underground.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
