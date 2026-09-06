import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { capabilities, company } from '@/app/lib/site'

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-stone-800 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-amber-400 bg-stone-900 text-sm font-bold tracking-[0.2em] text-amber-400">
                YC
              </div>
              <div>
                <div className="text-lg font-semibold tracking-[0.2em] text-white">
                  YOUR CO.
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-stone-400">
                  Engineering & Construction
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-stone-400">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              Navigation
            </div>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Capabilities</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              Capabilities
            </div>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              {capabilities.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              <li>{company.location}</li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 pt-2 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-amber-400">
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
