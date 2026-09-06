'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle, ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { capabilities, company, industries, principles, projects } from '@/app/lib/site'

const stats = [
  { label: 'Project capability', value: 'Industrial' },
  { label: 'Execution scope', value: 'Multi-site' },
  { label: 'Delivery model', value: 'Turnkey' },
  { label: 'Focus', value: 'Performance' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial construction site"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-amber-400">
              {company.descriptor}
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-8xl">
              ENGINEERING SOLUTIONS
              <span className="mt-2 block text-stone-200">BUILT FOR PERFORMANCE.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">
              Delivering disciplined construction, technical oversight and reliable execution for industrial, commercial and infrastructure projects.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border border-amber-500 bg-amber-500 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-950 transition hover:bg-transparent hover:text-amber-400"
              >
                View Our Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/40 bg-white/5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-stone-300 bg-stone-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label} className="border-r border-stone-300 px-3 py-4 last:border-r-0">
              <div className="text-2xl font-semibold text-stone-950 lg:text-3xl">{item.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-stone-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="section-kicker">01 / Who We Are</div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-stone-950 sm:text-5xl">
              ENGINEERING EXPERIENCE.
              <span className="block text-stone-600">PRACTICAL EXECUTION.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-700">
            <p>
              We support complex construction and maintenance requirements with a disciplined approach to planning, coordination and site delivery.
            </p>
            <p>
              Our work combines technical review, construction oversight and reliable project management to help clients protect assets, maintain continuity and deliver outcomes with confidence.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600">
              About the company
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
              alt="Construction team reviewing work"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between border border-stone-300 bg-stone-200/60 p-8">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.23em] text-amber-600">
                Site focus
              </div>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                Industrial and commercial environments demand clarity, accountability and technical confidence from day one.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-stone-800">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Planning & coordination
              </div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-stone-800">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Execution & reporting
              </div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-stone-800">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Quality & safety
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 text-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-kicker !text-amber-400">02 / Capabilities</div>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                ENGINEERING AND CONSTRUCTION SERVICES.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400">
              Explore all capabilities
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Link key={capability.slug} href={`/services/${capability.slug}`} className="industrial-panel group flex h-full flex-col bg-stone-900 text-left">
                <div className="relative h-64 overflow-hidden">
                  <img src={capability.image} alt={capability.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  <div className="absolute left-6 top-6 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400">
                    {capability.number}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl text-white">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{capability.description}</p>
                  <div className="mt-6 space-y-3">
                    {capability.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-stone-300">
                        <CheckCircle className="h-4 w-4 text-amber-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400">
                    View capability
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker">03 / Projects</div>
            <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
              PROJECT PORTFOLIO.
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600">
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className={`industrial-panel overflow-hidden bg-white ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className={`relative ${index === 0 ? 'h-[380px]' : 'h-72'}`}>
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-amber-600">Project {index + 1}</div>
                <h3 className="mt-4 font-display text-3xl text-stone-950">{project.title}</h3>
                <div className="mt-6 grid gap-4 border-t border-stone-200 pt-5 text-sm text-stone-700 sm:grid-cols-3">
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

      <section className="bg-stone-200/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-kicker">04 / Industries</div>
              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                SECTORS WE SUPPORT.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={industry} className="industrial-panel flex min-h-40 items-end justify-between bg-stone-100 p-6">
                <div className="text-lg font-medium text-stone-900">{industry}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker">05 / Why Work With Us</div>
          <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
            DISCIPLINED DELIVERY. CLEAR ACCOUNTABILITY.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item, index) => (
            <div key={item.title} className="industrial-panel bg-white p-7">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">
                0{index + 1}
              </div>
              <h3 className="mt-5 font-display text-3xl text-stone-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-950 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="section-kicker !text-amber-400">06 / Leadership</div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl">
              MANAGING COMPLEX PROJECTS WITH CLARITY.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-300">
              The team brings operational focus to planning, site delivery and stakeholder coordination across demanding project environments.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { name: 'Project Director', label: 'Placeholder team member' },
              { name: 'Operations Manager', label: 'Placeholder team member' },
              { name: 'Site Engineer', label: 'Placeholder team member' },
            ].map((person) => (
              <div key={person.name} className="border border-stone-800 bg-stone-900 p-4">
                <div className="h-40 bg-stone-800" />
                <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-amber-400">{person.label}</div>
                <div className="mt-2 text-lg font-medium text-white">{person.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-none border border-stone-300 bg-stone-900 p-8 text-stone-50 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="section-kicker !text-amber-400">07 / Contact</div>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-stone-300">
                Let’s discuss the engineering, construction and execution requirements of your next project.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-amber-500 bg-amber-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center gap-2 border border-stone-700 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-amber-400 hover:text-amber-400">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}