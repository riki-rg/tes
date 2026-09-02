import { ArrowRight, Rocket, Shield, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              ✦
            </div>
            LandingModern
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a
              href="#testimoni"
              className="hover:text-primary transition-colors"
            >
              Testimoni
            </a>
          </nav>
          <Button size="sm">Get Started</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6 bg-muted">
          <Sparkles className="h-3 w-3" /> Baru — Landing page modern siap
          deploy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Bangun landing page <span className="text-primary">modern</span> dalam
          hitungan menit
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Stack React + Vite + Tailwind + shadcn/ui. TypeScript strict, Biome,
          Vitest & Playwright sudah terkonfigurasi. Tinggal koding fiturmu.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button size="lg">
            Mulai Sekarang <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Lihat Demo
          </Button>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-6"
      >
        {[
          {
            icon: Zap,
            title: "Super Cepat",
            desc: "Vite HMR instan, Tailwind v4, build optimal untuk Cloudflare Pages.",
          },
          {
            icon: Shield,
            title: "Type-Safe",
            desc: "TypeScript strict + Biome. Bug ketangkap sebelum runtime.",
          },
          {
            icon: Rocket,
            title: "Siap Deploy",
            desc: "CI GitHub Actions + Husky hooks + Playwright E2E sudah include.",
          },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border p-6 bg-card">
            <f.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          Dibuat dengan ❤️ oleh rizz —{" "}
          <span className="font-mono">pnpm dev</span> untuk memulai.
        </div>
      </footer>
    </div>
  )
}

export default App
