'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { capabilities } from '@/app/lib/site'

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative min-h-[520px] overflow-hidden bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial construction and engineering site"
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
                Engineering capabilities
              </div>
              <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                BUILT FOR PERFORMANCE.
                <span className="mt-2 block text-stone-200">DESIGNED TO LAST.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
                Technical construction and maintenance solutions for industrial, commercial and infrastructure-led projects.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.18em] text-stone-600">
              <span>Our service portfolio</span>
              <span>Engineering • Construction • Maintenance</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {capabilities.map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`industrial-panel group overflow-hidden bg-white ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <Link href={`/services/${service.slug}`} className={`grid ${index === 0 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-[360px]' : 'h-64'}`}>
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                    <span className="absolute left-6 top-6 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <h2 className="font-display text-3xl text-stone-950">{service.title}</h2>
                    <p className="mt-4 text-base leading-7 text-stone-700">{service.description}</p>

                    <div className="mt-7 space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-stone-700">
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

        <section className="bg-stone-950 text-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="section-kicker !text-amber-400">Need a technical assessment?</div>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl text-white">
                  TELL US WHAT YOU'RE BUILDING.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                  We can review the project requirement, clarify the scope and prepare a practical proposal tailored to the delivery environment.
                </p>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-3 border border-amber-500 bg-amber-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400">
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