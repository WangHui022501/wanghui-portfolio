'use client'

import Link from 'next/link'
import { useLang, pick } from '@/lib/i18n'

const sections = [
  { href: '/architecture', label: 'Architecture', zh: '建筑', num: '01' },
  { href: '/vibecoding', label: 'AIGC&Vibecoding', zh: '编程', num: '02' },
  { href: '/maps', label: 'Maps', zh: '地图', num: '03' },
  { href: '/drawing', label: 'Drawing', zh: '绘画', num: '04' },
  { href: '/photography', label: 'Photography', zh: '摄影', num: '05' },
]

export default function Home() {
  const { lang } = useLang()

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="relative py-28 md:py-40 border-b border-border overflow-hidden">
        {/* Soft palette aura */}
        <div className="pointer-events-none absolute -top-24 right-0 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-periwinkle/40 via-wisteria/30 to-aqua/20 blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-40 -left-20 w-80 h-80 rounded-full bg-lavender/50 blur-3xl -z-10" />

        <p className="text-xs tracking-widest text-muted uppercase mb-6 animate-fade-up">
          {pick(lang, 'Portfolio', '作品集')}
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tight leading-[0.95] text-ink animate-fade-up">
          {pick(lang, 'Wang Hui', '王慧')}
        </h1>
        <p
          className="font-serif text-4xl md:text-6xl font-light tracking-tight leading-none text-periwinkle mt-3 animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          {pick(lang, '王慧', 'Wang Hui')}
        </p>
        <p
          className="mt-10 text-[15px] md:text-base text-muted max-w-md leading-relaxed animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          {pick(
            lang,
            'Designer and creative working across drawing, architecture, photography, map design, and code.',
            '设计师与创作者，工作横跨绘画、建筑、摄影、地图设计与代码。'
          )}
        </p>
      </section>

      {/* Section index */}
      <section className="py-12 md:py-16">
        <ul>
          {sections.map((s, i) => (
            <li key={s.href} className="border-b border-border">
              <Link
                href={s.href}
                className="flex items-center justify-between py-6 group transition-colors"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-xs text-periwinkle">{s.num}</span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl md:text-3xl font-light text-ink group-hover:text-wisteria transition-colors">
                      {pick(lang, s.label, s.zh)}
                    </span>
                    <span className="text-sm text-muted">{pick(lang, s.zh, s.label)}</span>
                  </div>
                </div>
                <span className="text-muted group-hover:text-wisteria group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
