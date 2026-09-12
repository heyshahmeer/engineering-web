'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { AnimatePresence, motion } from 'framer-motion'

import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

import { company, services } from '@/app/lib/site'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-950/95 shadow-2xl'
          : 'bg-stone-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-amber-500 bg-stone-900 text-sm font-bold tracking-[0.2em] text-amber-400">
              BDM
            </div>

            <div className="leading-none text-left">
              <div className="text-lg font-semibold tracking-[0.22em] text-white">
                {company.shortName}
              </div>

              <div className="mt-1 text-[9px] tracking-[0.26em] text-stone-300">
                ELECTROMECHANICAL & CIVIL
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400"
              >
                {item.name}
              </Link>
            ))}

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400"
              >
                Services

                <ChevronDown
                  className={`h-4 w-4 transition ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-10 max-h-[70vh] w-80 overflow-y-auto border border-stone-700 bg-stone-950/95 p-2 shadow-2xl"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block border-b border-stone-800 px-3 py-3 text-[11px] uppercase tracking-[0.14em] text-stone-200 transition hover:bg-stone-900 hover:text-amber-400 last:border-b-0"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Navigation */}
            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition hover:text-amber-400"
            >
              Request a Quote
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-amber-500 bg-amber-500 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-transparent hover:text-amber-400"
            >
              Start a Project

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-none border border-stone-700 p-2 text-stone-100 lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-stone-800 bg-stone-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl divide-y divide-stone-800 px-4 py-4 sm:px-6">

              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-200"
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-200"
              >
                About
              </Link>

              {/* Services */}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-200"
              >
                Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-200"
              >
                Projects
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-200"
              >
                Contact
              </Link>

              {/* CTA */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-400"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
