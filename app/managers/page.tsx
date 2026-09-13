'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { team } from '@/app/lib/site'

export default function ManagersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative overflow-hidden bg-stone-950">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-800" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
              <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-400">Leadership</div>
              <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                MANAGING COMPLEX PROJECTS
                <span className="mt-2 block text-stone-300">WITH CLARITY.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
                The delivery team provides operational oversight, site discipline and stakeholder coordination for industrial and commercial environments.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="industrial-panel overflow-hidden bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">{member.role}</div>
                  <h3 className="mt-4 font-display text-3xl text-stone-950">{member.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">
                    Supporting AUIS&apos;s commitment to quality, safety and dependable project delivery.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link href="/contact" className="inline-flex flex-1 items-center justify-center gap-2 border border-stone-950 bg-stone-950 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-amber-500 hover:text-stone-950">
                      <Phone className="h-4 w-4" />
                      Contact
                    </Link>
                    <Link href="mailto:info@auis.com.sa" className="inline-flex items-center justify-center border border-stone-300 px-4 py-3 text-stone-950 transition hover:border-amber-500 hover:text-amber-600">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-stone-950 text-white p-10 sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400">Next step</div>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl">READY TO DISCUSS YOUR PROJECT?</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-amber-500 bg-amber-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}