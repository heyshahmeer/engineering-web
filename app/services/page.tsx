'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

import { services } from '@/app/lib/site'

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">

        {/* HERO */}
        <section className="relative min-h-[520px] overflow-hidden bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial construction and engineering"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-400">
                Industrial capabilities
              </div>

              <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                BUILT FOR COMPLEX PROJECTS.
                <span className="mt-2 block text-stone-200">
                  READY FOR DEMANDING ENVIRONMENTS.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200">
                Multi-discipline contracting capabilities covering process
                plants, mechanical equipment, pipelines, storage tanks,
                electrical and instrumentation, civil construction and
                specialized industrial systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICE STRIP */}
        <section className="border-b border-stone-300 bg-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.18em] text-stone-600">
              <span>Our service portfolio</span>
              <span>
                Process Plants • Mechanical • Pipelines • Electrical • Civil
              </span>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="section-kicker">
              What we do
            </div>

            <h2 className="mt-5 font-display text-4xl text-stone-950 sm:text-5xl">
              MULTI-DISCIPLINE CONTRACTING FOR INDUSTRIAL PROJECTS.
            </h2>

            <p className="mt-5 text-base leading-8 text-stone-600">
              AUIS provides integrated contracting capabilities across
              mechanical, electrical, instrumentation, civil and industrial
              construction disciplines.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`industrial-panel group overflow-hidden bg-white ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`grid ${
                    index === 0 ? 'lg:grid-cols-2' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? 'h-[360px]' : 'h-64'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                    <span className="absolute left-6 top-6 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <h2 className="font-display text-3xl text-stone-950">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-stone-700">
                      {service.description}
                    </p>

                    <div className="mt-7 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-stone-700"
                        >
                          <CheckCircle className="h-4 w-4 text-amber-600" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 border-t border-stone-200 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-950 transition group-hover:text-amber-600">
                      View capability
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="border-y border-stone-800 bg-stone-900 text-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>
                <div className="section-kicker !text-amber-400">
                  Project environments
                </div>

                <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                  EXPERIENCE ACROSS CRITICAL INDUSTRIES.
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-stone-700 pt-8 sm:grid-cols-3">
                {[
                  'Oil & Gas',
                  'Petrochemicals',
                  'Fertilizer',
                  'Mining & Minerals',
                  'Power & Water',
                  'Transportation Systems',
                ].map((industry) => (
                  <div
                    key={industry}
                    className="border-b border-stone-800 pb-5 text-sm uppercase tracking-[0.12em] text-stone-300"
                  >
                    {industry}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-950 text-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <div className="section-kicker !text-amber-400">
                  Need a technical assessment?
                </div>

                <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                  TELL US WHAT YOU'RE BUILDING.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                  Share your project requirements and scope. AUIS can review
                  the delivery environment and determine the appropriate
                  contracting capability for the work.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-amber-500 bg-amber-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400"
              >
                Request proposal
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

