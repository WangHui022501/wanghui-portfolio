'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import { useLang, pick } from '@/lib/i18n'

const links = [
  { href: '/architecture', label: 'Architecture', zh: '建筑' },
  { href: '/vibecoding', label: 'AIGC&Vibecoding', zh: '编程' },
  { href: '/maps', label: 'Maps', zh: '地图' },
  { href: '/drawing', label: 'Drawing', zh: '绘画' },
  { href: '/photography', label: 'Photography', zh: '摄影' },
  { href: '/about', label: 'About', zh: '关于' },
]

export default function Nav() {
  const pathname = usePathname()
  const { lang, toggle } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-tight hover:text-wisteria transition-colors"
        >
          {pick(lang, 'Wang Hui', '王慧')}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + '/')
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    'relative text-sm tracking-wide transition-colors py-1',
                    active ? 'text-ink' : 'text-muted hover:text-ink'
                  )}
                >
                  {pick(lang, l.label, l.zh)}
                  <span
                    className={clsx(
                      'absolute left-0 -bottom-0.5 h-px bg-wisteria transition-all duration-300',
                      active ? 'w-full' : 'w-0'
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Lang toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-xs tracking-widest text-muted hover:text-wisteria transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={clsx('block w-5 h-px bg-ink transition-all duration-300', menuOpen && 'rotate-45 translate-y-[6px]')} />
            <span className={clsx('block w-5 h-px bg-ink transition-all duration-300', menuOpen && 'opacity-0')} />
            <span className={clsx('block w-5 h-px bg-ink transition-all duration-300', menuOpen && '-rotate-45 -translate-y-[6px]')} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-b border-border px-6 pb-5 animate-fade-in">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + '/')
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      'flex items-center justify-between py-2.5 text-sm tracking-wide border-b border-border/60',
                      active ? 'text-ink' : 'text-muted'
                    )}
                  >
                    <span>{pick(lang, l.label, l.zh)}</span>
                    <span className="text-xs text-periwinkle">{lang === 'en' ? l.zh : l.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
