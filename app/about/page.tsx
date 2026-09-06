import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import { company, principles } from '@/app/lib/site'

const stats = [
  ['Engineering', 'Technical delivery'],
  ['Construction', 'Site execution'],
  ['Operations', 'Asset continuity'],
  ['Partnership', 'Client alignment'],
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative min-h-[560px] overflow-hidden bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial construction and engineering site"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-amber-400">
                About the company
              </div>
              <h1 className="mt-5 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                ENGINEERING WITH
                <span className="mt-2 block text-stone-300">PURPOSE.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
                {company.shortDescription}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-stone-100">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map(([title, label]) => (
              <div key={title} className="border-r border-stone-300 px-3 py-6 last:border-r-0">
                <div className="text-2xl font-semibold text-stone-950">{title}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-stone-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="section-kicker">01 / Overview</div>
              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                A CONTRACTOR BUILT AROUND RELIABLE EXECUTION.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-stone-700">
              <p>
                {company.name} provides engineering, construction and project support for industrial, commercial and infrastructure-focused requirements.
              </p>
              <p>
                Our approach balances technical review, site execution and disciplined communication. From early planning through completion, the emphasis remains on workable solutions, safe delivery and dependable performance.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600">
                Explore capabilities
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-stone-950">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="section-kicker !text-amber-400">02 / Principles</div>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                STANDARDS THAT GUIDE EVERY PROJECT.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {principles.map((item, index) => (
                <div key={item.title} className="border border-stone-800 bg-stone-900 p-7">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400">
                    0{index + 1}
                  </div>
                  <h3 className="mt-8 font-display text-3xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="section-kicker">03 / Why Clients Choose Us</div>
              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                BUILT AROUND ACCOUNTABILITY.
              </h2>

              <div className="mt-8 space-y-4 text-base text-stone-700">
                {[
                  'Dedicated project coordination',
                  'Quality-focused execution',
                  'Clear communication throughout delivery',
                  'Safety-led site operations',
                  'Practical maintenance and remediation support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial project progress review"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-stone-200/60">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="section-kicker">04 / Next Steps</div>
                <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                  READY TO DISCUSS YOUR PROJECT?
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-stone-900 bg-stone-900 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-transparent hover:text-stone-900">
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