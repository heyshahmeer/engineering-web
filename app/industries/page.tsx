import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { industries } from '@/app/lib/site'
import { ArrowRight } from 'lucide-react'

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative min-h-[420px] overflow-hidden bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial and infrastructure sector overview"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-amber-400">Industries</div>
              <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                SECTORS WE SUPPORT.
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={industry} className="industrial-panel min-h-52 bg-white p-6">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-600">0{index + 1}</div>
                <h2 className="mt-14 font-display text-3xl text-stone-950">{industry}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-stone-950 text-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="section-kicker !text-amber-400">Need a sector-specific solution?</div>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl text-white">
                  DISCUSS YOUR OPERATIONAL REQUIREMENTS.
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-amber-500 bg-amber-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
