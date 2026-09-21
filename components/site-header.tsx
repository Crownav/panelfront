"use client"

import { useState } from "react"
import { Logo } from "./logo"
import { Headphones, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Hosting Plans", href: "#hosting" },
  { label: "Server Licenses", href: "#licenses" },
  { label: "Redirector", href: "#redirector" },
  { label: "Mailer", href: "#mailer" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08080c]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Luma home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90 transition-colors hover:border-white/30">
            <Headphones className="h-4 w-4 text-[var(--hx-cyan)]" />
            Live Support
          </button>
          <a
            href="#login"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            Login
          </a>
          <a
            href="#signup"
            className="hx-btn-primary rounded-lg px-4 py-2 text-sm font-semibold"
          >
            Sign Up
          </a>
        </div>

        <button
          className="text-white/80 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0b0b11] px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#login"
                className="flex-1 rounded-lg border border-white/15 px-4 py-2 text-center text-sm text-white/90"
              >
                Login
              </a>
              <a
                href="#signup"
                className="hx-btn-primary flex-1 rounded-lg px-4 py-2 text-center text-sm font-semibold"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
