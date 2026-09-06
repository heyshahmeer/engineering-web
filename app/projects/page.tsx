import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { projects } from '@/app/lib/site'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative min-h-[420px] overflow-hidden bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial project portfolio"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-amber-400">Projects</div>
              <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                PROJECT PORTFOLIO.
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="industrial-panel overflow-hidden bg-white">
                <div className="relative h-72 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">Project {index + 1}</div>
                  <h2 className="mt-4 font-display text-3xl text-stone-950">{project.title}</h2>
                  <div className="mt-6 space-y-4 border-t border-stone-200 pt-5 text-sm text-stone-700">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Location</div>
                      <div className="mt-2 font-medium">{project.location}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Scope</div>
                      <div className="mt-2 font-medium">{project.scope}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Status</div>
                      <div className="mt-2 font-medium">{project.status}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-stone-950 text-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="section-kicker !text-amber-400">Project enquiry</div>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl text-white">
                  NEED A SOLUTION FOR YOUR NEXT DEVELOPMENT?
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-amber-500 bg-amber-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400">
                Start a conversation
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
