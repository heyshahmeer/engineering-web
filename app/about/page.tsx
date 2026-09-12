import Link from 'next/link'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

import { ArrowRight, ArrowUpRight } from 'lucide-react'

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

        {/* HERO */}
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
                About BDMCO
              </div>

              <h1 className="mt-5 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                BUILT ON
                <span className="mt-2 block text-stone-300">
                  EXPERIENCE.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
                A qualified contracting company delivering reliable engineering
                and construction solutions across the Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>
        </section>



        {/* COMPANY AREAS */}
        <section className="border-b border-stone-300 bg-stone-100">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map(([title, label]) => (
              <div
                key={title}
                className="border-r border-stone-300 px-3 py-6 last:border-r-0"
              >
                <div className="text-2xl font-semibold text-stone-950">
                  {title}
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT COMPANY */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

            <div>
              <div className="section-kicker">
                01 / About Us
              </div>

              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                A QUALIFIED CONTRACTOR BUILT FOR RELIABLE DELIVERY.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-stone-700">
              <p>
                Bashir Ahmad Dost Muhammad Contracting Company is one of the
                leading qualified contractors in the Kingdom of Saudi Arabia,
                directed by a highly qualified and experienced technical team.
              </p>

              <p>
                The company established its position at the core of the
                contracting business through a highly skilled workforce and
                professional management. Over a relatively short period,
                BDMCO has advanced rapidly and successfully accomplished
                numerous projects for national and multinational companies.
              </p>

              <p>
                Through this experience, the company has established itself as
                a reliable contractor for a wide range of engineering and
                construction requirements.
              </p>

              <p>
                We are a quality- and time-conscious contractor, with a proven
                track record of keeping time and cost at the forefront of
                project execution.
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-600"
              >
                Explore our capabilities
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </section>


        {/* CHAIRMAN'S STATEMENT */}
        <section className="border-y border-stone-300 bg-stone-200/60">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden border border-stone-300 bg-stone-100 lg:grid-cols-[0.75fr_1.25fr]">

              {/* Chairman */}
              <div className="relative flex min-h-[520px] flex-col justify-between border-b border-stone-300 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

                {/* Photo */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="w-full max-w-[360px]">
                    <div className="aspect-[3/4] overflow-hidden bg-stone-300">
                      <img
                        src="/images/chairman.jpg"
                        alt="Bashir Ahmad Dost Muhammad"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-[0.22em] text-stone-500">
                    Chairman
                  </div>

                  <div className="mt-2 font-display text-2xl text-stone-950 sm:text-3xl">
                    Bashir Ahmad
                  </div>

                  <div className="mt-1 text-sm text-stone-600">
                    Dost Muhammad
                  </div>
                </div>
              </div>

              {/* Statement */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">

                {/* Heading */}
                <div>
                  <div className="section-kicker">
                    02 / Chairman&apos;s Statement
                  </div>

                  <h2 className="mt-6 font-display text-4xl leading-[0.95] text-stone-950 sm:text-5xl lg:text-6xl">
                    BETTER SERVICES.
                    <span className="mt-2 block text-stone-500">
                      BETTER QUALITY.
                    </span>
                  </h2>

                  <div className="mt-8 h-px w-20 bg-amber-500" />
                </div>

                {/* Message */}
                <div className="mt-10 space-y-6 text-sm leading-7 text-stone-700 sm:text-base">

                  <p>
                    Since its establishment in 2005, the Bashir Ahmad Dost Muhammad
                    Contracting Company, with uncompromising integrity and under the
                    motto of{" "}
                    <span className="font-semibold text-stone-950">
                      “Better Services, Better Quality,”
                    </span>{" "}
                    BDM has always strived to provide quality services that provide
                    value to our clients.
                  </p>

                  <p>
                    We are working in core construction and its allied services in the
                    fields of{" "}
                    <span className="font-medium text-stone-950">
                      Oil & Gas, Petrochemicals, Fertilizer, Mining & Mineral, Power &
                      Water, and Transportation Systems.
                    </span>
                  </p>

                  <p>
                    Our priority is client satisfaction with quality and safety at
                    reasonable and current market rates. Our team is entirely devoted
                    to achieving all its goals, with talented people and the latest
                    technologies to keep projects flourishing within the budget.
                  </p>

                  <p>
                    We maintain a high degree of time awareness, attention to detail,
                    cooperative attitude, and the highest level of professionalism,
                    truthfulness, trustworthiness and transparency with our vendors,
                    subcontractors, professional colleagues and clients.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8">
                  <div className="h-16 w-48">
                    <img
                      src="/images/signature.png"
                      alt="Bashir Ahmad Dost Muhammad signature"
                      className="h-full w-full object-contain object-left"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE / POSITIONING */}
        <section className="bg-stone-950">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

              <div>
                <div className="section-kicker !text-amber-400">
                  03 / Our Position
                </div>

                <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                  EXPERIENCE THAT SUPPORTS CONFIDENT PROJECT DELIVERY.
                </h2>

                <div className="mt-8 space-y-6 text-base leading-8 text-stone-300">
                  <p>
                    BDMCO combines technical knowledge, experienced personnel
                    and professional project management to deliver dependable
                    engineering solutions.
                  </p>

                  <p>
                    Our experience working with both national and multinational
                    organizations has strengthened our ability to understand
                    project requirements, coordinate effectively and maintain
                    the standards expected from a professional contractor.
                  </p>

                  <p>
                    From project execution to completion, our focus remains on
                    quality, time management, cost awareness and the practical
                    requirements of our clients.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[440px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                  alt="Construction project"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
            <div className="section-kicker">
              04 / Mission & Vision
            </div>

            <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
              HIGH STANDARDS. RELIABLE PERFORMANCE. LONG-TERM PARTNERSHIPS.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="border border-stone-300 bg-stone-200/50 p-8 lg:p-10">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">
                Mission
              </div>

              <h3 className="mt-7 font-display text-3xl text-stone-950">
                SERVING CLIENTS WITH PROFESSIONALISM AND PRECISION.
              </h3>

              <p className="mt-6 text-base leading-8 text-stone-700">
                BDMCO is dedicated to serving its clients with the highest
                expected standards through a reliable quality system,
                knowledgeable management and optimum utilization of available
                resources.
              </p>

              <p className="mt-5 text-base leading-8 text-stone-700">
                We are committed to caring for our employees and meeting the
                expectations of our business partners through responsible,
                efficient and professional project delivery.
              </p>
            </div>

            <div className="bg-stone-950 p-8 lg:p-10">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400">
                Vision
              </div>

              <h3 className="mt-7 font-display text-3xl text-white">
                CONSISTENTLY EXCEEDING EXPECTATIONS.
              </h3>

              <p className="mt-6 text-base leading-8 text-stone-300">
                It is essential that we consistently meet or exceed our
                clients&apos; expectations for quality, performance, time
                management and cost across the products and services we
                deliver.
              </p>

              <p className="mt-5 text-base leading-8 text-stone-300">
                Our vision is to build lasting business relationships through
                dependable performance, responsible management and a
                consistent commitment to quality.
              </p>
            </div>

          </div>
        </section>


        {/* HSE & QUALITY POLICIES */}
        <section className="bg-stone-950">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

            <div className="max-w-3xl">
              <div className="section-kicker !text-amber-400">
                05 / Our Standards
              </div>

              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                SAFETY AND QUALITY AT THE CORE OF OUR WORK.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">

              {/* HSE POLICY */}
              <div className="border border-stone-800 bg-stone-900 p-8 lg:p-10">
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400">
                  HSE Policy
                </div>

                <h3 className="mt-7 font-display text-3xl text-white">
                  SAFETY FIRST, ON EVERY PROJECT.
                </h3>

                <p className="mt-6 text-base leading-8 text-stone-300">
                  We pride ourselves on achieving low accident and injury rates by
                  emphasizing safe working practices across all areas of our business.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    'Our HSE Manual maintains high protection standards for employees, sub-contractors and clients.',
                    'Our Safety Handbook is translated into three languages to ensure clear communication across our workforce.',
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-l border-amber-400 pl-5 text-sm leading-7 text-stone-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* QUALITY POLICY */}
              <div className="border border-stone-300 bg-stone-100 p-8 lg:p-10">
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">
                  Quality Policy
                </div>

                <h3 className="mt-7 font-display text-3xl text-stone-950">
                  BETTER THAN THE PAST. BETTER THAN EXPECTED.
                </h3>

                <p className="mt-6 text-base leading-8 text-stone-700">
                  We are committed to maintaining the highest level of quality and
                  efficiency in our services while continuously improving the way
                  we work.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    'Maintaining the highest level of quality and efficiency in our services according to specifications.',
                    'Pursuing excellence in every work activity undertaken.',
                    'Strict compliance with applicable standards and regulations.',
                    'Recognizing the total involvement and participation of our entire workforce.',
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-l border-amber-600 pl-5 text-sm leading-7 text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="border-t border-stone-300 bg-stone-200/60">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

            <div className="max-w-3xl">
              <div className="section-kicker">
                06 / Principles
              </div>

              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                THE STANDARDS BEHIND OUR WORK.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="border border-stone-300 bg-stone-100 p-7"
                >
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">
                    0{index + 1}
                  </div>

                  <h3 className="mt-8 font-display text-3xl text-stone-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
        ```

        {/* CTA */}
        <section className="bg-stone-950">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <div className="section-kicker !text-amber-400">
                  07 / Next Steps
                </div>

                <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                  READY TO DISCUSS YOUR PROJECT?
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-white"
              >
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

