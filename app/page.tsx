'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  FileText,
  ShieldCheck,
  Users,
} from 'lucide-react'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

import {
  services,
  industries,
  projects,
} from '@/app/lib/site'

const companyFacts = [
  {
    value: '2005',
    label: 'Established',
  },
  {
    value: 'KSA',
    label: 'Kingdom of Saudi Arabia',
  },
  {
    value: 'ISO 9001',
    label: 'Quality Management',
  },
  {
    value: 'ISO 45001',
    label: 'Occupational HSE',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial construction site"
            className="h-full w-full object-cover"
          />

          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-amber-400">
              Electromechanical & Civil
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-8xl">
              ENGINEERING & CONSTRUCTION
              <span className="mt-3 block text-stone-200">
                BUILT FOR INDUSTRY.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">
              AUIS delivers
              electromechanical, civil and industrial contracting services
              across demanding project environments in Saudi Arabia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border border-amber-500 bg-amber-500 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-950 transition hover:bg-transparent hover:text-amber-400"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/40 bg-white/5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMPANY FACTS
      ========================================================= */}

      <section className="border-b border-stone-300 bg-stone-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {companyFacts.map((item) => (
            <div
              key={item.label}
              className="border-r border-stone-300 px-5 py-8 last:border-r-0"
            >
              <div className="text-2xl font-semibold text-stone-950 lg:text-3xl">
                {item.value}
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-stone-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="section-kicker">
              01 / About AUIS
            </div>

            <h2 className="mt-6 font-display text-4xl leading-tight text-stone-950 sm:text-5xl">
              ESTABLISHED EXPERIENCE.
              <span className="block text-stone-600">
                RELIABLE DELIVERY.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-700">
            <p>
              AUIS is a qualified
              contractor in the Kingdom of Saudi Arabia, directed by a highly
              qualified and experienced technical team.
            </p>

            <p>
              Since its establishment in 2005, AUIS has developed its position
              in the contracting business through skilled workers,
              professional management and a commitment to quality and safety.
            </p>

            <p>
              The company has successfully accomplished projects for national
              and multinational companies across Oil & Gas, Petrochemicals,
              Fertilizer, Mining & Minerals, Power & Water and Transportation
              Systems.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600"
            >
              About the company
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-stone-950 text-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-kicker !text-amber-400">
                02 / Services
              </div>

              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                ENGINEERING AND
                <span className="block text-stone-400">
                  CONSTRUCTION SERVICES.
                </span>
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-stone-800 bg-stone-900 transition hover:border-amber-500/50"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 to-transparent" />

                  <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-amber-400">
                    {service.number}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-amber-400">
                    View service
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker">
              03 / Projects
            </div>

            <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
              SELECTED PROJECT EXPERIENCE.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600"
          >
            View project portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden border border-stone-300 bg-white"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
              </div>

              <div className="p-7">
                <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-amber-600">
                  Project {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="mt-4 font-display text-2xl text-stone-950">
                  {project.title}
                </h3>

                <div className="mt-5 border-t border-stone-200 pt-5 text-sm text-stone-600">
                  {project.scope}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          CLIENTS
          IMAGE SPACE — REPLACE LATER
      ========================================================= */}

      <section className="border-y border-stone-300 bg-stone-200/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="section-kicker">
                04 / Clients
              </div>

              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                TRUSTED BY
                <span className="block text-stone-600">
                  INDUSTRY LEADERS.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-stone-600">
                AUIS has delivered services for national and multinational
                organizations across critical industrial and infrastructure
                sectors.
              </p>

              <Link
                href="/clients"
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600"
              >
                View all clients
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* CLIENT IMAGE SPACE */}
            <div className="relative aspect-[16/9] overflow-hidden border border-stone-300 bg-stone-100">
              <img
                src="/images/clients/clients-placeholder.jpg"
                alt="AUIS clients and partners"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-stone-950/10">
                <div className="border border-stone-400 bg-stone-100/90 px-8 py-5 text-center backdrop-blur-sm">
                  <Users className="mx-auto h-7 w-7 text-stone-500" />

                  <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">
                    Client Logos / Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className="bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-kicker">
              05 / Industries
            </div>

            <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
              EXPERIENCE ACROSS
              <span className="block text-stone-600">
                CRITICAL INDUSTRIES.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="flex min-h-32 items-end justify-between border border-stone-300 bg-stone-100 p-6"
              >
                <div className="text-lg font-medium text-stone-900">
                  {industry}
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUALITY / HSE / ISO
      ========================================================= */}

      <section className="bg-stone-950 text-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-kicker !text-amber-400">
              06 / Quality & Safety
            </div>

            <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
              QUALITY, SAFETY AND
              <span className="block text-stone-400">
                RESPONSIBLE DELIVERY.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {/* QUALITY */}

            <div className="border border-stone-800 bg-stone-900 p-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400">
                Quality
              </div>

              <h3 className="mt-6 font-display text-2xl text-white">
                QUALITY MANAGEMENT
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-400">
                Maintaining high levels of quality and efficiency,
                complying with applicable standards and regulations, and
                involving the entire workforce in quality performance.
              </p>
            </div>

            {/* HSE */}

            <div className="border border-stone-800 bg-stone-900 p-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400">
                HSE
              </div>

              <h3 className="mt-6 font-display text-2xl text-white">
                HEALTH & SAFETY
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-400">
                Safe working practices remain central to our operations,
                supported by an HSE Manual and Safety Handbook for our
                workforce, subcontractors and clients.
              </p>
            </div>

            {/* CERTIFICATIONS */}

            <div className="border border-stone-800 bg-stone-900 p-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400">
                Certifications
              </div>

              <h3 className="mt-6 font-display text-2xl text-white">
                ISO MANAGEMENT SYSTEMS
              </h3>

              <div className="mt-5 space-y-3 text-sm text-stone-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  ISO 9001:2015
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  ISO 14001:2015
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  ISO 45001:2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATIONS
          IMAGE SPACE — REPLACE LATER
      ========================================================= */}

      <section className="border-b border-stone-300 bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* CERTIFICATE IMAGE SPACE */}

            <div className="relative aspect-[4/3] overflow-hidden border border-stone-300 bg-stone-200">
              <img
                src="/images/certifications/certifications-placeholder.jpg"
                alt="AUIS certifications"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-stone-950/10">
                <div className="border border-stone-400 bg-stone-100/90 px-8 py-5 text-center backdrop-blur-sm">
                  <ShieldCheck className="mx-auto h-7 w-7 text-stone-500" />

                  <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">
                    Certification Image
                  </div>
                </div>
              </div>
            </div>

            {/* CERTIFICATION CONTENT */}

            <div>
              <div className="section-kicker">
                07 / Certifications
              </div>

              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                CERTIFIED
                <span className="block text-stone-600">
                  QUALITY SYSTEMS.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-stone-600">
                AUIS maintains documented management systems supporting
                quality, environmental responsibility and occupational
                health and safety.
              </p>

              <div className="mt-8 space-y-4">

                <div className="border-l-2 border-amber-500 pl-5">
                  <div className="font-semibold text-stone-950">
                    ISO 9001:2015
                  </div>

                  <div className="mt-1 text-xs text-stone-500">
                    Quality Management System
                  </div>
                </div>

                <div className="border-l-2 border-amber-500 pl-5">
                  <div className="font-semibold text-stone-950">
                    ISO 14001:2015
                  </div>

                  <div className="mt-1 text-xs text-stone-500">
                    Environmental Management System
                  </div>
                </div>

                <div className="border-l-2 border-amber-500 pl-5">
                  <div className="font-semibold text-stone-950">
                    ISO 45001:2018
                  </div>

                  <div className="mt-1 text-xs text-stone-500">
                    Occupational Health & Safety
                  </div>
                </div>

              </div>

              <Link
                href="/certifications"
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600"
              >
                View certifications
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY DOCUMENTS
          IMAGE SPACE — REPLACE LATER
      ========================================================= */}

      <section className="bg-stone-200/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* CONTENT */}

            <div>
              <div className="section-kicker">
                08 / Company Documents
              </div>

              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                CORPORATE
                <span className="block text-stone-600">
                  DOCUMENTATION.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-stone-600">
                Access approved corporate, quality, HSE and company
                documentation relating to AUIS&apos;s operations and
                qualifications.
              </p>

              <Link
                href="/documents"
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600"
              >
                View company documents
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* DOCUMENT IMAGE SPACE */}

            <div className="relative aspect-[16/10] overflow-hidden border border-stone-300 bg-stone-100">
              <img
                src="/images/documents/documents-placeholder.jpg"
                alt="AUIS corporate documents"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-stone-950/10">
                <div className="border border-stone-400 bg-stone-100/90 px-8 py-5 text-center backdrop-blur-sm">
                  <FileText className="mx-auto h-7 w-7 text-stone-500" />

                  <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">
                    Corporate Documents
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="border border-stone-300 bg-stone-900 p-8 text-stone-50 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div>
              <div className="section-kicker !text-amber-400">
                09 / Contact
              </div>

              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                DISCUSS YOUR NEXT PROJECT.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-stone-300">
                Contact AUIS to discuss your engineering, construction and
                industrial project requirements.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-amber-500 bg-amber-500 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400"
              >
                Contact AUIS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}