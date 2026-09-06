import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { capabilities } from '@/app/lib/site'

const serviceDetails = Object.fromEntries(
  capabilities.map((service) => [service.slug, service]),
) as Record<string, (typeof capabilities)[number]>

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <main className="bg-stone-100 pt-20 text-stone-900">
        <section className="relative min-h-[560px] overflow-hidden bg-stone-950">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                href="/services"
                className="mb-12 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400"
              >
                <ArrowLeft className="h-4 w-4" />
                All capabilities
              </Link>

              <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-400">
                {service.title}
              </div>
              <h1 className="mt-5 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
                {service.title.toUpperCase()}
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-200">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="section-kicker">Scope of work</div>
              <h2 className="mt-6 font-display text-4xl text-stone-950 sm:text-5xl">
                TECHNICAL SOLUTIONS.
                <span className="mt-2 block text-stone-600">PRACTICAL EXECUTION.</span>
              </h2>

              <p className="mt-7 text-base leading-8 text-stone-700">
                This capability is shaped around project delivery requirements, operational constraints and long-term asset performance. Services are typically scoped to match the environment, risk profile and schedule requirements of each client.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={feature} className="border border-stone-300 bg-white p-5">
                    <div className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-600">
                      0{index + 1}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-stone-900">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit border border-stone-300 bg-white p-8 lg:sticky lg:top-28">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-600">
                Start a project
              </div>
              <h3 className="mt-4 font-display text-3xl text-stone-950">Discuss your requirements</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                Tell us about the facility, the project objective and the delivery requirements, and we can review the next steps together.
              </p>

              <Link href="/contact" className="mt-8 flex items-center justify-between bg-stone-950 px-5 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-amber-500 hover:text-stone-950">
                Request proposal
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}