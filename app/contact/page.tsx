'use client'

import { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { company, services } from '@/app/lib/site'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative min-h-[460px] overflow-hidden bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Construction project"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-400">
                Project enquiries
              </div>
              <h1 className="mt-5 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                LET'S DISCUSS
                <span className="mt-2 block text-stone-300">YOUR PROJECT.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="section-kicker">Send an enquiry</div>
              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                TELL US WHAT YOU NEED.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700">
                Share your project details and the delivery requirement, and we can review the next steps together.
              </p>

              {submitted ? (
                <div className="mt-10 border border-emerald-200 bg-emerald-50 p-8 text-stone-900">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                  <h3 className="mt-4 font-display text-3xl text-stone-950">Enquiry received</h3>
                  <p className="mt-2 text-stone-700">Thank you. Our team will review your enquiry and contact you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-10 space-y-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <input required name="name" placeholder="Full name" className="border border-stone-300 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500" />
                    <input required type="email" name="email" placeholder="Email address" className="border border-stone-300 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500" />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <input name="phone" placeholder="Phone number" className="border border-stone-300 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500" />
                    <select name="projectType" className="border border-stone-300 bg-white px-5 py-4 text-sm text-stone-700 outline-none transition focus:border-amber-500">
                      <option value="">Select project type</option>
                      {services.map((service) => (
                        <option key={service.slug}>{service.title}</option>
                      ))}
                    </select>
                  </div>

                  <textarea required name="message" rows={7} placeholder="Describe your project, site, scope or requirement..." className="w-full resize-none border border-stone-300 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500" />

                  <button type="submit" className="inline-flex items-center gap-3 border border-stone-950 bg-stone-950 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-amber-500 hover:text-stone-950">
                    Submit enquiry
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            <aside className="border-t-2 border-amber-500 pt-6">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500">Contact</div>
              <div className="mt-8 space-y-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Phone</div>
                  <div className="mt-2 text-lg font-medium text-stone-950">{company.phone}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Email</div>
                  <div className="mt-2 text-lg font-medium text-stone-950">{company.email}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Location</div>
                  <div className="mt-2 text-base leading-7 text-stone-700">{company.location}<br />{company.address}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Hours</div>
                  <div className="mt-2 text-base leading-7 text-stone-700">{company.hours}</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-amber-500">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900/70">Response capability</div>
              <div className="mt-2 text-2xl font-medium text-stone-950">Need a rapid project review? Talk to our team.</div>
            </div>

            <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center justify-center border border-stone-950 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-stone-950 hover:text-amber-500">
              Call now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}